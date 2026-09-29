import Link from "next/link";
import {
  RiCalendarCheckLine,
  RiMicroscopeLine,
  RiMedicineBottleLine,
} from "@remixicon/react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-background pt-16 pb-24">
      {/* Decorative background elements */}
      <div
        className="absolute top-0 left-1/2 w-full -translate-x-1/2 overflow-hidden blur-3xl pointer-events-none"
        aria-hidden="true"
      >
        <div className="relative aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary to-blue-400 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
      </div>

      <div className="section relative">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-foreground mb-6">
            Your Comprehensive Healthcare <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500">
              Just a Click Away
            </span>
          </h1>

          <p className="mt-4 text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Book appointments with top doctors, order medicines online, and
            schedule lab tests from the comfort of your home.
          </p>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {/* Action Cards inside Hero */}
            <Link
              href="#doctors"
              className="group flex flex-col items-center justify-center p-6 bg-card border rounded-2xl shadow-sm hover:shadow-md hover:border-primary/50 transition-all"
            >
              <div className="w-16 h-16 rounded-full bg-blue-500/10 text-blue-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <RiCalendarCheckLine className="w-8 h-8" />
              </div>
              <h3 className="font-semibold text-lg mb-1">Book Appointment</h3>
              <p className="text-sm text-muted-foreground text-center">
                Consult with top specialists
              </p>
            </Link>

            <Link
              href="#medical-tests"
              className="group flex flex-col items-center justify-center p-6 bg-card border rounded-2xl shadow-sm hover:shadow-md hover:border-primary/50 transition-all"
            >
              <div className="w-16 h-16 rounded-full bg-purple-500/10 text-purple-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <RiMicroscopeLine className="w-8 h-8" />
              </div>
              <h3 className="font-semibold text-lg mb-1">Book Lab Tests</h3>
              <p className="text-sm text-muted-foreground text-center">
                Home sample collection
              </p>
            </Link>

            <Link
              href="#medicines"
              className="group flex flex-col items-center justify-center p-6 bg-card border rounded-2xl shadow-sm hover:shadow-md hover:border-primary/50 transition-all"
            >
              <div className="w-16 h-16 rounded-full bg-green-500/10 text-green-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <RiMedicineBottleLine className="w-8 h-8" />
              </div>
              <h3 className="font-semibold text-lg mb-1">Order Medicines</h3>
              <p className="text-sm text-muted-foreground text-center">
                Guaranteed genuine medicines
              </p>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
