"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { OtpVerification } from "@/components/shared/otp-verification";
import { verifyEmail, sendVerificationEmail } from "@/actions/verify.action";

export const EmailVerifySection = ({ email }: { email: string }) => {
  const router = useRouter();
  const [_isPending, startTransition] = useTransition();

  const handleVerify = async (otp: string) => {
    if (!email) {
      toast.error("Email is missing. Please log in again.");
      router.push("/login");
      return;
    }

    const toastId = toast.loading("Verifying your email...");
    startTransition(async () => {
      const result = await verifyEmail({ email, otp });
      if (result.success) {
        toast.success(result.message, { id: toastId });
        router.push("/dashboard");
      } else {
        toast.error(result.message, { id: toastId });
      }
    });
  };

  const handleResend = async () => {
    if (!email) {
      toast.error("Email is missing. Please log in again.");
      router.push("/login");
      return;
    }

    const toastId = toast.loading("Sending new OTP...");
    startTransition(async () => {
      const result = await sendVerificationEmail({ email });
      if (result.success) {
        toast.success(result.message, { id: toastId });
      } else {
        toast.error(result.message, { id: toastId });
      }
    });
  };

  return (
    <div className="flex min-h-[calc(100vh-200px)] items-center justify-center py-10">
      <OtpVerification
        title="Verify Email"
        description={
          email
            ? `Enter the 6-digit code sent to ${email}`
            : "Enter the 6-digit code sent to your email address."
        }
        length={6}
        onVerify={handleVerify}
        onResend={handleResend}
        backHref="/login"
        backText="Back to Login"
      />
    </div>
  );
};
