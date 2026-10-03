import { fetchDoctors } from "@/app/(root-layout)/_action/doctor.action";
import { AvailableDoctorCard } from "@/components/common/available-doctor-card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default async function AvailableToday() {
  // Fetch a subset of doctors to show in the carousel
  const doctorsData = await fetchDoctors({ limit: 8 });
  const doctors = doctorsData?.data || [];

  if (!doctors.length) return null;

  return (
    <div className="mb-8 rounded-3xl bg-[#eef9fb] p-5 md:p-8 dark:bg-[#1a2c32]/50">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <div className="mb-6 flex items-center justify-between">
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <div className="h-2.5 w-2.5 rounded-full bg-emerald-500 ring-4 ring-emerald-500/20"></div>
              <h2 className="text-xl font-medium text-foreground md:text-2xl">
                Available Today
              </h2>
            </div>
            <p className="ml-4 mt-1 text-[13px] text-muted-foreground">
              Doctors ready to see you soon
            </p>
          </div>

          <div className="flex items-center gap-2">
            <CarouselPrevious className="static h-9 w-9 translate-y-0 transform-none border-border/60 bg-white hover:bg-muted dark:bg-card" />
            <CarouselNext className="static h-9 w-9 translate-y-0 transform-none border-border/60 bg-white hover:bg-muted dark:bg-card" />
          </div>
        </div>

        <CarouselContent className="-ml-4">
          {doctors.map((doctor) => (
            <CarouselItem
              key={doctor.id}
              className="pl-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
            >
              <AvailableDoctorCard doctor={doctor} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
