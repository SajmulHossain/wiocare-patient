import { Suspense } from "react";
import AllDoctors from "./_section/all-doctors";
import DoctorsSkeleton from "./_suspense/doctors-skeleton";
import DoctorsSidebarFilter from "./_section/doctors-sidebar-filter";
import type { IPageProps } from "@/types";

export default function DoctorsPage({
  params,
  searchParams,
}: IPageProps<null>) {
  return (
    <section className="bg-muted/10 min-h-screen pt-10 pb-16">
      <div className="section">
        <div className="flex flex-col gap-8 lg:flex-row">
          {/* Left Sidebar Filter */}
          <div className="w-full shrink-0 lg:w-70 lg:sticky lg:top-24 lg:self-start lg:max-h-[calc(100vh-120px)] lg:overflow-y-auto scrollbar-hide">
            <Suspense
              fallback={
                <div className="h-96 w-full animate-pulse rounded-2xl bg-background border border-border shadow-sm"></div>
              }
            >
              <DoctorsSidebarFilter />
            </Suspense>
          </div>

          {/* Right Main Content */}
          <div className="flex-1">
            <Suspense fallback={<DoctorsSkeleton />}>
              <AllDoctors params={params} searchParams={searchParams} />
            </Suspense>
          </div>
        </div>
      </div>
    </section>
  );
}
