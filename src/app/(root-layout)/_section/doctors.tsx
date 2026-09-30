import { Button } from "@/components/ui/button";
import { RiStethoscopeFill } from "@remixicon/react";
import Link from "next/link";
import { fetchDoctors } from "../_action/doctor.action";
import ErrorState from "@/components/common/error-state";
import EmptyState from "@/components/common/empty-state";
import { DoctorCard } from "@/components/common/doctor-card";

export default async function Doctors() {
  const doctorsData = await fetchDoctors({ limit: 4 });

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
              <DoctorCard key={doctor.id} doctor={doctor} />
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
