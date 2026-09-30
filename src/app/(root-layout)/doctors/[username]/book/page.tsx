import { Suspense } from "react";
import BookAppointmentSection from "./_section/book-appointment-section";
import BookAppointmentSkeleton from "./_suspense/book-appointment-skeleton";
import type { IPageProps } from "@/types";

export default function BookAppointmentPage({
  params,
  searchParams,
}: IPageProps<{ username: string }>) {
  return (
    <Suspense fallback={<BookAppointmentSkeleton />}>
      <BookAppointmentSection params={params} searchParams={searchParams} />
    </Suspense>
  );
}
