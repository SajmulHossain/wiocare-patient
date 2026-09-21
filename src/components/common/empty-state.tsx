import React from "react";
import { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface EmptyStateProps {
  icon?: LucideIcon;
  title: string;
  description?: string;
  actionLabel?: string;
  actionHref?: string;
  className?: string;
  type?: "default" | "error" | "warning" | "success";
}

const EmptyState: React.FC<EmptyStateProps> = ({
  icon: Icon,
  title,
  description,
  actionLabel,
  actionHref,
  className = "",
  type = "default",
}) => {
  return (
    <div
      className={`rounded-xl border border-dashed p-8 text-center ${className}`}
    >
      {Icon && (
        <Icon
          className={cn("mx-auto mb-3 h-10 w-10", {
            "text-red-500": type === "error",
            "text-yellow-500": type === "warning",
            "text-green-500": type === "success",
          })}
        />
      )}
      <p className="text-lg font-semibold">{title}</p>
      <p className="text-sm text-muted-foreground mt-1">{description}</p>
      {actionLabel && actionHref && (
        <Button asChild className="mt-4">
          <Link href={actionHref}>{actionLabel}</Link>
        </Button>
      )}
    </div>
  );
};
export default EmptyState;
