import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  RiStarFill,
  RiMapPinLine,
  RiVerifiedBadgeFill,
  RiUser3Line,
  RiStethoscopeFill,
} from "@remixicon/react";
import Link from "next/link";
import { fetchDoctors } from "../_action/doctor.action";
import ErrorState from "@/components/shared/error-state";
import EmptyState from "@/components/shared/empty-state";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default async function Doctors() {
  const doctorsData = await fetchDoctors(4);

  const doctors = doctorsData.data || [];

  return (
    <section id="doctors" className="bg-muted/30">
      <div className="section">
        <div className="flex justify-between items-end mb-10">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight mb-3">
              Book an Appointment
            </h2>
            <p className="text-muted-foreground text-lg">
              Consult with Bangladesh's top-rated specialists for personalized
              care.
            </p>
          </div>
          <Button
            variant="outline"
            asChild
            className="hidden sm:inline-flex rounded-full px-6"
          >
            <Link href="/doctors">View All Doctors</Link>
          </Button>
        </div>

        {!doctorsData.success ? (
          <ErrorState message={doctorsData.message} />
        ) : doctors.length === 0 ? (
          <EmptyState
            title="No Doctors Found"
            message="We couldn't find any doctors at this time. Please check back later."
            icon={RiStethoscopeFill}
          />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {doctors.map((doctor) => (
              <Card
                key={doctor.id}
                className="relative flex flex-col bg-card hover:shadow-xl transition-all duration-300 border border-border/60 rounded-2xl overflow-hidden group hover:border-primary/50"
              >
                <Link
                  href={`/doctors/${doctor.id}`}
                  className="absolute inset-0 z-10"
                >
                  <span className="sr-only">
                    View {doctor.user?.name || "Doctor"}
                  </span>
                </Link>

                <CardHeader className="p-5 pb-4">
                  <div className="flex gap-4 items-start">
                    <div className="relative w-16 h-16 sm:w-20 sm:h-20 shrink-0 border-2 border-primary/20 p-0.5 rounded-full">
                      <Avatar className="w-full h-full">
                        <AvatarImage
                          src={doctor.user?.photo || ""}
                          alt={doctor.user?.name || "Doctor"}
                          className="object-cover object-top"
                        />
                        <AvatarFallback className="bg-muted">
                          <RiUser3Line className="w-8 h-8 text-muted-foreground/50" />
                        </AvatarFallback>
                      </Avatar>
                      <div className="absolute bottom-1 right-1 w-3.5 h-3.5 bg-green-500 border-2 border-white rounded-full z-20"></div>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg leading-tight flex items-center gap-1 group-hover:text-primary transition-colors">
                        {doctor.user?.name || "Unknown Doctor"}
                        <RiVerifiedBadgeFill className="w-4 h-4 text-blue-500 shrink-0" />
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
                      4.8
                      <span className="font-medium opacity-70 ml-0.5">
                        ({Math.floor(Math.random() * 200) + 50})
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
                  <Button className="w-full rounded-xl font-semibold shadow-sm hover:shadow-md transition-all group-hover:bg-primary group-hover:text-primary-foreground pointer-events-auto">
                    Book Appointment
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        )}

        <div className="mt-8 text-center sm:hidden">
          <Button variant="outline" asChild className="w-full rounded-full">
            <Link href="/doctors">View All Doctors</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
