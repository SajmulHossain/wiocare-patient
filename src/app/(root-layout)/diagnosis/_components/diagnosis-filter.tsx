"use client";

import { useCallback, useState } from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { RiSearch2Line } from "@remixicon/react";

export default function DiagnosisFilter() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [searchTerm, setSearchTerm] = useState(
    searchParams.get("search") || "",
  );

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      if (value) {
        params.set(name, value);
      } else {
        params.delete(name);
      }
      return params.toString();
    },
    [searchParams],
  );

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(`${pathname}?${createQueryString("search", searchTerm)}`);
  };

  return (
    <div className="bg-background rounded-2xl p-6 shadow-sm border mb-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col md:flex-row gap-4 items-end">
        <form onSubmit={handleSearch} className="flex-1 w-full relative">
          <div className="relative">
            <RiSearch2Line className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-5 w-5" />
            <Input
              type="text"
              placeholder="Search medical tests..."
              className="pl-10 h-12 w-full text-base rounded-xl border-muted-foreground/20 focus-visible:ring-primary"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </form>

        <div className="flex w-full md:w-auto gap-4">
          <Button
            className="h-12 px-6 rounded-xl md:w-auto w-24"
            onClick={handleSearch}
          >
            Search
          </Button>
        </div>
      </div>
    </div>
  );
}
