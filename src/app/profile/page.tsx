"use client";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  RiBriefcaseLine,
  RiCloseLine,
  RiDownloadCloudLine,
  RiGlobeLine,
  RiHeartPulseLine,
  RiHomeLine,
  RiMoreLine,
  RiSettingsLine,
} from "@remixicon/react";
import Image from "next/image";

export default function ProfilePage() {
  return (
    <div className="min-h-screen w-full max-w-6xl mx-auto">
      <div className="relative mb-8">
        {/* Cover Photo with gradient overlay */}
        <div className="relative h-64 w-full rounded-2xl overflow-hidden bg-gradient-to-r from-indigo-600/70 via-purple-600/70 to-pink-600/70">
          {/* Subtle gradient overlay for depth */}
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/10 via-purple-900/10 to-pink-900/10 pointer-events-none" />
        </div>

        <div className="relative -mt-12 px-4">
          <div className="relative inline-block">
            {/* Profile Picture with premium border */}
            <div className="relative h-28 w-28 rounded-2xl ring-4 ring-white dark:ring-zinc-950 shadow-lg overflow-hidden">
              <Image
                src="/avatars/shadcn.jpg"
                alt="User Avatar"
                width={112}
                height={112}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Online status indicator */}
            <div className="absolute bottom-2 right-2 h-4 w-4 rounded-full border-2 border-white dark:border-zinc-950 bg-emerald-500" />
          </div>

          {/* Follower/Following counts */}
          <div className="absolute right-4 bottom-4 flex items-center gap-6 bg-white dark:bg-zinc-900/60 backdrop-blur-xl px-4 py-2 rounded-full border border-zinc-200 dark:border-zinc-800 shadow-sm">
            <div className="text-center">
              <div className="font-bold text-lg">1.2M</div>
              <div className="text-xs text-zinc-500 dark:text-zinc-400">
                Followers
              </div>
            </div>
            <div className="w-px h-6 bg-zinc-200 dark:bg-zinc-800" />
            <div className="text-center">
              <div className="font-bold text-lg">284</div>
              <div className="text-xs text-zinc-500 dark:text-zinc-400">
                Following
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 px-4">
        {/* Left Sidebar: User Info */}
        <div className="lg:col-span-1 space-y-8">
          {/* Profile Card */}
          <div className="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="font-bold text-xl">Alex Johnson</h2>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">
                  @alexjohnson
                </p>
              </div>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    size="icon"
                    variant="ghost"
                    className="h-8 w-8 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg"
                  >
                    <RiMoreLine className="h-4 w-4" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-48">
                  <div className="space-y-2">
                    <Button variant="ghost" className="w-full justify-start">
                      <RiSettingsLine className="h-4 w-4 mr-2" />
                      Settings
                    </Button>
                    <Button variant="ghost" className="w-full justify-start">
                      <RiDownloadCloudLine className="h-4 w-4 mr-2" />
                      Export Data
                    </Button>
                    <div className="h-px bg-zinc-200 dark:bg-zinc-800 my-2" />
                    <Button
                      variant="ghost"
                      className="w-full justify-start text-red-500 hover:bg-red-500/10"
                    >
                      <RiCloseLine className="h-4 w-4 mr-2" />
                      Delete Account
                    </Button>
                  </div>
                </PopoverContent>
              </Popover>
            </div>

            <div className="space-y-6">
              {/* Bio Section */}
              <div className="space-y-2">
                <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed text-sm">
                  Product Designer crafting seamless digital experiences.
                  Passionate about building beautiful and intuitive interfaces.
                </p>
              </div>

              {/* Key Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-lg bg-indigo-100 dark:bg-indigo-900/30">
                    <RiBriefcaseLine className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <div>
                    <div className="font-bold text-sm">3</div>
                    <div className="text-xs text-zinc-500 dark:text-zinc-400">
                      Projects
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/30">
                    <RiHeartPulseLine className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <div className="font-bold text-sm">4.8</div>
                    <div className="text-xs text-zinc-500 dark:text-zinc-400">
                      Rating
                    </div>
                  </div>
                </div>
              </div>

              {/* Location and Website */}
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <RiHomeLine className="h-4 w-4 text-zinc-500 dark:text-zinc-400" />
                  <span className="text-sm">San Francisco, CA</span>
                </div>
                <div className="flex items-center gap-2">
                  <RiGlobeLine className="h-4 w-4 text-zinc-500 dark:text-zinc-400" />
                  <span className="text-sm text-blue-600 dark:text-blue-400">
                    alexdesign.com
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
