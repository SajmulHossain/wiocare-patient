import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/provider/theme.provider";
import { cn } from "@/lib";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Wio Care - Ai HealthCare System",
    default: "Wio Care | Ai HealthCare System",
  },
  description:
    "Wio Care is Artificial Intelligence based healthcare management complete ecosystem for Bangladesh in first time.",
  icons: "logos/wiocare-fav.png",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full",
        "antialiased",
        poppins.variable,
        inter.variable,
        "font-inter",
      )}
    >
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <TooltipProvider>{children}</TooltipProvider>
          <Toaster closeButton richColors position="top-center" />
        </ThemeProvider>
      </body>
    </html>
  );
}
