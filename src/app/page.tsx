import Image from "next/image";
import logo from "@/assets/images/logos/wiocare-fav.png";
import ThemeToggler from "@/components/shared/theme-toggler";

export default function Home() {
  return (
    <div className="h-screen grid place-items-center">
      <Image
        src={logo}
        alt="Wiocare"
        width={200}
        height={200}
        className="animate-pulse"
      />
      <ThemeToggler />
    </div>
  );
}
