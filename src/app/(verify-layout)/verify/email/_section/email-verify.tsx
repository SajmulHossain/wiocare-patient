"use client";

import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { OtpVerification } from "@/components/shared/otp-verification";

export const EmailVerifySection = () => {
  const router = useRouter();

  const handleVerify = async (otp: string) => {
    // TODO: Implement actual email verification API call here
    console.log("Verifying email OTP:", otp);
    
    // Simulating API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    toast.success("Email verified successfully!");
    router.push("/dashboard");
  };

  const handleResend = async () => {
    // TODO: Implement actual resend OTP API call here
    console.log("Resending email OTP");
    
    // Simulating API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    toast.success("A new OTP has been sent to your email.");
  };

  return (
    <div className="flex min-h-[calc(100vh-200px)] items-center justify-center py-10">
      <OtpVerification
        title="Verify Email"
        description="Enter the 6-digit code sent to your email address."
        length={6}
        onVerify={handleVerify}
        onResend={handleResend}
        backHref="/login"
        backText="Back to Login"
      />
    </div>
  );
};
