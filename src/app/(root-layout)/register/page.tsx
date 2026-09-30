import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { RegisterSection } from "./_section/register-section";

export default function RegisterPage() {
  return (
    <section className="min-h-[80vh] flex flex-col items-center justify-center py-16">
      <div className="section w-full">
        <div className="text-center mb-6">
          <h1 className="text-4xl font-bold tracking-tight mb-2">
            Create an Account
          </h1>
          <p className="text-muted-foreground text-lg">
            Join WioCare to manage your health easily
          </p>
        </div>

        <Suspense
          fallback={
            <div className="flex justify-center mt-8">
              <Skeleton className="w-full max-w-md h-137.5 rounded-xl" />
            </div>
          }
        >
          <RegisterSection />
        </Suspense>
      </div>
    </section>
  );
}
