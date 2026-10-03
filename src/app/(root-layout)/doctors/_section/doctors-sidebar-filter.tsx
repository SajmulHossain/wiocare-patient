"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { RiFilter3Line, RiArrowDownSLine } from "@remixicon/react";
import { Gender } from "@/types";

const SPECIALTIES = [
  { name: "General Physician", count: 249 },
  { name: "Cardiology", count: 122 },
  { name: "Dermatology", count: 86 },
  { name: "Pediatrics", count: 114 },
  { name: "Neurology", count: 72 },
  { name: "Orthopedics", count: 136 },
];

const AVAILABILITY = [
  "Available Today",
  "Available Tomorrow",
  "Available This Week",
];

const EXPERIENCE = [
  {
    label: "0-5 years",
    value: "0-5",
  },
  {
    label: "5-10 years",
    value: "5-10",
  },
  {
    label: "10+ years",
    value: "10+",
  },
];

export default function DoctorsSidebarFilter() {
  return (
    <div className="flex w-full flex-col gap-6 rounded-2xl bg-background p-6 shadow-sm border border-border/40 lg:w-70">
      {/* Header */}
      <div className="flex items-center gap-2 border-b border-border pb-4">
        <RiFilter3Line className="h-5 w-5 text-[#28b5e8]" />
        <h3 className="text-lg font-bold text-foreground">Filter Doctors</h3>
      </div>

      <div className="flex flex-col gap-6">
        {/* Specialty */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between text-sm font-medium text-foreground">
            <span>Specialty</span>
            <RiArrowDownSLine className="h-4 w-4 text-muted-foreground" />
          </div>
          <div className="flex flex-col gap-2.5">
            {SPECIALTIES.map((spec, i) => (
              <div key={i} className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id={`spec-${i}`}
                    defaultChecked={i === 0}
                    className="border-muted-foreground/30 data-[state=checked]:bg-[#28b5e8] data-[state=checked]:border-[#28b5e8]"
                  />
                  <Label
                    htmlFor={`spec-${i}`}
                    className="text-[13px] font-normal leading-none text-muted-foreground peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {spec.name}
                  </Label>
                </div>
                <span className="text-[10px] text-muted-foreground">
                  {spec.count}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Availability */}
        <div className="flex flex-col gap-3 border-t border-border pt-6">
          <div className="flex items-center justify-between text-sm font-medium text-foreground">
            <span>Availability</span>
            <RiArrowDownSLine className="h-4 w-4 text-muted-foreground" />
          </div>
          <div className="flex flex-col gap-2.5">
            {AVAILABILITY.map((item, i) => (
              <div key={i} className="flex items-center space-x-2">
                <Checkbox
                  id={`avail-${i}`}
                  className="border-muted-foreground/30 data-[state=checked]:bg-[#28b5e8] data-[state=checked]:border-[#28b5e8]"
                />
                <Label
                  htmlFor={`avail-${i}`}
                  className="text-[13px] font-normal text-muted-foreground"
                >
                  {item}
                </Label>
              </div>
            ))}
          </div>
        </div>

        {/* Experience */}
        <div className="flex flex-col gap-3 border-t border-border pt-6">
          <div className="flex items-center justify-between text-sm font-medium text-foreground">
            <span>Experience</span>
            <RiArrowDownSLine className="h-4 w-4 text-muted-foreground" />
          </div>
          <div className="flex flex-col gap-2.5">
            {EXPERIENCE.map((item) => (
              <div key={item.value} className="flex items-center space-x-2">
                <Checkbox
                  id={`exp-${item.value}`}
                  className="border-muted-foreground/30 data-[state=checked]:bg-[#28b5e8] data-[state=checked]:border-[#28b5e8]"
                />
                <Label
                  htmlFor={`exp-${item.value}`}
                  className="text-[13px] font-normal text-muted-foreground"
                >
                  {item.label}
                </Label>
              </div>
            ))}
          </div>
        </div>

        {/* Gender */}
        <div className="flex flex-col gap-3 border-t border-border pt-6">
          <div className="flex items-center justify-between text-sm font-medium text-foreground">
            <span>Gender</span>
            <RiArrowDownSLine className="h-4 w-4 text-muted-foreground" />
          </div>
          <div className="flex flex-col gap-2.5">
            {Object.values(Gender).map((item, i) => (
              <div key={i} className="flex items-center space-x-2">
                <Checkbox
                  id={`gender-${i}`}
                  className="border-muted-foreground/30 data-[state=checked]:bg-[#28b5e8] data-[state=checked]:border-[#28b5e8]"
                />
                <Label
                  htmlFor={`gender-${i}`}
                  className="text-[13px] font-normal text-muted-foreground"
                >
                  {item}
                </Label>
              </div>
            ))}
          </div>
        </div>

        {/* Consultation Fee */}
        <div className="flex flex-col gap-3 border-t border-border pt-6">
          <div className="flex items-center justify-between text-sm font-medium text-foreground">
            <span>Consultation Fee</span>
          </div>
          <Slider defaultValue={[300]} max={2500} step={100} />
          <div className="flex items-center justify-between text-[13px] text-foreground font-medium">
            <span>৳300</span>
            <span>৳2,500+</span>
          </div>
        </div>
      </div>

      {/* Footer Buttons */}
      <div className="mt-4 flex items-center justify-between gap-2 border-t border-border pt-4">
        <Button
          variant="ghost"
          className="flex-1 text-[13px] font-semibold text-muted-foreground hover:text-foreground"
        >
          Clear All
        </Button>
        <Button className="flex-1 bg-[#28b5e8] text-[13px] font-semibold text-white hover:bg-[#28b5e8]/90">
          Apply Filters
        </Button>
      </div>
    </div>
  );
}
