"use client";

import { Poppins, Inter } from "next/font/google";
import { cn } from "@/lib";
import { GlobalErrorSection } from "./_section/global-error-section";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full antialiased",
        poppins.variable,
        inter.variable,
        "font-inter",
      )}
    >
      <body>
        <GlobalErrorSection error={error} reset={reset} />
      </body>
    </html>
  );
}
