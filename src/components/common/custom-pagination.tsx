"use client";

import { useState, useTransition } from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from "@/components/ui/pagination";
import { cn } from "@/lib/utils";
import type { IMeta } from "@/types";
import { Spinner } from "@/components/ui/spinner";
import { RiArrowLeftLine, RiArrowRightLine } from "@remixicon/react";
import { Button } from "../ui/button";

interface CustomPaginationProps {
  meta: IMeta | null;
  className?: string;
}

export default function CustomPagination({
  meta,
  className,
}: CustomPaginationProps) {
  const [isPending, startTransition] = useTransition();
  const [pendingPage, setPendingPage] = useState<number | null>(null);
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createPageURL = (pageNumber: number) => {
    const params = new URLSearchParams(searchParams.toString());

    params.set("page", pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  const handlePageChange = (pageNumber: number) => {
    if (isPending || pageNumber < 1) return;

    setPendingPage(pageNumber);
    startTransition(() => {
      router.push(createPageURL(pageNumber));
    });
  };

  const currentPage = Number(useSearchParams().get("page") || "1");
  if (!meta || !meta.page) return null;
  const { page, limit, total } = meta;
  const totalPages = Math.ceil(total / limit);

  if (totalPages <= 1) return null;

  return (
    <Pagination className={cn("mt-6", className)}>
      <PaginationContent className="gap-2">
        {/* Previous Button */}
        <PaginationItem>
          <Button
            onClick={() => handlePageChange(page - 1)}
            disabled={page === 1 || isPending}
            className="min-w-10 h-10 flex items-center justify-center text-sm font-medium transition-colors bg-card hover:bg-muted text-foreground rounded-md disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Go to previous page"
          >
            <RiArrowLeftLine className="h-4 w-4" />
          </Button>
        </PaginationItem>

        {/* Page Numbers */}
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <PaginationItem key={page}>
            <Button
              onClick={() => handlePageChange(page)}
              disabled={isPending}
              className={`
                min-w-10 h-10 flex items-center justify-center text-sm font-medium transition-colors rounded-md
                ${
                  page ===
                  (isPending && pendingPage ? pendingPage : currentPage)
                    ? "bg-primary text-primary-foreground"
                    : "bg-card text-foreground hover:bg-muted"
                }
              `}
            >
              {isPending && pendingPage === page ? <Spinner /> : page}
            </Button>
          </PaginationItem>
        ))}

        {/* Next Button */}
        <PaginationItem>
          <Button
            onClick={() => handlePageChange(page + 1)}
            disabled={page === totalPages || isPending}
            className="min-w-10 h-10 flex items-center justify-center text-sm font-medium transition-colors bg-card hover:bg-muted text-foreground rounded-md disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Go to next page"
          >
            <RiArrowRightLine className="h-4 w-4" />
          </Button>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
