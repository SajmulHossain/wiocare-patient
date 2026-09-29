import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function CTA() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Decorative gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-96 bg-gradient-to-r from-primary/30 to-blue-500/30 blur-[100px] rounded-full pointer-events-none -z-10"></div>

      <div className="section relative z-10">
        <div className="max-w-4xl mx-auto text-center p-8 sm:p-12 border rounded-3xl bg-background/80 backdrop-blur-xl shadow-2xl">
          <h2 className="text-4xl font-extrabold tracking-tight mb-6">
            Ready to take control of your health?
          </h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Join thousands of users who are already making informed decisions
            about their well-being with WioCare.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              asChild
              className="rounded-full px-10 h-14 text-lg w-full sm:w-auto"
            >
              <Link href="/dashboard">Get Started Now</Link>
            </Button>
            <p className="text-sm text-muted-foreground mt-4 sm:mt-0 sm:ml-4">
              Free to get started. No credit card required.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
