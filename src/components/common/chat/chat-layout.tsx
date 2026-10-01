import { cn } from "@/lib";
import type { ReactNode } from "react";

interface ChatLayoutProps {
  children: ReactNode;
  className?: string;
}

export function ChatLayout({ children, className }: ChatLayoutProps) {
  return (
    <div
      className={cn(
        "flex flex-col h-full w-full bg-background overflow-hidden border rounded-xl shadow-sm",
        className,
      )}
    >
      {children}
    </div>
  );
}
