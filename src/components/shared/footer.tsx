import Link from "next/link";
import Logo from "@/components/shared/logo";
import {
  RiFacebookFill,
  RiInstagramLine,
  RiLinkedinFill,
  RiYoutubeFill,
  RiMailLine,
  RiMapPin2Line,
  RiGooglePlayFill,
  RiAppleFill,
} from "@remixicon/react";

const footerLinks = {
  support: [
    { name: "Create an Account", href: "#" },
    { name: "Patient Login", href: "#" },
    { name: "Doctors Login", href: "#" },
    { name: "Ambulance Login", href: "#" },
    { name: "Hospital Login", href: "#" },
    { name: "Pharmacy Login", href: "#" },
    { name: "Contact Support", href: "#" },
    { name: "Partner With Wio Care", href: "#" },
  ],
  company: [
    { name: "About Wio Care", href: "#" },
    { name: "Platform Features", href: "#" },
    { name: "Plans & Pricing", href: "#" },
    { name: "Doctor Directory", href: "#" },
    { name: "Terms & Conditions", href: "#" },
    { name: "Privacy Policy", href: "#" },
    { name: "Refund Policy", href: "#" },
    { name: "Account Deletion", href: "#" },
  ],
};

const socialLinks = [
  { name: "Facebook", icon: RiFacebookFill, href: "#" },
  { name: "Instagram", icon: RiInstagramLine, href: "#" },
  { name: "Linkedin", icon: RiLinkedinFill, href: "#" },
  { name: "Youtube", icon: RiYoutubeFill, href: "#" },
];

export function Footer() {
  return (
    <footer className="bg-[#0b5f79] pt-16 pb-12">
      <div className="section pt-0 pb-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Column 1: Brand and Info */}
          <div className="lg:col-span-3 flex flex-col gap-6">
            <div>
              <Logo show={true} />
            </div>

            <div className="flex flex-col gap-4 text-[13px] text-cyan-50/80">
              <div className="flex items-start gap-3">
                <RiMapPin2Line className="h-4 w-4 shrink-0 mt-0.5 text-cyan-50/80" />
                <Link
                  href={"https://maps.app.goo.gl/pSseWkWF4uoMuQRz5"}
                  target="_blank"
                  className="leading-relaxed"
                >
                  7th Floor, M M Tower, CDA Ave, Chattogram- 4317, Bangladesh.
                </Link>
              </div>
              <div className="flex items-center gap-3">
                <RiMailLine className="h-4 w-4 shrink-0 text-cyan-50/80" />
                <Link href={"mailto:support@wiocare.com"} target="_blank">
                  support@wiocare.com
                </Link>
              </div>
              <div className="flex items-center gap-3">
                <RiMailLine className="h-4 w-4 shrink-0 text-cyan-50/80" />
                <Link href={"mailto:contact@wiocare.com"} target="_blank">
                  contact@wiocare.com
                </Link>
              </div>
            </div>

            <p className="text-[13px] font-medium text-[#28b5e8]">
              Trade License No: TRAD/CCRA/000494/2025
            </p>

            <div className="flex items-center gap-3 mt-2">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <Link
                    key={social.name}
                    href={social.href}
                    className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#213b4a]/60 text-white transition-colors hover:bg-[#28b5e8]"
                  >
                    <span className="sr-only">{social.name}</span>
                    <Icon className="h-4 w-4" />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Column 2: Support */}
          <div className="lg:col-span-3 lg:pl-10">
            <h4 className="mb-6 text-sm font-bold tracking-wider text-white uppercase">
              Support
            </h4>
            <ul className="flex flex-col gap-4">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-[13px] text-cyan-50/80 transition-colors hover:text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Company */}
          <div className="lg:col-span-2">
            <h4 className="mb-6 text-sm font-bold tracking-wider text-white uppercase">
              Company
            </h4>
            <ul className="flex flex-col gap-4">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-[13px] text-cyan-50/80 transition-colors hover:text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Connect */}
          <div className="lg:col-span-4">
            <h4 className="mb-6 text-sm font-bold tracking-wider text-white uppercase">
              Connect
            </h4>
            <div className="rounded-2xl bg-[#243343] p-6 shadow-lg">
              <h5 className="mb-2 text-base font-semibold text-white">
                Download Our App
              </h5>
              <p className="mb-6 text-[11px] leading-relaxed text-cyan-50/60">
                7th Floor, M M Tower, CDA Ave, Chattogram- 4317, Bangladesh.
              </p>

              <div className="flex flex-col gap-3">
                <Link
                  href="https://play.google.com/store/apps/details?id=com.wiocare.mobile"
                  target="_blank"
                  className="flex items-center gap-3 rounded-xl border border-white/10 bg-[#2b3c4e] px-4 py-2.5 transition-colors hover:bg-[#34485d]"
                >
                  <RiGooglePlayFill className="h-6 w-6 text-emerald-400" />
                  <div className="flex flex-col">
                    <span className="text-[9px] font-medium leading-none text-white/60">
                      GET IT ON
                    </span>
                    <span className="mt-0.5 text-sm font-semibold leading-none text-white">
                      Google Play
                    </span>
                  </div>
                </Link>

                <Link
                  href="#"
                  className="flex items-center gap-3 rounded-xl border border-white/10 bg-[#2b3c4e] px-4 py-2.5 transition-colors hover:bg-[#34485d]"
                >
                  <RiAppleFill className="h-7 w-7 text-white" />
                  <div className="flex flex-col">
                    <span className="text-[9px] font-medium leading-none text-white/60">
                      DOWNLOAD ON THE
                    </span>
                    <span className="mt-0.5 text-sm font-semibold leading-none text-white">
                      App Store
                    </span>
                  </div>
                </Link>
              </div>

              {/* Payment Methods */}
              <div className="mt-6 flex flex-col gap-3 rounded-xl bg-white px-4 py-4">
                <div className="flex items-center justify-between">
                  <span className="text-[9px] font-bold text-blue-900 italic">
                    VISA
                  </span>
                  <div className="flex items-center -space-x-1">
                    <div className="h-3 w-3 rounded-full bg-red-500 opacity-80 mix-blend-multiply"></div>
                    <div className="h-3 w-3 rounded-full bg-yellow-400 opacity-80 mix-blend-multiply"></div>
                  </div>
                  <span className="text-[9px] font-bold text-blue-500">
                    AMEX
                  </span>
                  <span className="text-[10px] font-bold text-red-500">
                    Discover
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold text-pink-600">
                    bKash
                  </span>
                  <span className="text-[10px] font-bold text-orange-500">
                    Nagad
                  </span>
                  <span className="text-[10px] font-bold text-blue-600">
                    Upay
                  </span>
                  <span className="text-[9px] font-bold text-blue-900 italic">
                    VISA
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
