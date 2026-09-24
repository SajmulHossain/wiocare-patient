"use client";

import {
  LocalUser, // Plays the microphone audio track and the camera video track
  RemoteUser, // Returns whether the SDK is connected to Agora's server
  useJoin, // Automatically join and leave a channel on mount and unmount
  useLocalMicrophoneTrack, // Create a local microphone audio track
  useLocalCameraTrack, // Create a local camera video track
  usePublish, // Publish the local tracks
  useRemoteUsers,
} from "agora-rtc-react";
import { useSearchParams, useRouter } from "next/navigation";
import { useState } from "react";
import {
  RiMicFill,
  RiMicOffFill,
  RiVideoOnFill,
  RiVideoOffFill,
  RiPhoneFill,
} from "@remixicon/react";
import { Button } from "../ui/button";
import { Spinner } from "../ui/spinner";
import { Empty, EmptyHeader, EmptyMedia, EmptyTitle } from "../ui/empty";

const WioVideoCall = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const uidStr = searchParams.get("uid");
  const uid = uidStr
    ? Number.isNaN(Number(uidStr))
      ? uidStr
      : Number(uidStr)
    : null;
  // searchParams.get() decodes '+' as spaces per URL spec,
  // but Agora tokens are base64 and never contain spaces — restore them.
  const rawToken = searchParams.get("token");
  const token = rawToken ? rawToken.replaceAll(" ", "+") : null;
  const channel = searchParams.get("channel") || "test-channel";

  const [appId] = useState((process.env.NEXT_PUBLIC_AGORA_APP_ID || "").trim());
  const [calling, setCalling] = useState(true);
  const [micOn, setMicOn] = useState(true);
  const [cameraOn, setCameraOn] = useState(true);

  const { localMicrophoneTrack } = useLocalMicrophoneTrack(micOn);
  const { localCameraTrack } = useLocalCameraTrack(cameraOn);
  const remoteUsers = useRemoteUsers();

  const { isConnected, isLoading } = useJoin(
    {
      appid: appId,
      channel: channel,
      token: token ? token : null,
      uid,
    },
    calling && !!appId,
  );

  usePublish([localMicrophoneTrack, localCameraTrack], calling && isConnected);

  const endCall = () => {
    setCalling(false);
    // Redirect to home or another page after ending the call
    router.push("/");
  };

  if (!appId) {
    return (
      <div className="flex flex-col items-center justify-center w-full h-full bg-neutral-900 text-white">
        <h2 className="text-xl font-bold text-red-500 mb-2">
          Missing Agora App ID
        </h2>
        <p>
          Please check your .env file and ensure NEXT_PUBLIC_AGORA_APP_ID is set
          correctly.
        </p>
      </div>
    );
  }

  return (
    <div className="relative w-full h-full bg-neutral-900 overflow-hidden flex items-center justify-center">
      {/* Remote Users (Full Screen) */}
      <div className="absolute inset-0 flex items-center justify-center w-full h-full bg-black">
        {remoteUsers.length > 0 ? (
          remoteUsers.map((user) => {
            console.log(user);
            return (
              <div key={user.uid}>
                {user.hasVideo ? (
                  <RemoteUser
                    user={user}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                ) : (
                  <Empty>
                    <EmptyHeader>
                      <EmptyTitle>Opposition turned off the camera!</EmptyTitle>
                    </EmptyHeader>
                    <EmptyMedia>
                      <RiVideoOffFill size={48} />
                    </EmptyMedia>
                  </Empty>
                )}
              </div>
            );
          })
        ) : (
          <div className="flex flex-col items-center justify-center gap-4">
            <div className="w-12 h-12 border-4 border-t-white border-white/20 rounded-full animate-spin"></div>
            <p className="text-white/70 text-lg font-medium animate-pulse">
              Waiting for others to join...
            </p>
          </div>
        )}
      </div>

      {/* Local User (Top Left Small View) */}
      <div className="absolute top-4 left-4 sm:top-6 sm:left-6 w-32 h-44 sm:w-48 sm:h-64 rounded-2xl overflow-hidden border-2 border-white/20 shadow-2xl z-10 bg-neutral-800 transition-all duration-300">
        <LocalUser
          audioTrack={localMicrophoneTrack}
          cameraOn={cameraOn}
          micOn={micOn}
          videoTrack={localCameraTrack}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        <div className="absolute bottom-3 bg-black/60 px-2.5 py-1 rounded-md text-white text-xs font-medium backdrop-blur-md w-full">
          <div className="flex justify-between items-center w-full">
            <span>You</span>
            <span className="flex gap-2 items-center">
              {micOn ? <RiMicFill size={16} /> : <RiMicOffFill size={16} />}
              {cameraOn ? (
                <RiVideoOnFill size={16} />
              ) : (
                <RiVideoOffFill size={16} />
              )}
            </span>
          </div>
        </div>
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/20">
            <Spinner className="text-white" />
          </div>
        )}
      </div>

      {/* Call Controls (Bottom Screen) */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4 sm:gap-6 bg-black/40 backdrop-blur-xl px-6 sm:px-8 py-4 rounded-full border border-white/10 z-20 shadow-[0_8px_30px_rgb(0,0,0,0.5)]">
        <Button
          onClick={() => setMicOn((prev) => !prev)}
          className={`p-3.5 sm:p-4 rounded-full transition-all duration-300 ${
            micOn
              ? "bg-white/10 hover:bg-white/20 text-white"
              : "bg-red-500 hover:bg-red-600 text-white shadow-[0_0_15px_rgba(239,68,68,0.4)]"
          }`}
          title={micOn ? "Mute Microphone" : "Unmute Microphone"}
        >
          {micOn ? <RiMicFill size={24} /> : <RiMicOffFill size={24} />}
        </Button>

        <Button
          onClick={endCall}
          className="p-4 sm:p-5 rounded-full bg-red-600 hover:bg-red-700 text-white transition-all duration-300 shadow-[0_0_20px_rgba(220,38,38,0.6)] hover:scale-105"
          title="End Call"
        >
          <RiPhoneFill size={28} className="rotate-135" />
        </Button>

        <Button
          onClick={() => setCameraOn((prev) => !prev)}
          className={`p-3.5 sm:p-4 rounded-full transition-all duration-300 ${
            cameraOn
              ? "bg-white/10 hover:bg-white/20 text-white"
              : "bg-red-500 hover:bg-red-600 text-white shadow-[0_0_15px_rgba(239,68,68,0.4)]"
          }`}
          title={cameraOn ? "Turn Off Camera" : "Turn On Camera"}
        >
          {cameraOn ? (
            <RiVideoOnFill size={24} />
          ) : (
            <RiVideoOffFill size={24} />
          )}
        </Button>
      </div>
    </div>
  );
};

export default WioVideoCall;
