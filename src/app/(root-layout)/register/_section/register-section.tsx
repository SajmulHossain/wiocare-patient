import { RegisterForm } from "../_components/register-form";
import { AuthPageTransition } from "@/components/shared/auth-page-transition";

export const RegisterSection = () => {
  return (
    <div className="w-full flex justify-center mt-8 overflow-hidden">
      <AuthPageTransition direction="right">
        <div className="w-full max-w-md">
          <RegisterForm />
        </div>
      </AuthPageTransition>
    </div>
  );
};
