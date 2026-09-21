"use client";

import * as React from "react";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "@/components/ui/sidebar";
import {
  RiNotificationLine,
  RiMenuLine,
  RiHomeLine,
  RiPaletteLine,
  RiChat1Line,
  RiGlobalLine,
  RiKeyboardLine,
  RiCheckLine,
  RiVideoLine,
  RiLinksLine,
  RiLockLine,
  RiSettingsLine,
} from "@remixicon/react";
import Link from "next/link";

const data = {
  nav: [
    {
      name: "Notifications",
      icon: <RiNotificationLine />,
    },
    {
      name: "Navigation",
      icon: <RiMenuLine />,
    },
    {
      name: "Home",
      icon: <RiHomeLine />,
    },
    {
      name: "Appearance",
      icon: <RiPaletteLine />,
    },
    {
      name: "Messages & media",
      icon: <RiChat1Line />,
    },
    {
      name: "Language & region",
      icon: <RiGlobalLine />,
    },
    {
      name: "Accessibility",
      icon: <RiKeyboardLine />,
    },
    {
      name: "Mark as read",
      icon: <RiCheckLine />,
    },
    {
      name: "Audio & video",
      icon: <RiVideoLine />,
    },
    {
      name: "Connected accounts",
      icon: <RiLinksLine />,
    },
    {
      name: "Privacy & visibility",
      icon: <RiLockLine />,
    },
    {
      name: "Advanced",
      icon: <RiSettingsLine />,
    },
  ],
};

export function SettingsDialog() {
  const [open, setOpen] = React.useState(true);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="sm">Open Dialog</Button>
      </DialogTrigger>
      <DialogContent className="overflow-hidden p-0 md:max-h-125 md:max-w-175 lg:max-w-200">
        <DialogTitle className="sr-only">Settings</DialogTitle>
        <DialogDescription className="sr-only">
          Customize your settings here.
        </DialogDescription>
        <SidebarProvider className="items-start">
          <Sidebar collapsible="none" className="hidden md:flex">
            <SidebarContent>
              <SidebarGroup>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {data.nav.map((item) => (
                      <SidebarMenuItem key={item.name}>
                        <SidebarMenuButton
                          asChild
                          isActive={item.name === "Messages & media"}
                        >
                          <Link href="#">
                            {item.icon}
                            <span>{item.name}</span>
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
            </SidebarContent>
          </Sidebar>
          <main className="flex h-120 flex-1 flex-col overflow-hidden">
            <header className="flex shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
              <div className="flex items-center gap-2 px-4">
                <Breadcrumb>
                  <BreadcrumbList>
                    <BreadcrumbItem className="hidden md:block">
                      <BreadcrumbLink href="#">Settings</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator className="hidden md:block" />
                    <BreadcrumbItem>
                      <BreadcrumbPage>Messages & media</BreadcrumbPage>
                    </BreadcrumbItem>
                  </BreadcrumbList>
                </Breadcrumb>
              </div>
            </header>
            <div className="flex flex-1 flex-col gap-4 overflow-y-auto p-4 pt-0">
              {Array.from({ length: 10 }).map((_, i) => (
                <div
                  key={i}
                  className="aspect-video max-w-3xl rounded-xl bg-muted/50"
                />
              ))}
            </div>
          </main>
        </SidebarProvider>
      </DialogContent>
    </Dialog>
  );
}
