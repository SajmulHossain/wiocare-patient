"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { RiHome3Line, RiArrowLeftLine, RiCompass3Fill } from "@remixicon/react";

export const NotFoundSection = () => {
  const router = useRouter();

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden p-4 text-center bg-soft dark:bg-background">
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-100 bg-primary/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative mb-8 z-10 flex flex-col items-center">
        <div className="relative flex items-center justify-center">
          <h1 className="text-[120px] font-black leading-none tracking-tighter text-transparent bg-clip-text bg-linear-to-br from-primary via-primary-dark to-primary-darker select-none md:text-[200px] opacity-20 dark:opacity-40">
            404
          </h1>
          <div className="absolute flex items-center justify-center bg-background rounded-full p-4 shadow-2xl border">
            <RiCompass3Fill className="h-16 w-16 text-primary animate-[spin_5s_linear_infinite]" />
          </div>
        </div>
      </div>

      <div className="z-10 max-w-lg space-y-6 bg-background/60 backdrop-blur-2xl p-8 rounded-[2rem] border shadow-sm mx-4">
        <div className="space-y-3">
          <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
            Lost in the ecosystem?
          </h2>
          <p className="text-muted-foreground text-base md:text-lg mx-auto leading-relaxed">
            The page you are looking for has been moved, deleted, or possibly
            never existed. Let's get you back on track.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
          <Button
            variant="outline"
            size="lg"
            className="rounded-full w-full sm:w-auto gap-2 h-12 px-6"
            onClick={() => router.back()}
          >
            <RiArrowLeftLine className="h-5 w-5" />
            Go Back
          </Button>
          <Button
            asChild
            size="lg"
            className="rounded-full w-full sm:w-auto gap-2 h-12 px-6"
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
