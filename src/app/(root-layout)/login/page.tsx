import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { LoginSection } from "./_section/login-section";

export default function LoginPage() {
  return (
    <section className="min-h-[80vh] flex flex-col items-center justify-center py-16">
      <div className="section w-full">
        <div className="text-center mb-6">
          <h1 className="text-4xl font-bold tracking-tight mb-2">
            Welcome Back
          </h1>
          <p className="text-muted-foreground text-lg">
            Sign in to access your WioCare account
          </p>
        </div>

        <Suspense
          fallback={
            <div className="flex justify-center mt-8">
              <Skeleton className="w-full max-w-md h-100 rounded-xl" />
            </div>
          }
        >
          <LoginSection />
        </Suspense>
      </div>
    </section>
  );
}
