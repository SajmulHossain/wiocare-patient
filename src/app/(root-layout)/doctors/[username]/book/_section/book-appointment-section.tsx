import { fetchAvailableSchedules } from "@/app/(root-layout)/_action/schedule.action";
import ErrorState from "@/components/shared/error-state";
import EmptyState from "@/components/shared/empty-state";
import { RiCalendarCheckLine } from "@remixicon/react";
import type { IPageProps } from "@/types";
import SlotSelectionForm from "./slot-selection-form";
import { Button } from "@/components/ui/button";

export default async function BookAppointmentSection({
  params,
}: IPageProps<{ username: string }>) {
  const resolvedParams = await params;

  if (!resolvedParams?.username) {
    return (
      <div className="section py-16">
        <ErrorState message="Invalid doctor username provided" />
      </div>
    );
  }

  const schedulesData = await fetchAvailableSchedules(resolvedParams.username);
  const schedules = schedulesData?.data || [];

  return (
    <section className="bg-muted/10 min-h-screen">
      <div className="section py-12 md:py-20">
        <div className="bg-card rounded-3xl p-6 md:p-10 border border-border/50 shadow-xl shadow-primary/5">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold mb-8 text-foreground flex items-center gap-3">
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

          {schedules.length === 0 ? (
            <EmptyState
              title="No Slots Available"
              message="There are currently no available slots for this doctor."
              icon={RiCalendarCheckLine}
            />
          ) : (
            <SlotSelectionForm schedules={schedules} />
          )}
        </div>
      </div>
    </section>
  );
}
