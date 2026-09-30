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

  return (
    <>
      {schedules.length === 0 ? (
        <EmptyState
          title="No Slots Available"
          message="There are currently no available slots for this doctor."
          icon={RiCalendarCheckLine}
        />
      ) : (
        <SlotSelectionForm schedules={schedules} />
      )}
    </>
  );
}
