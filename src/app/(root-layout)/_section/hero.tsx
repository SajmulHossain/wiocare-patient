"use client";

import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import img1 from "@/assets/images/banner/banner_img1.png";
import img2 from "@/assets/images/banner/banner_img2.png";
import img3 from "@/assets/images/banner/banner_img3.png";

import Autoplay from "embla-carousel-autoplay";
import { useEffect, useState } from "react";
import Image from "next/image";
import { cn } from "cn";

const banners = [
  {
    title: "Banner image 1",
    image: img1,
    redirect: "/",
  },
  {
    title: "Banner image 2",
    image: img2,
    redirect: "/",
  },
  {
    title: "Banner image 3",
    image: img3,
    redirect: "/doctors",
  },
];

export default function Hero() {
  const [api, setApi] = useState<CarouselApi>();
  const [count, setcount] = useState(0);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    setcount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <section className="section py-4">
      <Carousel
        opts={{
          loop: true,
        }}
        plugins={[Autoplay({ delay: 3000 })]}
        setApi={setApi}
        className="rounded-xl overflow-hidden"
      >
        <CarouselContent>
          {banners.map((banner) => (
            <CarouselItem key={banner.title}>
              <div className="relative w-full">
                <Image
                  src={banner.image}
                  height={300}
                  width={800}
                  alt={banner.title}
                  className="object-cover w-full h-full"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="mx-auto mt-6 flex w-fit items-center justify-center gap-2">
        {Array.from({ length: count }, (_, index) => {
          const isCurrent = index + 1 === current;

          return (
            <button
              type="button"
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={cn(
                "relative flex h-3 items-center justify-center rounded-full transition-all duration-500 ease-out",
                isCurrent
                  ? "w-16 bg-primary shadow-md shadow-primary/25"
                  : "w-6 bg-primary/20 hover:scale-110 hover:bg-primary/40",
              )}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={isCurrent}
            />
          );
        })}
      </div>
    </section>
  );
}
