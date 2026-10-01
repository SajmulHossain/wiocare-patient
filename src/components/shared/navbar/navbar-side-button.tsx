"use client";

import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import auth from "@/config/better-auth.config";
import Link from "next/link";

const NavbarSideButton = () => {
  const { data, isPending } = auth.useSession();

  if (!data?.user && isPending) {
    return (
      <div className="hidden md:flex items-center gap-4">
        <Skeleton className="w-20 h-9"></Skeleton>
        <Skeleton className="w-20 h-9"></Skeleton>
      </div>
    );
  }

  return data?.user ? (
    <Button variant="destructive" onClick={() => auth.signOut()}>
      Logout
    </Button>
  ) : (
    <>
      <Link href="/login" className="w-full">
        <Button variant="outline" className="w-full">
          Log in
        </Button>
      </Link>
      <Link href="/signup" className="w-full">
        <Button className="w-full">Get Started</Button>
      </Link>
    </>
  );
};

export default NavbarSideButton;
