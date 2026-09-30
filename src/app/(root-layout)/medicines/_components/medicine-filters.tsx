"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RiSearchLine, RiFilter3Line } from "@remixicon/react";

export default function MedicineFilters() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [searchTerm, setSearchTerm] = useState(
    searchParams.get("searchTerm") || "",
  );
  const [sortBy, setSortBy] = useState(searchParams.get("sortBy") || "");
  const [sortOrder, setSortOrder] = useState(
    searchParams.get("sortOrder") || "",
  );

  // Create query string
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

  // Debounced search
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      const currentSearch = searchParams.get("search") || "";
      if (searchTerm !== currentSearch) {
        router.push(`/medicines?${createQueryString("search", searchTerm)}`);
      }
    }, 500);

    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm, createQueryString, router, searchParams]);

  const handleSortChange = (value: string) => {
    if (value === "price_asc") {
      router.push(
        `/medicines?${createQueryString("sortBy", "mrp")}&sortOrder=asc`,
      );
      setSortBy("mrp");
      setSortOrder("asc");
    } else if (value === "price_desc") {
      router.push(
        `/medicines?${createQueryString("sortBy", "mrp")}&sortOrder=desc`,
      );
      setSortBy("mrp");
      setSortOrder("desc");
    } else {
      // Clear sorting
      const params = new URLSearchParams(searchParams.toString());
      params.delete("sortBy");
      params.delete("sortOrder");
      router.push(`/medicines?${params.toString()}`);
      setSortBy("");
      setSortOrder("");
    }
  };

  const currentSortValue =
    sortBy && sortOrder
      ? sortBy === "mrp" && sortOrder === "asc"
        ? "price_asc"
        : sortBy === "mrp" && sortOrder === "desc"
          ? "price_desc"
          : "default"
      : "default";

  return (
    <div className="flex flex-col sm:flex-row gap-4 mb-8 bg-card/60 backdrop-blur-sm p-4 rounded-3xl border border-border/60 shadow-sm transition-all duration-300 hover:shadow-md hover:border-border">
      <div className="relative flex-grow">
        <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-muted-foreground">
          <RiSearchLine className="w-5 h-5 transition-colors group-focus-within:text-primary" />
        </div>
        <Input
          type="text"
          placeholder="Search medicines by name or generic..."
          className="pl-11 h-12 bg-background/50 border-border/50 focus-visible:bg-background focus-visible:border-primary/50 focus-visible:ring-primary/20 rounded-2xl transition-all shadow-sm group"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="flex items-center gap-3 w-full sm:w-auto">
        <div className="hidden sm:flex items-center justify-center p-3 bg-primary/10 text-primary rounded-2xl shrink-0 shadow-sm border border-primary/20">
          <RiFilter3Line className="w-5 h-5" />
        </div>
        <Select value={currentSortValue} onValueChange={handleSortChange}>
          <SelectTrigger className="h-12 w-full sm:w-[220px] rounded-2xl border-border/50 bg-background/50 shadow-sm focus:ring-primary/20 transition-all">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent className="rounded-2xl border-border/50 shadow-lg">
            <SelectItem value="default" className="rounded-xl cursor-pointer">
              Default Sorting
            </SelectItem>
            <SelectItem value="price_asc" className="rounded-xl cursor-pointer">
              Price: Low to High
            </SelectItem>
            <SelectItem
              value="price_desc"
              className="rounded-xl cursor-pointer"
            >
              Price: High to Low
            </SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
