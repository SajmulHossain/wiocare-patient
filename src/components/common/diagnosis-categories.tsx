"use client";

import { useRouter, useSearchParams, usePathname } from "next/navigation";

const CATEGORIES = [
  "Blood Tests",
  "Imaging",
  "Diabetes",
  "Heart Health",
  "Liver",
  "Kidney",
  "Health Packages",
];

export default function DiagnosisCategories() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const currentCategory = searchParams.get("category");

  const handleCategoryClick = (category: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (currentCategory === category) {
      params.delete("category");
    } else {
      params.set("category", category);
    }
    router.push(`/diagnosis?${params.toString()}`);
  };

  const isHomePage = pathname === "/";

  return (
    <div className="mb-10 flex flex-wrap items-center gap-3">
      {CATEGORIES.map((category, idx) => {
        const isActive =
          currentCategory === category ||
          (isHomePage && !currentCategory && idx === 0);

        return (
          <button
            type="button"
            key={category}
            onClick={() => handleCategoryClick(category)}
            className={`rounded-full border px-5 py-2 text-[14px] font-medium transition-colors ${
              isActive
                ? "border-primary bg-primary/10 text-primary hover:bg-primary/20"
                : "border-border/80 bg-transparent text-muted-foreground hover:border-foreground/30 hover:text-foreground"
            }`}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}
