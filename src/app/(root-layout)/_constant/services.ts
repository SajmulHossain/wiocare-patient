import {
  RiUserHeartLine,
  RiFlaskLine,
  RiCapsuleLine,
  RiHospitalLine,
  RiHomeSmileLine,
  RiHeartPulseLine,
} from "@remixicon/react";

export const services = [
  {
    title: "Doctor Consultation",
    description: "Talk to a trusted doctor",
    icon: RiUserHeartLine,
    href: "/doctors",
  },
  {
    title: "Diagnostic Tests",
    description: "Book tests from home",
    icon: RiFlaskLine,
    href: "/diagnosis",
  },
  {
    title: "Order Medicine",
    description: "Get medicines delivered",
    icon: RiCapsuleLine,
    href: "/medicines",
  },
  {
    title: "Find Hospital",
    description: "Discover trusted hospitals",
    icon: RiHospitalLine,
    href: "/hospitals",
  },
  {
    title: "Home Healthcare",
    description: "Care at your doorstep",
    icon: RiHomeSmileLine,
    href: "/home-healthcare",
  },
  {
    title: "Emergency Care",
    description: "Get urgent assistance",
    icon: RiHeartPulseLine,
    href: "/emergency",
  },
];
