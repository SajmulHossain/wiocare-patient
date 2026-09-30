import { SignupForm } from "../_components/signup-form";
import { AuthPageTransition } from "@/components/shared/auth-page-transition";

export const SignupSection = () => {
  return (
    <div className="w-full flex justify-center mt-8 overflow-hidden">
      <AuthPageTransition direction="right">
        <div className="w-full max-w-md">
          <SignupForm />
        </div>
      </AuthPageTransition>
    </div>
  );
};
