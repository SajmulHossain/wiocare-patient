import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { ProfileContent } from "./_section/profile-content";
import type { Metadata } from "next";

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    title: "Sajmul Hossain",
  };
};

export default function ProfilePage() {
  return (
    <div className="min-h-screen w-full max-w-6xl mx-auto pb-10">
      <Suspense fallback={<ProfileSkeleton />}>
        <ProfileContent />
      </Suspense>
    </div>
  );
}

// Fallback Skeleton UI mimicking the layout structure
const ProfileSkeleton = () => {
  return (
    <div className="w-full space-y-8 animate-pulse">
      <div className="relative mb-8 w-full">
        <Skeleton className="h-48 md:h-64 w-full rounded-2xl" />
        <div className="relative -mt-16 px-4 md:px-8 flex flex-col md:flex-row items-center md:items-end gap-4 md:gap-8">
          <Skeleton className="h-32 w-32 md:h-40 md:w-40 rounded-2xl ring-4 ring-background shadow-xl shrink-0" />
          <div className="flex-1 w-full flex flex-col items-center md:items-start gap-2 pt-4">
            <Skeleton className="h-8 w-48 rounded-full" />
            <Skeleton className="h-4 w-32 rounded-full" />
            <Skeleton className="h-8 w-40 rounded-full mt-2" />
          </div>
        </div>
      </div>
      <div className="px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        <Skeleton className="h-100 w-full rounded-xl" />
        <Skeleton className="h-100 w-full rounded-xl" />
      </div>
    </div>
  );
};
