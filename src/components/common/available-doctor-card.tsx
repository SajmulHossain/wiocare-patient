import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { RiStarFill, RiTimeLine } from "@remixicon/react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import type { IDoctor } from "@/types";

export function AvailableDoctorCard({ doctor }: { doctor: IDoctor }) {
  const specialty =
    doctor.specialties?.[0]?.specialty?.name ||
    doctor.designation ||
    "Specialist";
  return (
    <Card className="flex flex-col gap-3 rounded-2xl p-3 transition-shadow hover:shadow-md">
      <div className="flex items-center gap-3">
        <Avatar className="h-16 w-16 rounded-xl">
          <AvatarImage
            src={doctor.user?.photo || undefined}
            className="object-cover"
          />
          <AvatarFallback className="rounded-xl bg-muted text-xs">
            Dr.
          </AvatarFallback>
        </Avatar>
        <div className="flex flex-col justify-center overflow-hidden">
          <h4 className="truncate text-[13px] font-bold leading-tight text-foreground">
            {doctor.user.name}
          </h4>
          <p className="mt-0.5 truncate text-[10px] text-muted-foreground">
            {specialty}
          </p>
          <div className="mt-1.5 flex items-center gap-2 text-[10px]">
            <div className="flex items-center gap-1 font-medium text-orange-400">
              <RiStarFill className="h-3 w-3" />
              <span>{doctor?.averageRating}</span>
            </div>
            <span className="text-muted-foreground/40">•</span>
            <div className="flex items-center gap-1 font-medium text-orange-400">
              <RiTimeLine className="h-3 w-3" />
              <span>7:30 PM</span>
            </div>
          </div>
        </div>
      </div>
      <Button
        asChild
        className="h-8 w-full rounded-lg bg-[#28b5e8] text-xs font-medium text-white shadow-none hover:bg-[#28b5e8]/90"
      >
        <Link href={`/doctors/${doctor.user?.username}`}>Book Now</Link>
      </Button>
    </Card>
  );
}
