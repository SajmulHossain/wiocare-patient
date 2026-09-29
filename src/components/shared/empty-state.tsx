import {
  type RemixiconComponentType,
  RiInboxArchiveLine,
} from "@remixicon/react";
import {
  Empty,
  EmptyMedia,
  EmptyHeader,
  EmptyTitle,
  EmptyDescription,
} from "@/components/ui/empty";

interface EmptyStateProps {
  title?: string;
  message?: string;
  icon?: RemixiconComponentType;
}

export default function EmptyState({
  title = "No Data Found",
  message = "There is currently no data to display here.",
  icon = RiInboxArchiveLine,
}: EmptyStateProps) {
  const Icon = icon;
  return (
    <Empty className="bg-muted/20 border border-primary">
      <EmptyHeader>
        <EmptyMedia className="w-12 h-12 bg-primary/10">
          <Icon className="text-primary w-6 h-6" />
        </EmptyMedia>
        <EmptyTitle className="text-lg mt-2">{title}</EmptyTitle>
        <EmptyDescription className="text-sm max-w-sm">
          {message}
        </EmptyDescription>
      </EmptyHeader>
    </Empty>
  );
}
