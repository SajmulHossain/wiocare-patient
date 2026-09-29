import Link from "next/link";
import Logo from "@/components/shared/logo";
import {
  RiFacebookCircleFill,
  RiInstagramFill,
  RiLinkedinFill,
  RiMailFill,
  RiMapPin2Fill,
  RiPhoneFill,
  RiTwitterFill,
} from "@remixicon/react";

const footerLinks = {
  company: [
    { name: "About Us", href: "/about" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
    { name: "Blog", href: "/blog" },
  ],
  services: [
    { name: "Telemedicine", href: "/services/telemedicine" },
    { name: "Find a Doctor", href: "/doctors" },
    { name: "Mental Health", href: "/services/mental-health" },
    { name: "Pediatrics", href: "/services/pediatrics" },
  ],
  legal: [
    { name: "Terms of Service", href: "/terms" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Cookie Policy", href: "/cookie-policy" },
  ],
};

const socialLinks = [
  { name: "Facebook", icon: RiFacebookCircleFill, href: "#" },
  { name: "Twitter", icon: RiTwitterFill, href: "#" },
  { name: "Instagram", icon: RiInstagramFill, href: "#" },
  { name: "Linkedin", icon: RiLinkedinFill, href: "#" },
];

export function Footer() {
  return (
    <footer className="bg-muted/40 border-t">
      <div className="section pb-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand and Description */}
          <div className="lg:col-span-2 space-y-6">
            <Logo show={true} />
            <p className="text-muted-foreground text-sm max-w-sm">
              WioCare is your trusted partner for digital healthcare, connecting
              you with top medical professionals anytime, anywhere. Experience
              healthcare without boundaries.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <RiMapPin2Fill className="h-4 w-4" />
                <span>123 Health Ave, Medical City, MC 10012</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <RiPhoneFill className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <RiMailFill className="h-4 w-4" />
                <span>support@wiocare.com</span>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div className="space-y-4">
            <h4 className="text-foreground font-semibold">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div className="space-y-4">
            <h4 className="text-foreground font-semibold">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div className="space-y-4">
            <h4 className="text-foreground font-semibold">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 py-6 border-t flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} WioCare. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <Link
                  key={social.name}
                  href={social.href}
                  className="text-muted-foreground hover:text-foreground transition-colors p-2 rounded-full hover:bg-muted"
                >
                  <span className="sr-only">{social.name}</span>
                  <Icon className="h-5 w-5" />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
