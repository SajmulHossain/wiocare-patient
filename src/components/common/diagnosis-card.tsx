import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RiHome4Line, RiTimeLine } from "@remixicon/react";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Logo from "@/components/shared/logo";

interface DiagnosisCardProps {
  title: string;
  category: string;
  image?: string | null;
  homeCollection?: boolean;
  time?: string;
  price?: number;
  href: string;
  buttonText?: string;
}

export default function DiagnosisCard({
  title,
  category,
  image,
  homeCollection = true,
  time = "12-24 hours",
  price = 500,
  href,
  buttonText = "Book Test",
}: DiagnosisCardProps) {
  return (
    <Card className="group relative flex flex-col gap-0 overflow-hidden rounded-[20px] border border-border/60 bg-card py-0 transition-all duration-300 hover:border-primary/50 hover:shadow-xl">
      {/* Top Image Section */}
      <div className="relative h-40 w-full overflow-hidden bg-muted">
        <Avatar className="size-full rounded-none after:hidden">
          <AvatarImage
            src={image || undefined}
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <AvatarFallback className="rounded-none border-none bg-muted text-sm">
            <Logo show />
          </AvatarFallback>
        </Avatar>
      </div>

      {/* Content Section */}
      <div className="flex grow flex-col p-5">
        <p className="mb-2 text-[12px] font-bold text-primary">{category}</p>
        <h3 className="mb-4 text-[18px] font-medium leading-tight text-foreground transition-colors group-hover:text-primary">
          {title}
        </h3>

        <div className="mb-4 flex flex-col gap-2 text-[13px] text-gray-500 dark:text-gray-400">
          {homeCollection && (
            <div className="flex items-center gap-1.5">
              <RiHome4Line className="h-4 w-4 text-muted-foreground" />
              <span>Home collection</span>
            </div>
          )}
          <div className="flex items-center gap-1.5">
            <RiTimeLine className="h-4 w-4 text-muted-foreground" />
            <span>{time}</span>
          </div>
        </div>

        <hr className="mb-4 mt-auto border-gray-100 dark:border-gray-800" />

        {/* Details & Button */}
        <div className="flex items-end justify-between">
          <div>
            <p className="mb-0.5 text-[11px] text-gray-400">Starting from</p>
            <p className="text-[16px] font-bold text-foreground">
              ৳{price.toLocaleString()}
            </p>
          </div>
          <Button
            asChild
            className="h-10 rounded-xl bg-primary px-5 text-[13px] font-semibold text-primary-foreground shadow-none hover:bg-primary/90"
          >
            <Link href={href}>{buttonText}</Link>
          </Button>
        </div>
      </div>
    </Card>
  );
}
