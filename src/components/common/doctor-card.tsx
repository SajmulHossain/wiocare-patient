import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RiStarFill, RiMapPinLine, RiUser3Line } from "@remixicon/react";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import type { IDoctor } from "@/types";

export function DoctorCard({ doctor }: { doctor: IDoctor }) {
  return (
    <Card className="relative flex flex-col bg-card hover:shadow-xl transition-all duration-300 border border-border/60 rounded-2xl overflow-hidden group hover:border-primary/50">
      <Link
        href={`/doctors/${doctor.user?.username || doctor.id}`}
        className="absolute inset-0 z-10"
      >
        <span className="sr-only">View {doctor.user?.name || "Doctor"}</span>
      </Link>

      <CardHeader className="p-5 pb-4">
        <div className="flex gap-4 items-start">
          <div className="relative w-16 h-16 sm:w-20 sm:h-20 shrink-0 border-2 border-primary/20 p-0.5 rounded-full">
            <Avatar className="w-full h-full">
              <AvatarImage
                src={doctor.user?.photo || ""}
                alt={doctor.user?.name || "Doctor"}
                className="object-cover object-tops"
              />
              <AvatarFallback className="bg-muted">
                <RiUser3Line className="w-8 h-8 text-muted-foreground/50" />
              </AvatarFallback>
            </Avatar>
            <div className="absolute bottom-1 right-1 w-3.5 h-3.5 bg-green-500 border-2 border-white rounded-full z-20"></div>
          </div>
          <div>
            <h3 className="font-bold text-lg leading-tight group-hover:text-primary transition-colors">
              {doctor.user?.name || "Unknown Doctor"}
            </h3>
            <p className="text-primary font-medium text-sm mt-1">
              {doctor.specialties?.[0]?.specialty?.name ||
                doctor.designation ||
                "Specialist"}
            </p>
            <p className="text-muted-foreground text-xs mt-1 line-clamp-2 leading-relaxed">
              {doctor.qualifications || "MBBS"}
            </p>
          </div>
        </div>
      </CardHeader>

      <CardContent className="p-5 pt-0 text-sm text-muted-foreground grid grid-cols-2 gap-y-4 gap-x-2">
        <div className="flex flex-col">
          <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground/70 mb-1">
            Experience
          </span>
          <span className="font-semibold text-foreground">
            {doctor.totalExperienceYear
              ? `${doctor.totalExperienceYear}+ Years`
              : "5+ Years"}
          </span>
        </div>
        <div className="flex flex-col">
          <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground/70 mb-1">
            Patients
          </span>
          <span className="font-semibold text-foreground flex items-center gap-1">
            1000+
          </span>
        </div>

        <div className="col-span-2 bg-muted/40 rounded-xl p-3 mt-1 flex items-start gap-2.5">
          <RiMapPinLine className="w-4 h-4 text-primary shrink-0 mt-0.5" />
          <span className="font-medium text-foreground text-xs leading-snug">
            Working in <br />
            <span className="font-bold">
              {doctor.currentWorkingPlace || "Medical Centre"}
            </span>
          </span>
        </div>
      </CardContent>

      <CardFooter className="p-5 pt-0 flex-col gap-4 mt-auto relative z-20 pointer-events-none">
        <div className="flex justify-between items-center w-full">
          <div className="flex items-center gap-1 bg-yellow-400/20 text-yellow-700 px-2.5 py-1 rounded-md text-xs font-bold">
            <RiStarFill className="w-3.5 h-3.5 text-yellow-600" />
            {doctor.averageRating ? doctor.averageRating.toFixed(1) : "0.0"}
            <span className="font-medium opacity-70 ml-0.5">
              ({doctor.totalRating || 0})
            </span>
          </div>
          <div className="text-right">
            <div className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground mb-0.5">
              Consultation Fee
            </div>
            <div className="font-extrabold text-lg text-primary leading-none">
              ৳ {doctor.consultationFee30min || 1000}
            </div>
          </div>
        </div>
        <Button
          asChild
          className="w-full rounded-xl font-semibold shadow-sm hover:shadow-md transition-all group-hover:bg-primary group-hover:text-primary-foreground pointer-events-auto"
        >
          <Link href={`/doctors/${doctor.user?.username}`}>
            Book Appointment
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
