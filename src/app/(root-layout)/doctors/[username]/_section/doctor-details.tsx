import { fetchDoctorByUsername } from "@/app/(root-layout)/_action/doctor.action";
import Link from "next/link";
import ErrorState from "@/components/shared/error-state";
import EmptyState from "@/components/shared/empty-state";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  RiUser3Line,
  RiVerifiedBadgeFill,
  RiMapPinLine,
  RiBriefcase4Line,
  RiGraduationCapLine,
  RiHospitalLine,
  RiMoneyDollarCircleLine,
  RiErrorWarningLine,
  RiFileList3Line,
  RiGlobalLine,
  RiIdCardLine,
  RiCalendarCheckLine,
  RiStarFill,
} from "@remixicon/react";
import type { IPageProps } from "@/types";

export default async function DoctorDetails({
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

  const doctorData = await fetchDoctorByUsername(resolvedParams.username);
  const doctor = doctorData?.data;

  if (!doctorData?.success) {
    return (
      <div className="section py-16">
        <ErrorState
          message={doctorData?.message || "Failed to fetch doctor details"}
        />
      </div>
    );
  }

  if (!doctor) {
    return (
      <div className="section py-16">
        <EmptyState
          title="Doctor Not Found"
          message="We couldn't find the doctor you are looking for."
          icon={RiErrorWarningLine}
        />
      </div>
    );
  }

  return (
    <section className="bg-muted/10 min-h-screen">
      <div className="section py-12 md:py-20">
        <div className="bg-card rounded-3xl p-6 md:p-10 border border-border/50 shadow-xl shadow-primary/5 flex flex-col md:flex-row gap-10">
          {/* Left Column: Image & Quick Info */}
          <div className="w-full md:w-1/3 flex flex-col items-center text-center">
            <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full p-2 border-4 border-primary/20 bg-card mb-6">
              <Avatar className="w-full h-full">
                <AvatarImage
                  src={doctor.user?.photo || ""}
                  alt={doctor.user?.name || "Doctor"}
                  className="object-cover object-top"
                />
                <AvatarFallback className="bg-muted">
                  <RiUser3Line className="w-24 h-24 text-muted-foreground/50" />
                </AvatarFallback>
              </Avatar>
              <div className="absolute bottom-4 right-4 w-6 h-6 bg-green-500 border-4 border-white rounded-full z-20"></div>
            </div>

            <h1 className="text-3xl font-extrabold flex items-center justify-center gap-2 text-foreground">
              {doctor.user?.name}
              <RiVerifiedBadgeFill className="w-6 h-6 text-blue-500" />
            </h1>
            <p className="text-primary font-semibold text-lg mt-2">
              {doctor.designation || "Specialist"}
            </p>

            <div className="flex items-center justify-center gap-1.5 mt-3 bg-yellow-400/10 text-yellow-700 dark:text-yellow-500 px-4 py-1.5 rounded-full text-sm font-bold w-max mx-auto">
              <RiStarFill className="w-4 h-4 text-yellow-500" />
              {doctor.averageRating ? doctor.averageRating.toFixed(1) : "0.0"}
              <span className="font-medium opacity-70">
                ({doctor.totalRating || 0} Reviews)
              </span>
            </div>

            <div className="mt-8 w-full flex flex-col gap-3">
              <Button
                size="lg"
                className="w-full rounded-2xl font-bold text-base h-14 text-black"
                asChild
              >
                <Link href={`/doctors/${doctor.user?.username}/book`}>
                  Book Appointment
                </Link>
              </Button>
            </div>
          </div>

          {/* Right Column: Detailed Info */}
          <div className="w-full md:w-2/3 flex flex-col gap-8">
            <div>
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2 border-b pb-2">
                <RiBriefcase4Line className="w-5 h-5 text-primary" />
                Professional Summary
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-muted/30 p-4 rounded-2xl border border-border/40">
                  <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1 block">
                    Experience
                  </span>
                  <span className="font-semibold text-lg">
                    {doctor.totalExperienceYear
                      ? `${doctor.totalExperienceYear}+ Years`
                      : "N/A"}
                  </span>
                </div>
                <div className="bg-muted/30 p-4 rounded-2xl border border-border/40">
                  <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1 block">
                    Current Workplace
                  </span>
                  <span className="font-semibold text-lg">
                    {doctor.currentWorkingPlace || "N/A"}
                  </span>
                </div>
                <div className="bg-muted/30 p-4 rounded-2xl border border-border/40">
                  <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1 block">
                    Registration
                  </span>
                  <span className="font-semibold text-lg">
                    {doctor.registrationNumber || "N/A"}
                  </span>
                </div>
                <div className="bg-muted/30 p-4 rounded-2xl border border-border/40">
                  <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1 block">
                    Languages
                  </span>
                  <span className="font-semibold text-lg">
                    {doctor.languages?.length > 0
                      ? doctor.languages.join(", ")
                      : "English, Bangla"}
                  </span>
                </div>
                {doctor.countries && doctor.countries.length > 0 && (
                  <div className="bg-muted/30 p-4 rounded-2xl border border-border/40">
                    <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1 flex items-center gap-1">
                      <RiGlobalLine className="w-3.5 h-3.5" /> Countries
                    </span>
                    <span className="font-semibold text-lg">
                      {doctor.countries.join(", ")}
                    </span>
                  </div>
                )}
                <div className="bg-muted/30 p-4 rounded-2xl border border-border/40">
                  <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1 flex items-center gap-1">
                    <RiIdCardLine className="w-3.5 h-3.5" /> NID Number
                  </span>
                  <span className="font-semibold text-lg">
                    {doctor.nidNumber || "N/A"}
                  </span>
                </div>
              </div>
            </div>

            {doctor.bio && (
              <div>
                <h2 className="text-xl font-bold mb-4 flex items-center gap-2 border-b pb-2">
                  <RiFileList3Line className="w-5 h-5 text-primary" />
                  About Me
                </h2>
                <div className="bg-muted/20 p-5 rounded-2xl border border-border/40 text-muted-foreground leading-relaxed">
                  {doctor.bio}
                </div>
              </div>
            )}

            <div>
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2 border-b pb-2">
                <RiGraduationCapLine className="w-5 h-5 text-primary" />
                Qualifications & Specialties
              </h2>
              <div className="bg-muted/20 p-5 rounded-2xl border border-border/40 space-y-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1 block">
                    Qualifications
                  </span>
                  <p className="font-medium text-foreground">
                    {doctor.qualifications || "Not specified"}
                  </p>
                </div>
                {doctor.educations && doctor.educations.length > 0 && (
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1 block">
                      Education
                    </span>
                    <p className="font-medium text-foreground">
                      {doctor.educations.join(", ")}
                    </p>
                  </div>
                )}
                {doctor.specialties && doctor.specialties.length > 0 && (
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2 block">
                      Specialties
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {doctor.specialties.map((spec) => (
                        <span
                          key={spec.id}
                          className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold"
                        >
                          {spec.specialty?.name}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <h2 className="text-xl font-bold mb-4 flex items-center gap-2 border-b pb-2">
                  <RiMoneyDollarCircleLine className="w-5 h-5 text-primary" />
                  Fees
                </h2>
                <div className="bg-muted/20 p-5 rounded-2xl border border-border/40 space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-muted-foreground">
                      30 Min Consultation
                    </span>
                    <span className="font-bold text-foreground">
                      ৳ {doctor.consultationFee30min || "N/A"}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-muted-foreground">
                      60 Min Consultation
                    </span>
                    <span className="font-bold text-foreground">
                      ৳ {doctor.consultationFee60min || "N/A"}
                    </span>
                  </div>
                  <div className="flex justify-between items-center pt-2 border-t border-border/40">
                    <span className="font-medium text-muted-foreground">
                      Follow Up (7 Days)
                    </span>
                    <span className="font-bold text-foreground">
                      {doctor.sevenDaysFollowUpFee
                        ? `৳ ${doctor.sevenDaysFollowUpFee}`
                        : "Free"}
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-xl font-bold mb-4 flex items-center gap-2 border-b pb-2">
                  <RiHospitalLine className="w-5 h-5 text-primary" />
                  Clinic Details
                </h2>
                <div className="bg-muted/20 p-5 rounded-2xl border border-border/40">
                  <div className="flex items-start gap-3">
                    <RiMapPinLine className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <p className="font-medium text-foreground leading-relaxed">
                      {doctor.clinicAddress || "Location not provided"}
                    </p>
                  </div>
                </div>
              </div>

              {doctor.availability && (
                <div>
                  <h2 className="text-xl font-bold mb-4 flex items-center gap-2 border-b pb-2">
                    <RiCalendarCheckLine className="w-5 h-5 text-primary" />
                    Availability
                  </h2>
                  <div className="bg-muted/20 p-5 rounded-2xl border border-border/40 space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-muted-foreground">
                        Status
                      </span>
                      <span
                        className={`font-bold px-3 py-1 rounded-full text-xs ${doctor.availability.availabilityStatus === "ONLINE" ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400" : "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"}`}
                      >
                        {doctor.availability.availabilityStatus}
                      </span>
                    </div>
                    {doctor.availability.nextAvailableDate && (
                      <div className="flex justify-between items-center pt-2 border-t border-border/40">
                        <span className="font-medium text-muted-foreground">
                          Next Available
                        </span>
                        <span className="font-bold text-foreground">
                          {new Date(
                            doctor.availability.nextAvailableDate,
                          ).toLocaleDateString()}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
