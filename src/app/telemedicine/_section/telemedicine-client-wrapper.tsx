"use client";

import dynamic from "next/dynamic";
import { Skeleton } from "@/components/ui/skeleton";

const TelemedicineSection = dynamic(
  () => import("./telemedicine-section"),
  { 
    ssr: false,
    loading: () => <Skeleton className="w-full h-full rounded-none" /> 
  }
);

export default function TelemedicineClientWrapper() {
  return <TelemedicineSection />;
}
