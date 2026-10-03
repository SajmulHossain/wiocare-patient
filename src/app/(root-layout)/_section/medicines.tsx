import { Suspense } from "react";
import { Button } from "@/components/ui/button";
import {
  RiShieldCheckLine,
  RiArrowRightLine,
  RiSearch2Line,
  RiFileList3Line,
} from "@remixicon/react";
import Link from "next/link";
import FeaturedMedicinesList from "./medicines/featured-medicines-list";
import FeaturedMedicinesSkeleton from "../_suspense/featured-medicines-skeleton";

export default function Medicines() {
  return (
    <section id="medicines" className="bg-background pt-24 pb-16">
      <div className="section">
        {/* Header Section */}
        <div className="mb-10 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-xl">
            <h4 className="mb-4 text-[11px] font-bold uppercase tracking-[0.15em] text-primary">
              Wiocare Pharmacy
            </h4>
            <h2 className="mb-4 text-4xl font-light text-foreground md:text-5xl">
              Your medicines,{" "}
              <span className="font-medium text-primary">
                all in one place.
              </span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Find and order your healthcare essentials with a simple, trusted
              experience.
            </p>
          </div>

          {/* Prescription Upload Card */}
          <div className="flex shrink-0 items-center gap-4 rounded-2xl bg-primary/10 p-4 md:w-auto">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary">
              <RiFileList3Line className="h-6 w-6 text-white" />
            </div>
            <div>
              <h5 className="font-semibold text-foreground">
                Have a prescription?
              </h5>
              <p className="text-xs text-muted-foreground">
                Upload it and we'll help with your order.
              </p>
            </div>
            <Button className="ml-2 rounded-xl bg-primary px-6 shadow-none hover:bg-primary/90">
              Upload
            </Button>
          </div>
        </div>

        {/* Search Bar */}
        <div className="mx-auto mb-12 flex w-full items-center justify-between rounded-[16px] border border-border/40 bg-background p-2 pr-2.5 shadow-[0_4px_20px_rgb(0,0,0,0.04)]">
          <div className="relative flex w-full items-center">
            <RiSearch2Line className="absolute left-4 h-5 w-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search medicines or healthcare products"
              className="h-12 w-full border-transparent bg-transparent pl-12 pr-4 text-[15px] outline-none placeholder:text-muted-foreground focus:ring-0"
            />
          </div>
          <Button className="h-11 rounded-xl bg-primary px-8 text-[15px] font-semibold text-primary-foreground shadow-none hover:bg-primary/90">
            Search
          </Button>
        </div>

        {/* Medicines Grid */}
        <Suspense fallback={<FeaturedMedicinesSkeleton />}>
          <FeaturedMedicinesList />
        </Suspense>

        {/* Footer Section */}
        <div className="mt-10 flex flex-col items-center justify-between gap-6 border-t border-border pt-6 md:flex-row">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <RiShieldCheckLine className="h-5 w-5 text-primary" />
            <span>Prescription medicines require a valid prescription.</span>
          </div>
          <Button
            variant="outline"
            asChild
            className="rounded-lg px-6 font-semibold border-border"
          >
            <Link href="/medicines">
              Browse Medicines <RiArrowRightLine className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
