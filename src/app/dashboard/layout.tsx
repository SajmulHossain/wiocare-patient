import { AppSidebar } from "@/components/app-sidebar";
import ThemeToggler from "@/components/shared/theme-toggler";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { getNameInitialCharacter } from "@/lib/getNameInitChar";
import { RiNotification2Fill } from "@remixicon/react";
import type { ReactNode } from "react";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center justify-between gap-2">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator
              orientation="vertical"
              className="mr-2 data-vertical:h-4 data-vertical:self-auto"
            />
          </div>

          <div className="flex items-center gap-4 px-4">
            <ThemeToggler />
            <Button asChild variant="ghost" size="icon">
              <RiNotification2Fill className="size-5" />
            </Button>
            <div className="flex items-center gap-2">
              <Avatar className="h-8 w-8">
                <AvatarFallback>
                  {getNameInitialCharacter("Sajmul Hossain")}
                </AvatarFallback>
              </Avatar>
            </div>
          </div>
        </header>
        <main>{children}</main>
      </SidebarInset>
    </SidebarProvider>
  );
}
