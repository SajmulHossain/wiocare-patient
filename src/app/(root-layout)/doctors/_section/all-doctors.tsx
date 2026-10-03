import { fetchDoctors } from "@/app/(root-layout)/_action/doctor.action";
import ErrorState from "@/components/common/error-state";
import EmptyState from "@/components/common/empty-state";
import { DoctorCard } from "@/components/common/doctor-card";
import CustomPagination from "@/components/common/custom-pagination";
import {
  RiStethoscopeFill,
  RiArrowDownSLine,
  RiLayoutGridFill,
  RiListUnordered,
} from "@remixicon/react";
import type { IPageProps } from "@/types";

export default async function AllDoctors({
  searchParams,
}: IPageProps<unknown>) {
  const resolvedSearchParams = await searchParams;

  // Fetch 9 doctors for the grid (matches "Showing 1-9")
  const doctorsData = await fetchDoctors({
    ...resolvedSearchParams,
    limit: 9,
  });
  const doctors = doctorsData?.data || [];

  return (
    <div className="flex w-full flex-col">
      {/* Header Section */}
      <div className="mb-6 flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div>
          <h4 className="mb-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[#28b5e8]">
            Doctor Directory
          </h4>
          <h2 className="mb-1 text-2xl font-light text-foreground md:text-3xl">
            <span className="font-medium">1,200+ Doctors</span> Available
          </h2>
          <p className="text-[13px] text-muted-foreground">
            Showing doctors matching your preferences
          </p>
        </div>

        <div className="flex shrink-0 items-center gap-4">
          <div className="flex items-center gap-2 text-[13px]">
            <span className="text-muted-foreground">Sort by:</span>
            <button
              type="button"
              className="flex items-center gap-1 font-medium text-foreground hover:text-[#28b5e8]"
            >
              Recommended <RiArrowDownSLine className="h-4 w-4" />
            </button>
          </div>
          <div className="flex items-center gap-1 rounded-lg border border-border/60 bg-background p-1 shadow-sm">
            <button
              type="button"
              className="rounded-md bg-[#28b5e8]/10 p-1.5 text-[#28b5e8]"
            >
              <RiLayoutGridFill className="h-4 w-4" />
            </button>
            <button
              type="button"
              className="rounded-md p-1.5 text-muted-foreground hover:bg-muted"
            >
              <RiListUnordered className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Grid Content */}
      {!doctorsData?.success ? (
        <ErrorState message={doctorsData?.message} />
      ) : doctors.length === 0 ? (
        <EmptyState
          title="No Doctors Found"
          message="We couldn't find any doctors at this time. Please check back later."
          icon={RiStethoscopeFill}
        />
      ) : (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {doctors.map((doctor) => (
            <DoctorCard key={doctor.id} doctor={doctor} />
          ))}
        </div>
      )}

      {/* Pagination Footer */}
      {doctors.length > 0 && doctorsData?.meta && (
        <CustomPagination
          meta={doctorsData.meta}
          showText
          textLabel="doctors"
        />
      )}
    </div>
  );
}
