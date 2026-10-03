import Link from "next/link";
import { RiMedicineBottleFill, RiAddLine } from "@remixicon/react";
import type { IMedicine } from "@/types";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

interface MedicineCardProps {
  medicine: IMedicine;
}

const PASTEL_COLORS = [
  "bg-[#f0f9f6]", // light green
  "bg-[#fcf5eb]", // light orange/beige
  "bg-[#eff4fb]", // light blue
  "bg-[#f9eff4]", // light pink
];

export function MedicineCard({ medicine }: MedicineCardProps) {
  // Use a placeholder if no image exists
  const imageUrl = medicine.imageUrls?.[0];

  // Pick a stable pastel background color based on medicine ID
  const bgColor =
    PASTEL_COLORS[
      medicine.id.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0) %
        PASTEL_COLORS.length
    ];

  return (
    <div className="group flex flex-col rounded-[24px] border border-border/40 bg-background p-3 shadow-sm transition-all duration-300 hover:border-primary/30 hover:shadow-md">
      <div
        className={`relative flex h-40 w-full items-center justify-center overflow-hidden rounded-2xl ${bgColor} p-4`}
      >
        <Link
          href={`/medicines/${medicine.slug}`}
          className="relative block h-full w-full transition-transform duration-500 group-hover:scale-105"
        >
          <Avatar className="h-full w-full rounded-none">
            <AvatarImage
              src={imageUrl || undefined}
              className="object-contain"
            />
            <AvatarFallback className="bg-transparent">
              <RiMedicineBottleFill className="h-10 w-10 text-primary/40" />
            </AvatarFallback>
          </Avatar>
        </Link>
      </div>

      <div className="flex grow flex-col px-1 pb-1 pt-4">
        <p className="mb-1 text-[11px] text-muted-foreground line-clamp-1">
          {medicine.generic?.name || "Healthcare"}
        </p>

        <Link href={`/medicines/${medicine.slug}`}>
          <h3 className="line-clamp-1 text-[17px] font-semibold leading-tight text-foreground transition-colors hover:text-primary">
            {medicine.name}
          </h3>
        </Link>

        <p className="mt-1 text-[12px] text-muted-foreground line-clamp-1">
          {medicine.strength || "Standard Pack"}
        </p>

        <div className="mb-1 mt-auto flex items-end justify-between pt-4">
          <div className="flex items-center gap-2">
            <span className="text-[17px] font-bold text-foreground">
              ৳{medicine.discountPrice || medicine.mrp}
            </span>
            {medicine.discountPrice && (
              <span className="text-[12px] text-muted-foreground line-through">
                ৳{medicine.mrp}
              </span>
            )}
          </div>

          <button
            type="button"
            className="flex h-8 w-8 items-center justify-center rounded-full border border-border bg-background text-primary transition-colors hover:border-primary hover:bg-primary/5"
          >
            <RiAddLine className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
