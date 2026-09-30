import { LoginForm } from "../_components/login-form";
import { AuthPageTransition } from "@/components/shared/auth-page-transition";

export const LoginSection = () => {
  return (
    <div className="w-full flex justify-center mt-8 overflow-hidden">
      <AuthPageTransition direction="left">
        <div className="w-full max-w-md">
          <LoginForm />
        </div>
      </AuthPageTransition>
    </div>
  );
};
