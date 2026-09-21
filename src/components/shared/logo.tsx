import logo from "@/assets/images/logos/wiocare-fav.png";
import Image from "next/image";
import Link from "next/link";

function Logo() {
  return (
    <Link href="/" className="flex items-center">
      <Image
        src={logo}
        alt="Wiocare Logo"
        width={125}
        height={100}
        priority
        className="object-cover h-full w-auto dark:hidden"
      />
    </Link>
  );
}

export default Logo;
