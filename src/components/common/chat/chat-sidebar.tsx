"use client";

import Link from "next/link";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  useSidebar,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { RiMessage3Line, RiAddLine } from "@remixicon/react";
import { Button } from "@/components/ui/button";
import { SearchForm } from "../../dashboard-sidebar/search-form";

const chats = [
  { id: "1", title: "Implement Chat UI System", active: true },
  { id: "2", title: "Debugging Next.js Build Error", active: false },
  { id: "3", title: "Optimize Postgres Queries", active: false },
  { id: "4", title: "Generate Logo Concepts", active: false },
  { id: "5", title: "Review Pull Request #42", active: false },
  { id: "6", title: "How to setup Shadcn UI", active: false },
  { id: "7", title: "Tailwind CSS Grid vs Flexbox", active: false },
];

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { state } = useSidebar();
  const isCollapsed = state === "collapsed";

  return (
    <Sidebar collapsible="icon" className="border-r" {...props}>
      <SidebarHeader className="p-3 gap-4">
        <div className="flex items-center h-8">
          <SidebarTrigger className="text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-full h-8 w-8" />
          {!isCollapsed && <SearchForm className="w-full" />}
        </div>
        {isCollapsed ? (
          <Button variant="secondary" size={"sm"} asChild>
            <Link href={"/chat"}>
              <RiAddLine className="h-4.5 w-4.5" />
            </Link>
          </Button>
        ) : (
          <Button
            variant="secondary"
            className="w-full justify-start gap-3 shadow-none rounded-full h-11 px-3 bg-muted/50 hover:bg-muted"
            asChild
          >
            <Link href="/chat">
              <RiAddLine className="h-5 w-5 shrink-0" />
              {!isCollapsed && <span className="font-medium">New Chat</span>}
            </Link>
          </Button>
        )}
      </SidebarHeader>

      <SidebarContent className="px-2 mt-2 custom-scrollbar">
        <SidebarGroup className="px-0 py-2">
          <SidebarGroupContent>
            <SidebarMenu>
              {chats.map((chat) => (
                <SidebarMenuItem key={chat.id}>
                  <SidebarMenuButton
                    asChild
                    isActive={chat.active}
                    tooltip={chat.title}
                    className="rounded-full px-3 h-10 data-[active=true]:bg-primary/10 data-[active=true]:text-primary"
                  >
                    <Link href={`/chat/${chat.id}`}>
                      <RiMessage3Line className="h-4.5 w-4.5 shrink-0" />
                      <span>{chat.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
