import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import Logo from "@/components/shared/logo";
import { RiMenu2Fill } from "@remixicon/react";
import ThemeToggler from "../theme-toggler";
import NavbarSideButton from "./navbar-side-button";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Doctors", href: "/doctors" },
  { name: "Diagnosis", href: "/diagnosis" },
  { name: "Medicines", href: "/medicines" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="section py-3 flex h-16 items-center justify-between relative">
        {/* Left: Logo */}
        <div className="flex items-center">
          <Logo show />
        </div>

        {/* Center: Desktop Links */}
        <nav className="hidden md:flex items-center gap-6 absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right: CTA and Mobile Menu */}
        <div className="flex items-center gap-4">
          <ThemeToggler />
          <div className="hidden md:flex items-center gap-4">
            <NavbarSideButton />
          </div>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                className="px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
              >
                <RiMenu2Fill className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="pr-0">
              <SheetHeader className="px-7 text-left">
                <SheetTitle>
                  <Logo show={true} />
                </SheetTitle>
              </SheetHeader>
              <div className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6 flex flex-col justify-between">
                <nav className="flex flex-col space-y-3 pt-6">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="text-foreground/70 transition-colors hover:text-foreground text-lg font-medium"
                    >
                      {link.name}
                    </Link>
                  ))}
                </nav>
                <div className="flex flex-col space-y-3 mt-auto pr-6">
                  <ThemeToggler />
                  <NavbarSideButton />
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
