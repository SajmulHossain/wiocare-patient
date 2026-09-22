import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getNameInitialCharacter } from "@/lib/getNameInitChar";
import type { IUser } from "@/types";
import { RiShieldKeyholeLine, RiCamera3Line } from "@remixicon/react";

import bannerLogo from "@/assets/images/logos/wiocare-w.svg";
import Image from "next/image";

export const ProfileHeader = ({ user }: { user: IUser }) => {
  return (
    <section className="relative mb-8 w-full">
      {/* Cover Photo with gradient overlay */}
      <div className="relative h-48 p-4 md:h-64 w-full rounded-2xl overflow-hidden bg-linear-to-r from-primary/80 via-primary-dark/80 to-primary-darker/80 shadow-inner">
        <div className="absolute inset-0 bg-background/10 backdrop-blur-[2px] pointer-events-none" />
        <Image src={bannerLogo} alt="Wiocare banner logo" />
      </div>

      <div className="relative -mt-16 px-4 md:px-8 flex flex-col md:flex-row items-center md:items-end gap-4 md:gap-8">
        <div className="relative inline-block">
          {/* Profile Picture using Shadcn Avatar */}
          <div className="relative group rounded-2xl">
            <Avatar className="h-32 w-32 md:h-40 md:w-40 rounded-2xl ring-4 ring-background shadow-xl overflow-hidden bg-background transition-transform group-hover:scale-[1.02]">
              {user.photo && (
                <AvatarImage
                  src={user.photo}
                  alt={user.name}
                  className="object-cover"
                />
              )}
              <AvatarFallback className="text-4xl font-bold bg-muted text-muted-foreground rounded-2xl">
                {getNameInitialCharacter(user.name)}
              </AvatarFallback>
            </Avatar>

            {/* Edit Photo Overlay */}
            <label className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 backdrop-blur-sm transition-opacity rounded-2xl flex flex-col items-center justify-center cursor-pointer border-2 border-dashed border-primary/50 text-foreground z-10 m-1">
              <input type="file" className="hidden" accept="image/*" />
              <RiCamera3Line className="h-8 w-8 mb-1 opacity-80" />
              <span className="text-xs font-medium opacity-90">
                Change Photo
              </span>
            </label>
          </div>

          {/* Online status indicator */}
          <div className="absolute bottom-2 right-2 h-5 w-5 rounded-full border-[3px] border-background bg-emerald-500 shadow-sm z-20" />
        </div>

        {/* Primary Info */}
        <div className="flex-1 text-center md:text-left md:mb-2 space-y-1">
          <h1 className="font-bold text-2xl md:text-3xl text-foreground tracking-tight">
            {user.name}
          </h1>
          <p className="text-muted-foreground text-sm md:text-base font-medium">
            @{user.username}
          </p>
          <div className="flex items-center justify-center md:justify-start gap-1.5 mt-3 text-primary font-mono text-sm bg-primary/10 w-fit mx-auto md:mx-0 px-3 py-1.5 rounded-full border border-primary/20">
            <RiShieldKeyholeLine className="h-4 w-4" />
            <span>WioID: {user.wioId}</span>
          </div>
        </div>
      </div>
    </section>
  );
};
