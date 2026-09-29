import { fetchDoctors } from "@/app/(root-layout)/_action/doctor.action";
import ErrorState from "@/components/shared/error-state";
import EmptyState from "@/components/shared/empty-state";
import { DoctorCard } from "@/components/shared/doctor-card";
import { RiStethoscopeFill } from "@remixicon/react";
import type { IPageProps } from "@/types";

export default async function AllDoctors({
  searchParams,
}: IPageProps<unknown>) {
  const resolvedSearchParams = await searchParams;

  // Fetch 100 doctors for the main doctors list
  const doctorsData = await fetchDoctors({
    searchParams: resolvedSearchParams,
    limit: 100,
  });
  const doctors = doctorsData?.data || [];

  return (
    <section className="bg-muted/30 min-h-screen">
      <div className="section pt-10 pb-16">
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight mb-3">
            Our Doctors
          </h1>
          <p className="text-muted-foreground text-lg">
            Browse our comprehensive list of top-rated specialists for
            personalized care.
          </p>
        </div>

        {!doctorsData?.success ? (
          <ErrorState message={doctorsData?.message} />
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
      </div>
    </section>
  );
}
