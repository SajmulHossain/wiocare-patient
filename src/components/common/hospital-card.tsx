import Image from "next/image";
import Link from "next/link";
import { RiMapPinLine, RiArrowRightLine } from "@remixicon/react";

interface HospitalCardProps {
  title: string;
  location: string;
  image: string;
  emergency: boolean;
  specialties: string[];
  href: string;
}

export function HospitalCard({
  title,
  location,
  image,
  emergency,
  specialties,
  href,
}: HospitalCardProps) {
  return (
    <Link
      href={href}
      className="group flex flex-col md:flex-row min-h-55 overflow-hidden rounded-[24px] border border-border/50 bg-background shadow-sm transition-all duration-300 hover:shadow-lg"
    >
      {/* Image Section */}
      <div className="relative h-48 w-full shrink-0 md:h-auto md:w-[40%] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 400px"
        />
      </div>

      {/* Content Section */}
      <div className="flex flex-col p-6 md:p-8 grow">
        {emergency && (
          <div className="mb-4 flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-emerald-500" />
            <span className="text-[12px] font-bold text-emerald-600 dark:text-emerald-500">
              Emergency available
            </span>
          </div>
        )}

        <h3 className="mb-2 text-xl md:text-[22px] font-medium leading-tight text-foreground transition-colors group-hover:text-emerald-600 dark:group-hover:text-emerald-500">
          {title}
        </h3>

        <div className="mb-4 flex items-center gap-1.5 text-muted-foreground">
          <RiMapPinLine className="h-3.75 w-3.75" />
          <span className="text-[14px]">{location}</span>
        </div>

        <p className="mb-8 text-[13px] text-muted-foreground">
          {specialties.join(" · ")}
        </p>

        <div className="mt-auto flex items-center gap-1.5 text-[14px] font-bold text-emerald-600 dark:text-emerald-500">
          View Details
          <RiArrowRightLine className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
}
