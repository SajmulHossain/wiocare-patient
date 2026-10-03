import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/images/logos/wiocare-fav.png";
import wiocareLogoFull from "@/assets/images/logos/wiocare-full-logo.png";

function Logo({ show = false }: { show?: boolean }) {
  return (
    <Link href="/">
      {show ? (
        <Image
          src={wiocareLogoFull}
          alt="Wiocare Logo"
          width={200}
          height={200}
          priority
          className="object-cover"
        />
      ) : (
        <Image
          src={logo}
          alt="Wiocare Logo"
          width={200}
          height={200}
          priority
          className="object-cover h-10 w-10"
        />
      )}
    </Link>
  );
}

export default Logo;
