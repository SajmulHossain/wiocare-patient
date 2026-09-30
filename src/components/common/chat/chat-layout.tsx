import type React from "react";
import { cn } from "@/lib/utils";

interface ChatLayoutProps {
  children: React.ReactNode;
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
