import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { RiMedicineBottleFill, RiShoppingCart2Line } from "@remixicon/react";
import type { IMedicine } from "@/types";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

interface MedicineCardProps {
  medicine: IMedicine;
}

export function MedicineCard({ medicine }: MedicineCardProps) {
  // Use a placeholder if no image exists
  const imageUrl = medicine.imageUrls?.[0];

  return (
    <div className="group flex flex-col rounded-2xl border border-border/50 bg-card text-card-foreground shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300 overflow-hidden relative">
      {medicine.discountPercentage && medicine.discountPercentage > 0 && (
        <Badge
          variant="destructive"
          className="absolute top-3 left-3 z-10 shadow-sm font-semibold rounded-full px-2 py-0.5 text-xs"
        >
          {medicine.discountPercentage}% OFF
        </Badge>
      )}

      <div className="relative h-48 w-full bg-slate-50/50 dark:bg-slate-900/50 p-4 flex items-center justify-center overflow-hidden">
        <Link
          href={`/medicines/${medicine.slug}`}
          className="relative h-full w-full block group-hover:scale-105 transition-transform duration-500"
        >
          <Avatar className="w-full h-full">
            <AvatarImage src={imageUrl} />
            <AvatarFallback>
              <RiMedicineBottleFill className="w-10 h-10 text-primary" />
            </AvatarFallback>
          </Avatar>
        </Link>
      </div>

      <div className="p-5 flex flex-col grow gap-2">
        <div className="flex justify-between items-start gap-2">
          <Link href={`/medicines/${medicine.slug}`}>
            <h3 className="font-semibold text-base md:text-lg line-clamp-1 hover:text-primary transition-colors">
              {medicine.name}{" "}
              <span className="text-xs md:text-sm font-normal text-muted-foreground">
                {medicine.strength}
              </span>
            </h3>
          </Link>
        </div>

        <p className="text-xs md:text-sm text-muted-foreground line-clamp-1">
          {medicine.generic?.name || "Generic"}
        </p>

        <p className="text-xs text-muted-foreground line-clamp-1 opacity-70">
          {medicine.manufacturer?.name || "Manufacturer"}
        </p>

        <div className="mt-auto pt-4 flex items-center justify-between border-t border-border/50">
          <div className="flex flex-col">
            {medicine.discountPrice ? (
              <>
                <span className="text-base md:text-lg font-bold text-primary">
                  ৳{medicine.discountPrice}
                </span>
                <span className="text-[10px] md:text-xs text-muted-foreground line-through">
                  ৳{medicine.mrp}
                </span>
              </>
            ) : (
              <span className="text-base md:text-lg font-bold text-primary">
                ৳{medicine.mrp}
              </span>
            )}
          </div>

          <Button
            size="sm"
            className="rounded-full h-8 md:h-9 px-3 md:px-4 gap-1.5 shadow-sm hover:shadow hover:bg-primary/90 transition-all"
          >
            <RiShoppingCart2Line className="w-3.5 h-3.5 md:w-4 md:h-4" />
            <span className="hidden sm:inline-block text-xs md:text-sm">
              Add
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
}
