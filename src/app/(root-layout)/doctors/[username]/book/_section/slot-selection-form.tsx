"use client";

import { useState } from "react";
import { format } from "date-fns";
import type { IDoctorDailyRoster } from "@/types";
import { Button } from "@/components/ui/button";

const formatTime = (timeString: string) => {
  if (!timeString) return "";
  const [hours, minutes] = timeString.split(":");
  const date = new Date();
  date.setHours(parseInt(hours, 10));
  date.setMinutes(parseInt(minutes, 10));
  return format(date, "h:mm a");
};

interface SlotSelectionFormProps {
  schedules: IDoctorDailyRoster[];
}

export default function SlotSelectionForm({
  schedules,
}: SlotSelectionFormProps) {
  const [selectedSlotId, setSelectedSlotId] = useState<string | null>(null);

  const handleSubmit = (e: React.SubmitEvent) => {
    e.preventDefault();
    if (!selectedSlotId) return;
    console.log("Selected Slot ID:", selectedSlotId);
    // TODO: Proceed to next step
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-10">
      {schedules.map((roster) => {
        if (!roster.doctorSlots || roster.doctorSlots.length === 0) {
          return null;
        }

        const dateStr = format(new Date(roster.date), "EEEE, MMMM do, yyyy");

        return (
          <div key={roster.id} className="flex flex-col gap-5">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 border-b border-border/50 pb-3">
              <div className="flex items-center gap-2">
                <div className="w-2 h-6 bg-primary rounded-full hidden sm:block"></div>
                <h2 className="text-xl font-bold text-foreground">{dateStr}</h2>
              </div>
              <span className="px-3 py-1 w-max bg-primary/10 text-primary rounded-full text-xs font-semibold">
                {roster.doctorSlots.length} Slots Available
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
              {roster.doctorSlots.map((slot) => {
                const isSelected = selectedSlotId === slot.id;

                return (
                  <label
                    key={slot.id}
                    className={`group relative flex flex-col items-center justify-center p-3 rounded-2xl border cursor-pointer transition-all duration-300 ${
                      isSelected
                        ? "border-primary bg-primary/10 shadow-md ring-2 ring-primary/20"
                        : "border-border/60 bg-card hover:border-primary hover:bg-primary/5 hover:shadow-md"
                    }`}
                  >
                    <input
                      type="radio"
                      name="slot"
                      value={slot.id}
                      className="sr-only"
                      checked={isSelected}
                      onChange={() => setSelectedSlotId(slot.id)}
                    />
                    <span
                      className={`font-bold text-base transition-colors ${
                        isSelected
                          ? "text-primary"
                          : "text-foreground group-hover:text-primary"
                      }`}
                    >
                      {formatTime(slot.slot.startTime)}
                    </span>
                    <span
                      className={`text-[11px] uppercase tracking-wider font-semibold mt-1 transition-colors ${
                        isSelected
                          ? "text-primary/80"
                          : "text-muted-foreground group-hover:text-primary/70"
                      }`}
                    >
                      To {formatTime(slot.slot.endTime)}
                    </span>
                  </label>
                );
              })}
            </div>
          </div>
        );
      })}

      <div className="pt-6 border-t border-border/50 flex flex-col sm:flex-row justify-between items-center gap-4 mt-4">
        <p className="text-sm text-muted-foreground">
          {selectedSlotId
            ? "You have selected a time slot. Click continue to proceed."
            : "Please select a time slot to continue."}
        </p>
        <Button
          type="submit"
          size="lg"
          disabled={!selectedSlotId}
          className="rounded-2xl font-bold px-10 h-14 w-full sm:w-auto"
        >
          Continue Booking
        </Button>
      </div>
    </form>
  );
}
