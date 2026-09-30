import { Suspense } from "react";
import { Button } from "@/components/ui/button";
import { RiShieldCheckLine, RiTruckLine } from "@remixicon/react";
import Link from "next/link";
import FeaturedMedicinesList from "./medicines/featured-medicines-list";
import FeaturedMedicinesSkeleton from "../_suspense/featured-medicines-skeleton";

export default function Medicines() {
  return (
    <section id="medicines" className="bg-muted/30">
      <div className="section py-16">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-4">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight mb-2">
              Order Medicines Online
            </h2>
            <div className="flex flex-wrap items-center gap-5 text-muted-foreground text-sm font-medium mt-3">
              <div className="flex items-center gap-1.5">
                <RiShieldCheckLine className="w-5 h-5 text-green-500" />
                100% Genuine Medicines
              </div>
              <div className="flex items-center gap-1.5">
                <RiTruckLine className="w-5 h-5 text-blue-500" />
                Super Fast Delivery
              </div>
            </div>
          </div>
          <Button variant="outline" asChild className="rounded-full px-6">
            <Link href="/medicines">Go to Pharmacy</Link>
          </Button>
        </div>

        <Suspense fallback={<FeaturedMedicinesSkeleton />}>
          <FeaturedMedicinesList />
        </Suspense>
      </div>
    </section>
  );
}
