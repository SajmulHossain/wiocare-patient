import { Button } from "@/components/ui/button";
import { RiStethoscopeFill, RiArrowRightLine } from "@remixicon/react";
import Link from "next/link";
import { fetchDoctors } from "../_action/doctor.action";
import ErrorState from "@/components/common/error-state";
import EmptyState from "@/components/common/empty-state";
import { DoctorCard } from "@/components/common/doctor-card";

export default async function Doctors() {
  const doctorsData = await fetchDoctors({ limit: 4 });

  const doctors = doctorsData.data || [];

  return (
    <section id="doctors">
      <div className="section">
        <div className="mb-12 flex items-end justify-between">
          <div className="max-w-3xl">
            <h4 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-primary">
              Trusted Professionals
            </h4>
            <h2 className="mb-4 text-4xl font-light text-foreground md:text-5xl">
              Find the right{" "}
              <span className="font-medium text-primary">doctor for you.</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Search trusted doctors by specialty, experience or healthcare
              need.
            </p>
          </div>
          <Button
            variant="outline"
            asChild
            className="hidden rounded-full border-border px-6 sm:inline-flex"
          >
            <Link href="/doctors">
              View All Doctors <RiArrowRightLine className="ml-2 h-4 w-4" />
            </Link>
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
              <DoctorCard key={doctor.id} doctor={doctor} />
            ))}
          </div>
        )}

        <div className="mt-8 text-center sm:hidden">
          <Button
            variant="outline"
            asChild
            className="w-full rounded-full border-border"
          >
            <Link href="/doctors">
              View All Doctors <RiArrowRightLine className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
