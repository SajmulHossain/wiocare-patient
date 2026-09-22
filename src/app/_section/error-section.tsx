import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  RiErrorWarningFill,
  RiRefreshLine,
  RiHome3Line,
} from "@remixicon/react";
import Link from "next/link";

export const ErrorSection = ({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => {
  useEffect(() => {
    // Log the error to an error reporting service in production
    console.error("Application Error:", error);
  }, [error]);

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden p-4 text-center bg-soft dark:bg-background">
      {/* Background ambient light - Red for error */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-100 bg-red-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative mb-8 z-10 flex flex-col items-center">
        <div className="relative flex items-center justify-center">
          <h1 className="text-[120px] font-black leading-none tracking-tighter text-transparent bg-clip-text bg-linear-to-br from-red-500 via-red-600 to-red-900 select-none md:text-[200px] opacity-10 dark:opacity-20">
            500
          </h1>
          <div className="absolute flex items-center justify-center bg-background rounded-full p-4 shadow-2xl border border-red-500/20">
            <RiErrorWarningFill className="h-16 w-16 text-red-500 animate-pulse" />
          </div>
        </div>
      </div>

      <div className="z-10 max-w-lg space-y-6 bg-background/60 backdrop-blur-2xl p-8 rounded-[2rem] border shadow-sm mx-4 border-red-500/10">
        <div className="space-y-3">
          <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
            Something went wrong!
          </h2>
          <p className="text-muted-foreground text-base md:text-lg mx-auto leading-relaxed">
            An unexpected error has occurred in the application. We've logged
            the issue and our system is looking into it.
          </p>
          {error.digest && (
            <p className="text-xs text-muted-foreground/50">
              Error ID: {error.digest}
            </p>
          )}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
          <Button
            variant="outline"
            size="lg"
            className="rounded-full w-full sm:w-auto gap-2 h-12 px-6"
            onClick={() => reset()}
          >
            <RiRefreshLine className="h-5 w-5" />
            Try Again
          </Button>
          <Button
            asChild
            size="lg"
            className="rounded-full w-full sm:w-auto gap-2 h-12 px-6 bg-red-600 hover:bg-red-700 text-white"
          >
            <Link href="/">
              <RiHome3Line className="h-5 w-5" />
              Return to Home
            </Link>
          </Button>
        </div>
      </div>
    </main>
  );
};
