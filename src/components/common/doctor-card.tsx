import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RiStarFill, RiArrowRightLine } from "@remixicon/react";
import Link from "next/link";
import type { IDoctor } from "@/types";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import Logo from "../shared/logo";

export function DoctorCard({ doctor }: { doctor: IDoctor }) {
  const doctorName = doctor.user?.name || "Unknown Doctor";
  const specialty =
    doctor.specialties?.[0]?.specialty?.name ||
    doctor.designation ||
    "Specialist";
  const experience = doctor.totalExperienceYear
    ? `${doctor.totalExperienceYear} years experience`
    : "5 years experience";
  const consultationFee = doctor.consultationFee30min || 1000;
  const rating = doctor.averageRating ? doctor.averageRating.toFixed(1) : "4.9";
  const reviews = doctor.totalRating || 120;

  return (
    <Card className="group relative flex flex-col overflow-hidden rounded-3xl border border-border/60 bg-card transition-all duration-300 hover:border-primary/50 hover:shadow-xl py-0 gap-0">
      {/* Top Image Section */}
      <div className="relative h-56 w-full overflow-hidden bg-muted">
        <Link
          href={`/doctors/${doctor.user?.username}`}
          className="absolute inset-0 z-10"
        >
          <span className="sr-only">View {doctorName}</span>
        </Link>
        <Avatar className="size-full rounded-none after:hidden">
          <AvatarImage src={doctor.user.photo || undefined} />
          <AvatarFallback className="rounded-none border-none bg-muted text-sm">
            <Logo show />
          </AvatarFallback>
        </Avatar>
        <div className="absolute left-4 top-4 z-20 flex items-center gap-1.5 rounded-full border border-border/50 bg-background/95 px-3 py-1.5 shadow-sm backdrop-blur-sm">
          <div className="h-2 w-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
          <span className="text-[10px] font-bold tracking-wide text-foreground uppercase">
            Available
          </span>
        </div>
      </div>

      {/* Content Section */}
      <div className="flex grow flex-col p-5">
        {/* Rating */}
        <div className="mb-3 flex items-center gap-1 text-xs">
          <RiStarFill className="h-4 w-4 text-orange-400" />
          <span className="font-bold text-orange-400">{rating}</span>
          <span className="text-muted-foreground">({reviews}+ reviews)</span>
        </div>

        {/* Doctor Info */}
        <h3 className="mb-1 text-xl font-medium leading-tight text-foreground transition-colors group-hover:text-primary">
          {doctorName}
        </h3>
        <p className="mb-1 text-sm font-medium text-teal-600 dark:text-teal-400">
          {specialty}
        </p>
        <p className="mb-5 text-sm text-muted-foreground">{experience}</p>

        <hr className="mb-5 border-border" />

        {/* Details & Button */}
        <div className="mb-6 flex items-end justify-between gap-2">
          <div>
            <p className="mb-1 text-[10px] tracking-wider text-muted-foreground uppercase">
              Consultation
            </p>
            <p className="font-bold text-foreground">৳{consultationFee}</p>
          </div>
          <div>
            <p className="mb-1 text-[10px] tracking-wider text-muted-foreground uppercase">
              Next available
            </p>
            <p className="text-xs font-bold text-foreground md:text-sm">
              Today - 4:30 PM
            </p>
          </div>
        </div>

        <Button
          asChild
          className="mt-auto w-full rounded-xl font-medium shadow-sm transition-all group-hover:shadow-md"
        >
          <Link href={`/doctors/${doctor.user?.username || doctor.id}`}>
            Book Now <RiArrowRightLine className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </Card>
  );
}
