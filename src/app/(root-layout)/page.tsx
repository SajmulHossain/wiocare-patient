import Image from "next/image";
import logo from "@/assets/images/logos/wiocare-fav.png";
import ThemeToggler from "@/components/shared/theme-toggler";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen grid place-items-center">
      <Image
        src={logo}
        alt="WioCare Logo"
        width={200}
        height={200}
        priority
        className="animate-pulse w-auto h-auto"
      />
      <ThemeToggler />
      <Link href={"/dashboard"}>Dashboard</Link>
    </div>
  );
}
