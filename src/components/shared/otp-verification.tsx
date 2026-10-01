"use client";

import { useTransition, useState, useEffect } from "react";
import { useForm } from "@tanstack/react-form";
import { z } from "zod";
import Link from "next/link";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Field, FieldError } from "@/components/ui/field";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { RiLoader4Line } from "@remixicon/react";

interface OtpVerificationProps {
  title?: string;
  description?: string;
  length?: number;
  onVerify: (otp: string) => Promise<void> | void;
  onResend?: () => Promise<void> | void;
  backHref?: string;
  backText?: string;
}

export const OtpVerification = ({
  title = "Verify OTP",
  description = "Enter the OTP sent to you",
  length = 6,
  onVerify,
  onResend,
  backHref,
  backText = "Back to Login",
}: OtpVerificationProps) => {
  const [isVerifying, startTransition] = useTransition();
  const [isResending, startResendTransition] = useTransition();
  const [countdown, setCountdown] = useState(60);
  const [canResend, setCanResend] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (countdown > 0 && !canResend) {
      timer = setInterval(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);
    } else if (countdown === 0) {
      setCanResend(true);
    }
    return () => clearInterval(timer);
  }, [countdown, canResend]);

  const otpSchema = z.object({
    otp: z.string().length(length, `OTP must be exactly ${length} digits`),
  });

  const form = useForm({
    defaultValues: {
      otp: "",
    },
    validators: {
      onChange: otpSchema,
    },
    onSubmit: async ({ value }) => {
      startTransition(async () => {
        await onVerify(value.otp);
      });
    },
  });

  const handleResend = () => {
    if (onResend && canResend) {
      startResendTransition(async () => {
        await onResend();
        setCountdown(60);
        setCanResend(false);
      });
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto bg-card shadow-sm">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-bold">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          form.handleSubmit();
        }}
        className="flex flex-col"
      >
        <CardContent className="grid gap-6 justify-center">
          <form.Field
            name="otp"
            children={(field) => {
              const isInvalid =
                field.state.meta.isTouched && !field.state.meta.isValid;
              return (
                <Field
                  data-invalid={isInvalid}
                  className="items-center flex flex-col gap-2"
                >
                  <InputOTP
                    id={field.name}
                    name={field.name}
                    maxLength={length}
                    value={field.state.value}
                    onChange={(val) => field.handleChange(val)}
                    onBlur={field.handleBlur}
                    aria-invalid={isInvalid}
                  >
                    <InputOTPGroup>
                      {Array.from({ length }).map((_, index) => (
                        <InputOTPSlot key={index} index={index} />
                      ))}
                    </InputOTPGroup>
                  </InputOTP>
                  {isInvalid && <FieldError errors={field.state.meta.errors} />}
                </Field>
              );
            }}
          />

          <div className="flex flex-col gap-3 mt-2 w-full">
            <form.Subscribe
              selector={(state) => [state.canSubmit, state.isSubmitting]}
              children={([canSubmit, isSubmitting]) => (
                <Button
                  type="submit"
                  disabled={!canSubmit || isVerifying || isSubmitting}
                  className="w-full font-medium"
                >
                  {isVerifying || isSubmitting ? (
                    <RiLoader4Line className="h-5 w-5 animate-spin mr-2" />
                  ) : null}
                  Verify
                </Button>
              )}
            />
          </div>
        </CardContent>

        {(onResend || backHref) && (
          <CardFooter className="flex flex-col justify-center gap-3 pb-8 pt-2">
            {onResend && (
              <p className="text-sm text-muted-foreground text-center">
                Didn't receive the code?{" "}
                <button
                  type="button"
                  onClick={handleResend}
                  disabled={!canResend || isResending}
                  className="text-foreground font-medium hover:underline underline-offset-4 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isResending ? "Resending..." : canResend ? "Resend OTP" : `Resend in ${countdown}s`}
                </button>
              </p>
            )}
            {backHref && (
              <Link
                href={backHref}
                className="text-sm text-muted-foreground text-center hover:text-foreground hover:underline underline-offset-4"
              >
                {backText}
              </Link>
            )}
          </CardFooter>
        )}
      </form>
    </Card>
  );
};
