import { Button } from "@/components/ui/button";
import { RiArrowRightLine } from "@remixicon/react";
import Link from "next/link";
import Image from "next/image";
import { HOME_HEALTHCARE_SERVICES } from "../_constant/home-healthcare";

export default function HomeHealthcare() {
  return (
    <section id="home-healthcare" className="bg-[#f8f6f3] dark:bg-muted/5">
      <div className="section">
        {/* Header Section */}
        <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <h4 className="mb-4 text-[11px] font-bold uppercase tracking-[0.2em] text-[#28b5e8]">
              Home Healthcare
            </h4>
            <h2 className="mb-3 text-4xl font-light text-foreground md:text-5xl">
              Care that{" "}
              <span className="font-medium text-[#28b5e8]">comes to you.</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Human, professional support delivered where you feel most
              comfortable.
            </p>
          </div>
          <Button
            variant="outline"
            asChild
            className="rounded-xl border-border bg-background px-6 font-semibold"
          >
            <Link href="/hospitals">
              Explore Home Healthcare{" "}
              <RiArrowRightLine className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Featured Large Card */}
          <div className="group relative h-100 w-full overflow-hidden rounded-[24px] shadow-sm lg:h-125">
            <Image
              src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=2069&auto=format&fit=crop"
              alt="Professional Home Care"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8 md:p-10">
              <h5 className="mb-2 text-[10px] font-bold uppercase tracking-[0.15em] text-white/80">
                Professional Home Care
              </h5>
              <h3 className="text-2xl font-bold text-white md:text-3xl">
                Book support around your day.
              </h3>
            </div>
          </div>

          {/* 2x2 Services Grid */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {HOME_HEALTHCARE_SERVICES.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div
                  key={idx}
                  className="flex flex-col rounded-[24px] border border-border/40 bg-background p-6 shadow-sm transition-shadow hover:shadow-md md:p-8"
                >
                  <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-[14px] bg-[#3ab8eb] text-white">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 text-[17px] font-medium text-foreground">
                    {service.title}
                  </h3>
                  <p className="text-[13px] text-muted-foreground">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
