import { AppSidebar } from "@/components/dashboard-sidebar/dashboard-sidebar";
import ThemeToggler from "@/components/shared/theme-toggler";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { getNameInitialCharacter } from "@/lib";
import {
  RiCalendar2Fill,
  RiKnifeBloodFill,
  RiNotification2Fill,
  RiPhoneLine,
} from "@remixicon/react";
import Image from "next/image";
import type { ReactNode } from "react";
import logo from "@/assets/images/logos/wiocare-fav.png";
import WioChatPopup from "@/components/shared/wio-chat-popup";
import Link from "next/link";

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

          <div className="flex items-center grow gap-6 bg-primary/30 px-2 py-1 rounded-md w-fit">
            <span className="font-medium text-sm">Sajmul Hossain</span>
            <Csp>
              <RiCalendar2Fill className="h-5 w-5" />
              36 July 2024
            </Csp>
            <Csp>
              <Image
                src={logo}
                alt="Logo"
                width={25}
                height={25}
                className="w-auto h-auto"
              />
              2006 0124654
            </Csp>
            <Csp>
              <RiKnifeBloodFill className="h-5 w-5" />
              A+
            </Csp>

            <Csp>
              <RiPhoneLine className="h-5 w-5" />
              01817730511
            </Csp>
          </div>

          <div className="flex items-center gap-4 px-4">
            <ThemeToggler />
            <Button asChild variant="ghost" size="icon">
              <RiNotification2Fill className="size-5" />
            </Button>
            <div className="flex items-center gap-2">
              <Link href={"/profile"}>
                <Avatar className="h-8 w-8">
                  <AvatarFallback>
                    {getNameInitialCharacter("Sajmul Hossain")}
                  </AvatarFallback>
                </Avatar>
              </Link>
            </div>
          </div>
        </header>
        <main className="h-full p-2">{children}</main>
      </SidebarInset>
      <WioChatPopup />
    </SidebarProvider>
  );
}

const Csp = ({ children }: { children: ReactNode }) => {
  return <span className="flex items-center gap-1">{children}</span>;
};
