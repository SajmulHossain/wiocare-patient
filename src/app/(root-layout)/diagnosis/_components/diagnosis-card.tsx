import Link from "next/link";
import { RiArrowRightLine, RiTestTubeFill } from "@remixicon/react";
import type { IGlobalMedicalTest } from "@/types";
import { Badge } from "@/components/ui/badge";

interface DiagnosisCardProps {
  test: IGlobalMedicalTest;
}

export default function DiagnosisCard({ test }: DiagnosisCardProps) {
  return (
    <Link href={`/diagnosis/${test.slug}`} className="block group h-full">
      <div className="bg-background rounded-2xl p-6 h-full border border-border shadow-sm transition-all duration-300 hover:shadow-md hover:border-primary/30 hover:-translate-y-1 relative overflow-hidden flex flex-col">
        <div className="absolute top-0 left-0 w-1 h-full bg-primary/20 group-hover:bg-primary transition-colors duration-300" />

        <div className="flex justify-between items-start mb-4">
          <div className="bg-primary/90 p-3 rounded-xl">
            <RiTestTubeFill className="text-white" />
          </div>
          {test.sampleType && (
            <Badge variant="outline" className="bg-background">
              {test.sampleType}
            </Badge>
          )}
        </div>

        <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
          {test.name}
        </h3>

        <p className="text-muted-foreground text-sm line-clamp-3 mb-6 grow">
          {test.description ||
            "No description available for this medical test."}
        </p>

        <div className="flex items-center text-primary text-sm font-medium mt-auto group/btn">
          View Details
          <RiArrowRightLine className="ml-1 h-4 w-4 transform transition-transform group-hover/btn:translate-x-1" />
        </div>
      </div>
    </Link>
  );
}
