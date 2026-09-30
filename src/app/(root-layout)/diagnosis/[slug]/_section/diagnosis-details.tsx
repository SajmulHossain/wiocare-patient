import { fetchMedicalTestBySlug } from "@/app/(root-layout)/_action/diagnosis.action";
import ErrorState from "@/components/common/error-state";
import {
  RiTestTubeFill,
  RiArrowLeftLine,
  RiInformationLine,
  RiPulseLine,
} from "@remixicon/react";
import type { IPageProps } from "@/types";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default async function DiagnosisDetails({
  params,
}: IPageProps<{ slug: string }>) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;

  const testData = await fetchMedicalTestBySlug(slug);
  const test = testData?.data;

  if (!testData?.success || !test) {
    return (
      <div className="py-12">
        <ErrorState message={testData?.message || "Test not found"} />
        <div className="flex justify-center mt-6">
          <Link href="/diagnosis">
            <Button variant="outline">
              <RiArrowLeftLine className="mr-2 h-4 w-4" />
              Back to Tests
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-700">
      <Link
        href="/diagnosis"
        className="inline-flex items-center text-muted-foreground hover:text-primary mb-6 transition-colors"
      >
        <RiArrowLeftLine className="mr-2 h-4 w-4" />
        Back to Directory
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-background rounded-3xl p-8 border shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 text-primary/5">
              <RiPulseLine className="w-48 h-48" />
            </div>

            <div className="relative z-10">
              <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center text-primary mb-6">
                <RiTestTubeFill className="h-8 w-8" />
              </div>

              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                {test.name}
              </h1>

              <div className="flex flex-wrap gap-3 mb-6">
                {test.sampleType && (
                  <Badge className="px-3 py-1 bg-primary/10 text-primary hover:bg-primary/20 border-0 text-sm">
                    Sample: {test.sampleType}
                  </Badge>
                )}
                <Badge
                  variant="outline"
                  className="px-3 py-1 text-sm bg-background"
                >
                  Medical Test
                </Badge>
              </div>

              <div className="prose prose-slate dark:prose-invert max-w-none">
                <h3 className="text-xl font-semibold mb-3 flex items-center">
                  <RiInformationLine className="mr-2 text-primary h-5 w-5" />
                  Description
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed whitespace-pre-wrap">
                  {test.description ||
                    "No detailed description is currently available for this medical test."}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <Card className="border-none shadow-md bg-primary/5 overflow-hidden">
            <div className="h-2 w-full bg-primary" />
            <CardContent className="p-6">
              <h3 className="font-semibold text-lg mb-2">Need a test?</h3>
              <p className="text-muted-foreground text-sm mb-6">
                You can book an appointment with our specialists to get tested
                and diagnosed properly.
              </p>
              <Link href="/doctors" className="w-full block">
                <Button className="w-full rounded-xl" size="lg">
                  Find a Doctor
                </Button>
              </Link>
            </CardContent>
          </Card>

          {test.sampleType && (
            <Card className="shadow-sm">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="bg-orange-100 dark:bg-orange-950/50 text-orange-600 dark:text-orange-400 p-3 rounded-xl shrink-0">
                  <RiTestTubeFill className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-medium text-sm text-muted-foreground">
                    Required Sample
                  </h4>
                  <p className="font-semibold text-lg">{test.sampleType}</p>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
