import { Suspense } from "react";
import BookAppointmentSection from "./_section/book-appointment-section";
import BookAppointmentSkeleton from "./_suspense/book-appointment-skeleton";
import type { IPageProps } from "@/types";
import { RiCalendarCheckLine } from "@remixicon/react";
import { Button } from "@/components/ui/button";

export default function BookAppointmentPage({
  params,
  searchParams,
}: IPageProps<{ username: string }>) {
  return (
    <section className="bg-muted/10 min-h-screen">
      <div className="section py-12 md:py-20">
        <div className="bg-card rounded-3xl p-6 md:p-10 border border-border/50 shadow-xl shadow-primary/5">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-foreground flex items-center gap-3">
              <RiCalendarCheckLine className="w-8 h-8 text-primary" />
              Book Appointment
            </h1>

            <Button
              form="doctor-schedule-booking-form"
              type="submit"
              size="lg"
              className="rounded-2xl font-bold px-10 h-14 w-full sm:w-auto"
            >
              Continue Booking
            </Button>
          </div>

          <Suspense fallback={<BookAppointmentSkeleton />}>
            <BookAppointmentSection params={params} searchParams={searchParams} />
          </Suspense>
        </div>
      </div>
    </section>
  );
}
