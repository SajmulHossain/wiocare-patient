import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import BookAppointmentSection from "./_section/book-appointment-section";
import type { IPageProps } from "@/types";

export default function BookAppointmentPage({
  params,
  searchParams,
}: IPageProps<{ username: string }>) {
  return (
    <Suspense fallback={<Skeleton className="w-full h-screen" />}>
      <BookAppointmentSection params={params} searchParams={searchParams} />
    </Suspense>
  );
}
