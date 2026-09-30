import { fetchAvailableSchedules } from "@/app/(root-layout)/_action/schedule.action";
import ErrorState from "@/components/shared/error-state";
import EmptyState from "@/components/shared/empty-state";
import { RiCalendarCheckLine } from "@remixicon/react";
import type { IPageProps } from "@/types";
import SlotSelectionForm from "./slot-selection-form";

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

  const doctorName =
    schedules.length > 0 ? schedules[0].doctor?.user?.name : "";

  return (
    <section className="bg-muted/10 min-h-screen">
      <div className="section py-12 md:py-20">
        <div className="bg-card rounded-3xl p-6 md:p-10 border border-border/50 shadow-xl shadow-primary/5">
          <h1 className="text-3xl font-bold mb-8 text-foreground flex items-center gap-3">
            <RiCalendarCheckLine className="w-8 h-8 text-primary" />
            Book Appointment {doctorName ? `with Dr. ${doctorName}` : ""}
          </h1>

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
