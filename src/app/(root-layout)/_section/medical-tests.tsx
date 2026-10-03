import { Button } from "@/components/ui/button";
import { RiArrowRightLine } from "@remixicon/react";
import Link from "next/link";
import DiagnosisCard from "@/components/common/diagnosis-card";
import { MEDICAL_TESTS_DATA } from "../_constant/medical-tests";

export default function MedicalTests() {
  return (
    <section id="medical-tests" className="bg-background">
      <div className="section">
        <div className="mb-12 flex items-end justify-between">
          <div className="max-w-3xl">
            <h4 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-primary">
              Diagnostics
            </h4>
            <h2 className="mb-4 text-4xl font-light text-foreground md:text-5xl">
              Diagnostics without{" "}
              <span className="font-medium text-primary">the hassle.</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Book trusted tests and get convenient sample collection from home.
            </p>
          </div>
          <Button
            variant="outline"
            asChild
            className="hidden rounded-full border-border px-6 sm:inline-flex"
          >
            <Link href="/diagnosis">
              Explore All Tests <RiArrowRightLine className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {MEDICAL_TESTS_DATA.map((test, idx) => (
            <DiagnosisCard
              key={idx}
              title={test.title}
              category={test.category}
              image={test.image}
              homeCollection={test.homeCollection}
              time={test.time}
              price={test.price}
              href={`/tests/${idx}`}
            />
          ))}
        </div>

        <div className="mt-8 text-center sm:hidden">
          <Button
            variant="outline"
            asChild
            className="w-full rounded-full border-border"
          >
            <Link href="/diagnosis">
              Explore All Tests <RiArrowRightLine className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
