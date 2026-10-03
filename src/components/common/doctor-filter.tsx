"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { RiSearch2Line } from "@remixicon/react";
import { Button } from "@/components/ui/button";

const SPECIALTIES = [
  "All",
  "General Physician",
  "Cardiologist",
  "Dermatologist",
  "Pediatrician",
  "Dentist",
];

export default function DoctorFilter() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [searchTerm, setSearchTerm] = useState(
    searchParams.get("search") || "",
  );
  const currentSpecialty = searchParams.get("specialty");

  const handleSearch = (e?: React.SyntheticEvent) => {
    if (e) e.preventDefault();
    const params = new URLSearchParams(searchParams.toString());

    if (searchTerm) params.set("search", searchTerm);
    else params.delete("search");

    router.push(`/doctors?${params.toString()}`);
  };

  const handleSpecialtyClick = (specialty: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (specialty === "All") {
      params.delete("specialty");
    } else {
      params.set("specialty", specialty);
    }
    router.push(`/doctors?${params.toString()}`);
  };

  return (
    <div className="mb-10 w-full max-w-full">
      {/* Search Bar */}
      <form
        onSubmit={handleSearch}
        className="flex w-full items-center justify-between rounded-[16px] bg-background p-2 pr-2.5 shadow-[0_4px_20px_rgb(0,0,0,0.04)] border border-border/40"
      >
        <div className="relative flex w-full items-center">
          <RiSearch2Line className="absolute left-4 h-5 w-5 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search doctor, specialty or symptom"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="h-12 w-full border-transparent bg-transparent pl-12 pr-4 text-[15px] outline-none placeholder:text-muted-foreground focus:ring-0"
          />
        </div>
        <Button
          type="submit"
          className="h-11 rounded-xl bg-primary px-8 text-[15px] font-semibold text-primary-foreground shadow-none hover:bg-primary/90"
        >
          Search
        </Button>
      </form>

      {/* Pill Filters */}
      <div className="mt-6 flex flex-wrap items-center gap-3">
        {SPECIALTIES.map((specialty) => {
          const isActive =
            (specialty === "All" && !currentSpecialty) ||
            currentSpecialty === specialty;

          return (
            <button
              key={specialty}
              type="button"
              onClick={() => handleSpecialtyClick(specialty)}
              className={`rounded-full border px-5 py-2 text-[14px] font-medium transition-colors ${
                isActive
                  ? "border-primary bg-primary/10 text-primary hover:bg-primary/20"
                  : "border-border/80 bg-transparent text-muted-foreground hover:border-foreground/30 hover:text-foreground"
              }`}
            >
              {specialty}
            </button>
          );
        })}
      </div>
    </div>
  );
}
