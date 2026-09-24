"use client";

import WioVideoCall from "@/components/shared/wio-video-call";
import AgoraRTC, { AgoraRTCProvider } from "agora-rtc-react";

const client = AgoraRTC.createClient({ mode: "rtc", codec: "vp8" });
const TelemedicineSection = () => {
  return (
    <AgoraRTCProvider client={client}>
      <WioVideoCall />
    </AgoraRTCProvider>
  );
};

export default TelemedicineSection;
