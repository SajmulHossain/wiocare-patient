import { NotFoundSection } from "./_section/not-found-section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found",
};

export default function NotFound() {
  return <NotFoundSection />;
}
