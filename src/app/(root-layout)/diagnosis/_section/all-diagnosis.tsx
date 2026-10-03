import { fetchMedicalTests } from "@/app/(root-layout)/_action/diagnosis.action";
import ErrorState from "@/components/common/error-state";
import EmptyState from "@/components/common/empty-state";
import DiagnosisCard from "@/components/common/diagnosis-card";
import { RiTestTubeFill } from "@remixicon/react";
import type { IPageProps } from "@/types";

export default async function AllDiagnosis({
  searchParams,
}: IPageProps<unknown>) {
  const resolvedSearchParams = await searchParams;
  const testsData = await fetchMedicalTests({
    ...resolvedSearchParams,
    limit: 100,
  });
  const tests = testsData?.data || [];

  return (
    <>
      {!testsData?.success ? (
        <ErrorState message={testsData?.message} />
      ) : tests.length === 0 ? (
        <EmptyState
          title="No Medical Tests Found"
          message="We couldn't find any medical tests matching your criteria."
          icon={RiTestTubeFill}
        />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 animate-in fade-in slide-in-from-bottom-8 duration-700">
          {tests.map((test) => (
            <DiagnosisCard 
              key={test.id} 
              title={test.name}
              category={test.sampleType || "General Test"}
              href={`/diagnosis/${test.slug}`}
              time="12-24 hours"
              homeCollection={true}
              price={650}
              buttonText="View Details"
            />
          ))}
        </div>
      )}
    </>
  );
}
