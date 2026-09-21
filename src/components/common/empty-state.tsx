import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  Empty,
  EmptyTitle,
  EmptyDescription,
  EmptyContent,
  EmptyMedia,
  EmptyHeader,
} from "@/components/ui/empty";
import type { RemixiconComponentType } from "@remixicon/react";

interface EmptyStateProps {
  icon?: RemixiconComponentType | React.ComponentType<{ className?: string }>;
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
  className,
  type = "default",
}) => {
  return (
    <Empty className={cn(className, "border border-dashed")}>
      <EmptyHeader>
        {Icon && (
          <EmptyMedia>
            <Icon
              className={cn({
                "text-red-500": type === "error",
                "text-yellow-500": type === "warning",
                "text-green-500": type === "success",
              })}
            />
          </EmptyMedia>
        )}
        <EmptyTitle>{title}</EmptyTitle>
      </EmptyHeader>
      {description && <EmptyDescription>{description}</EmptyDescription>}
      {actionLabel && actionHref && (
        <EmptyContent className="mt-4">
          <Button asChild>
            <Link href={actionHref}>{actionLabel}</Link>
          </Button>
        </EmptyContent>
      )}
    </Empty>
  );
};

export default EmptyState;
