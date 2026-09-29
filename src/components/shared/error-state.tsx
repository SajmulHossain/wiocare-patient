import { RiAlertLine } from "@remixicon/react";
import {
  Empty,
  EmptyMedia,
  EmptyHeader,
  EmptyTitle,
  EmptyDescription,
} from "@/components/ui/empty";

interface ErrorStateProps {
  message?: string;
}

export default function ErrorState({
  message = "Something went wrong",
}: ErrorStateProps) {
  return (
    <Empty className="py-16 border-destructive/20 bg-destructive/5">
      <EmptyHeader>
        <EmptyMedia variant="icon" className="w-12 h-12 bg-destructive/20">
          <RiAlertLine className="text-destructive w-6 h-6" />
        </EmptyMedia>
        <EmptyTitle className="text-lg text-destructive mt-2">
          Error Loading Data
        </EmptyTitle>
        <EmptyDescription className="text-sm max-w-sm">
          {message}
        </EmptyDescription>
      </EmptyHeader>
    </Empty>
  );
}
