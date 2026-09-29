import { fetchAvailableSchedules } from "@/app/(root-layout)/_action/schedule.action";
import ErrorState from "@/components/shared/error-state";
import EmptyState from "@/components/shared/empty-state";
import { RiCalendarCheckLine } from "@remixicon/react";
import type { IPageProps } from "@/types";
import { format } from "date-fns";

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
  
  const doctorName = schedules.length > 0 ? schedules[0].doctor?.user?.name : "";

  return (
    <section className="bg-muted/10 min-h-screen">
      <div className="section py-12 md:py-20">
        <div className="bg-card rounded-3xl p-6 md:p-10 border border-border/50 shadow-xl shadow-primary/5">
          <h1 className="text-3xl font-bold mb-6 text-foreground flex items-center gap-3">
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
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {schedules.map((slot) => {
                const startTime = slot.slot?.startTime ? new Date(slot.slot.startTime) : new Date();
                const endTime = slot.slot?.endTime ? new Date(slot.slot.endTime) : new Date();
                
                return (
                  <div
                    key={slot.id}
                    className="bg-muted/30 p-4 rounded-2xl border border-border/40 flex flex-col gap-2 hover:border-primary/50 transition-colors"
                  >
                    <span className="font-semibold text-lg text-foreground">
                      {format(startTime, "hh:mm a")} - {format(endTime, "hh:mm a")}
                    </span>
                    <span className="text-sm text-muted-foreground font-medium">
                      {format(startTime, "MMM dd, yyyy")}
                    </span>
                    <button type="button" className="mt-2 bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground font-bold py-2 rounded-xl transition-colors">
                      Select Slot
                    </button>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
