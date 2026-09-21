import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/images/logos/wiocare-fav.png";

function Logo({ show = false }: { show?: boolean }) {
  return (
    <Link href="/" className="flex items-center">
      <Image
        src={logo}
        alt="Wiocare Logo"
        width={200}
        height={200}
        priority
        className="object-cover h-10 w-10"
      />
      {show && (
        <h3 className="ml-2 text-xl font-semibold text-foreground">Wio Care</h3>
      )}
    </Link>
  );
}

export default Logo;
