"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { RiCloseCircleFill, RiRefreshLine } from "@remixicon/react";

export const GlobalErrorSection = ({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => {
  useEffect(() => {
    // Log critical error
    console.error("Critical Global Error:", error);
  }, [error]);

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden p-4 text-center bg-zinc-950 text-zinc-50">
      {/* Background ambient light - Red for critical error */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-150 bg-red-600/20 blur-[150px] rounded-full pointer-events-none" />

      <div className="relative mb-8 z-10 flex flex-col items-center">
        <div className="relative flex items-center justify-center">
          <h1 className="text-[100px] font-black leading-none tracking-tighter text-transparent bg-clip-text bg-linear-to-br from-red-400 via-red-600 to-red-900 select-none md:text-[180px] opacity-20">
            CRITICAL
          </h1>
          <div className="absolute flex items-center justify-center bg-zinc-900 rounded-full p-6 shadow-2xl border border-red-500/30">
            <RiCloseCircleFill className="h-20 w-20 text-red-500" />
          </div>
        </div>
      </div>

      <div className="z-10 max-w-xl space-y-6 bg-zinc-900/60 backdrop-blur-3xl p-10 rounded-[2.5rem] border border-red-500/20 shadow-2xl mx-4">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl text-zinc-50">
            Critical System Failure
          </h2>
          <p className="text-zinc-400 text-base md:text-lg mx-auto leading-relaxed">
            The application encountered an unrecoverable rendering error at the
            root level. Please try forcefully reloading the application.
          </p>
          {error.digest && (
            <p className="text-sm font-mono text-zinc-600">
              Error ID: {error.digest}
            </p>
          )}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
          <Button
            size="lg"
            className="rounded-full w-full sm:w-auto gap-2 h-14 px-8 bg-red-600 hover:bg-red-700 text-white text-lg border-0 shadow-lg shadow-red-900/50"
            onClick={() => reset()}
          >
            <RiRefreshLine className="h-6 w-6" />
            Force Reload
          </Button>
        </div>
      </div>
    </main>
  );
};
