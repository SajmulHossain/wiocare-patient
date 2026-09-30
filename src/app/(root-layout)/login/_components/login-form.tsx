"use client";

import { useTransition } from "react";
import { useForm } from "@tanstack/react-form";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { type LoginFormValues, loginSchema } from "../_schema/login.schema";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Field, FieldLabel, FieldError } from "@/components/ui/field";

import { RiLoader4Line } from "@remixicon/react";
import { toast } from "sonner";

import { loginAction } from "../_action/login.action";

export const LoginForm = () => {
  const [isSaving, startTransition] = useTransition();
  const router = useRouter();

  const form = useForm({
    defaultValues: {
      identifier: "",
      password: "",
    } as LoginFormValues,
    validators: {
      onChangeAsyncDebounceMs: 1000,
      onChange: loginSchema,
    },
    onSubmit: async ({ value }) => {
      startTransition(async () => {
        const result = await loginAction(value);
        if (result.success) {
          toast.success(result.message);
          router.push("/dashboard");
        } else {
          toast.error(result.message);
        }
      });
    },
  });

  return (
    <Card className="w-full bg-card shadow-sm">
      <CardHeader className="text-left">
        <CardTitle className="text-2xl font-bold">
          Login to your account
        </CardTitle>
        <CardDescription>
          Enter your credentials below to login to your account
        </CardDescription>
      </CardHeader>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          form.handleSubmit();
        }}
        className="flex flex-col"
      >
        <CardContent className="grid gap-6">
          <form.Field
            name="identifier"
            children={(field) => {
              const isInvalid =
                field.state.meta.isTouched && !field.state.meta.isValid;
              return (
                <Field data-invalid={isInvalid}>
                  <FieldLabel
                    htmlFor={field.name}
                    className="font-semibold text-sm"
                  >
                    Email or Phone Number
                  </FieldLabel>
                  <Input
                    id={field.name}
                    name={field.name}
                    type="text"
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                    placeholder="Enter email or phone number"
                    aria-invalid={isInvalid}
                  />
                  {isInvalid && <FieldError errors={field.state.meta.errors} />}
                </Field>
              );
            }}
          />

          <form.Field
            name="password"
            children={(field) => {
              const isInvalid =
                field.state.meta.isTouched && !field.state.meta.isValid;
              return (
                <Field data-invalid={isInvalid}>
                  <div className="flex items-center justify-between">
                    <FieldLabel
                      htmlFor={field.name}
                      className="font-semibold text-sm"
                    >
                      Password
                    </FieldLabel>
                    <Link
                      href="/forgot-password"
                      className="text-sm text-foreground/80 hover:text-foreground hover:underline underline-offset-4"
                    >
                      Forgot your password?
                    </Link>
                  </div>
                  <Input
                    id={field.name}
                    name={field.name}
                    type="password"
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                    aria-invalid={isInvalid}
                  />
                  {isInvalid && <FieldError errors={field.state.meta.errors} />}
                </Field>
              );
            }}
          />

          <div className="flex flex-col gap-3 mt-2">
            <form.Subscribe
              selector={(state) => [state.canSubmit, state.isSubmitting]}
              children={([canSubmit, isSubmitting]) => (
                <Button
                  type="submit"
                  disabled={!canSubmit || isSaving || isSubmitting}
                  className="w-full font-medium"
                >
                  {isSaving || isSubmitting ? (
                    <RiLoader4Line className="h-5 w-5 animate-spin mr-2" />
                  ) : null}
                  Login
                </Button>
              )}
            />

            <Button
              type="button"
              variant="outline"
              className="w-full font-medium"
            >
              Login with Google
            </Button>
          </div>
        </CardContent>

        <CardFooter className="flex justify-center pb-8 pt-2">
          <p className="text-sm text-muted-foreground text-center">
            Don't have an account?{" "}
            <Link
              href="/signup"
              className="text-foreground font-medium hover:underline underline-offset-4"
            >
              Sign up
            </Link>
          </p>
        </CardFooter>
      </form>
    </Card>
  );
};
