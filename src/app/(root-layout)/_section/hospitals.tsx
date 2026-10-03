import { Button } from "@/components/ui/button";
import {
  RiSearch2Line,
  RiArrowRightLine,
  RiArrowDownSLine,
} from "@remixicon/react";
import Link from "next/link";
import { HospitalCard } from "@/components/common/hospital-card";
import { HOSPITALS_DATA } from "../_constant/hospitals";

export default function Hospitals() {
  return (
    <section id="hospitals" className="bg-[#f6f9f8] dark:bg-muted/10">
      <div className="section">
        {/* Header Section */}
        <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <h4 className="mb-4 text-[11px] font-bold uppercase tracking-[0.2em] text-emerald-700 dark:text-emerald-500">
              Care, Nearby
            </h4>
            <h2 className="mb-3 text-4xl font-light text-foreground md:text-5xl">
              Find trusted hospitals near you.
            </h2>
            <p className="text-lg text-muted-foreground">
              Discover facilities, departments and services before you visit.
            </p>
          </div>
          <Button
            variant="outline"
            asChild
            className="rounded-xl border-border bg-background px-6 font-semibold"
          >
            <Link href="/hospitals">
              Explore Hospitals <RiArrowRightLine className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        {/* Filter / Search Row */}
        <div className="mb-12 flex flex-col items-center gap-4 lg:flex-row">
          {/* Main Search Bar */}
          <div className="flex h-14 w-full items-center justify-between rounded-[16px] bg-background p-1.5 pl-4 shadow-sm border border-border/40 lg:flex-1">
            <div className="flex w-full items-center">
              <RiSearch2Line className="h-5 w-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search hospitals or specialties"
                className="h-full w-full bg-transparent px-4 text-[15px] outline-none placeholder:text-muted-foreground"
              />
            </div>
            <Button className="h-full rounded-xl bg-[#112d28] px-8 font-semibold text-white hover:bg-[#112d28]/90 dark:bg-emerald-600 dark:hover:bg-emerald-600/90">
              Search
            </Button>
          </div>

          {/* Dropdowns */}
          <div className="grid w-full grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4 lg:w-auto">
            {["Location", "Specialty", "Emergency", "Facilities"].map(
              (filter) => (
                <button
                  key={filter}
                  type="button"
                  className="flex h-14 items-center justify-center gap-2 rounded-[16px] border border-border/40 bg-background px-4 text-[13px] text-muted-foreground shadow-sm transition-colors hover:bg-muted/50"
                >
                  {filter}
                  <RiArrowDownSLine className="h-4 w-4 opacity-50" />
                </button>
              ),
            )}
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
          {HOSPITALS_DATA.map((hospital, idx) => (
            <HospitalCard
              key={idx}
              title={hospital.title}
              location={hospital.location}
              image={hospital.image}
              emergency={hospital.emergency}
              specialties={hospital.specialties}
              href={hospital.href}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
