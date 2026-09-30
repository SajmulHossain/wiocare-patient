import { Suspense } from "react";
import AllDiagnosis from "./_section/all-diagnosis";
import DiagnosisSkeleton from "./_suspense/diagnosis-skeleton";
import DiagnosisFilter from "./_components/diagnosis-filter";
import type { IPageProps } from "@/types";

export default function DiagnosisPage({
  params,
  searchParams,
}: IPageProps<null>) {
  return (
    <section className="bg-muted/20 min-h-screen">
      <div className="section pt-10 pb-16">
        <div className="mb-10 text-center max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold tracking-tight mb-4 text-foreground">
            Medical Tests & Diagnosis
          </h1>
          <p className="text-muted-foreground text-lg">
            Explore our comprehensive directory of medical tests. Filter and search 
            to find detailed information about various diagnostic procedures.
          </p>
        </div>

        <DiagnosisFilter />

        <Suspense fallback={<DiagnosisSkeleton />}>
          <AllDiagnosis params={params} searchParams={searchParams} />
        </Suspense>
      </div>
    </section>
  );
}
