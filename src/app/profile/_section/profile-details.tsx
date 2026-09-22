"use client";

import { useState } from "react";
import { useForm } from "@tanstack/react-form";
import type { Gender, IUser } from "@/types";
import {
  type ProfileFormValues,
  profileSchema,
} from "../_schema/profile.schema";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Field, FieldLabel, FieldError } from "@/components/ui/field";

import {
  RiMailLine,
  RiPhoneLine,
  RiCalendar2Line,
  RiUserSmileLine,
  RiShieldCheckLine,
  RiLoader4Line,
  RiSave3Line,
} from "@remixicon/react";
import { toast } from "sonner";

export const ProfileDetails = ({ user }: { user: IUser }) => {
  const [isSaving, setIsSaving] = useState(false);

  // Initialize TanStack form with Standard Schema validation (Zod)
  const form = useForm({
    defaultValues: {
      email: user.email || "",
      phoneNumber: user.phoneNumber || "",
      dob: user.dob || "",
      gender: user.gender || undefined,
    } as ProfileFormValues,
    validators: {
      onChangeAsyncDebounceMs: 1000,
      onChange: profileSchema,
    },
    onSubmit: async ({ value }) => {
      setIsSaving(true);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      toast.success("Profile saved successfully!");
      console.log(value);
      setIsSaving(false);
    },
  });

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full px-4 md:px-8 mb-8">
      {/* Personal Information Form Card */}
      <Card className="shadow-sm border-zinc-200 dark:border-zinc-800 bg-card/50 backdrop-blur-sm h-full flex flex-col">
        <CardHeader className="pb-4 border-b border-border/50 mb-4">
          <CardTitle className="text-lg font-semibold tracking-tight">
            Personal Information
          </CardTitle>
        </CardHeader>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            e.stopPropagation();
            form.handleSubmit();
          }}
          className="flex flex-col flex-1"
        >
          <CardContent className="grid gap-6 flex-1">
            {/* Email */}
            <form.Field
              name="email"
              children={(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid;
                return (
                  <Field data-invalid={isInvalid}>
                    <FieldLabel
                      htmlFor={field.name}
                      className="flex items-center gap-2 text-muted-foreground font-medium"
                    >
                      <RiMailLine className="h-4 w-4" />
                      Email Address
                    </FieldLabel>
                    <Input
                      id={field.name}
                      name={field.name}
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                      placeholder="Enter your email"
                      className="bg-background/50 focus-visible:ring-primary/50"
                      aria-invalid={isInvalid}
                    />
                    {isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
                  </Field>
                );
              }}
            />

            {/* Phone */}
            <form.Field
              name="phoneNumber"
              children={(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid;
                return (
                  <Field data-invalid={isInvalid}>
                    <FieldLabel
                      htmlFor={field.name}
                      className="flex items-center gap-2 text-muted-foreground font-medium"
                    >
                      <RiPhoneLine className="h-4 w-4" />
                      Phone Number
                    </FieldLabel>
                    <Input
                      id={field.name}
                      name={field.name}
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                      placeholder="+1234567890"
                      className="bg-background/50 focus-visible:ring-primary/50"
                      aria-invalid={isInvalid}
                    />
                    {isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
                  </Field>
                );
              }}
            />

            {/* Date of Birth */}
            <form.Field
              name="dob"
              children={(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid;
                return (
                  <Field data-invalid={isInvalid}>
                    <FieldLabel
                      htmlFor={field.name}
                      className="flex items-center gap-2 text-muted-foreground font-medium"
                    >
                      <RiCalendar2Line className="h-4 w-4" />
                      Date of Birth
                    </FieldLabel>
                    <Input
                      id={field.name}
                      name={field.name}
                      type="date"
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                      className="bg-background/50 focus-visible:ring-primary/50"
                      aria-invalid={isInvalid}
                    />
                    {isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
                  </Field>
                );
              }}
            />

            {/* Gender */}
            <form.Field
              name="gender"
              children={(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid;
                return (
                  <Field data-invalid={isInvalid}>
                    <FieldLabel
                      htmlFor={field.name}
                      className="flex items-center gap-2 text-muted-foreground font-medium"
                    >
                      <RiUserSmileLine className="h-4 w-4" />
                      Gender
                    </FieldLabel>
                    <Select
                      name={field.name}
                      value={field.state.value?.toString() || undefined}
                      onValueChange={(val) => field.handleChange(val as Gender)}
                    >
                      <SelectTrigger
                        id={field.name}
                        onBlur={field.handleBlur}
                        className="bg-background/50 focus:ring-primary/50"
                        aria-invalid={isInvalid}
                      >
                        <SelectValue placeholder="Select your gender" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="MALE">Male</SelectItem>
                        <SelectItem value="FEMALE">Female</SelectItem>
                        <SelectItem value="OTHER">Other</SelectItem>
                      </SelectContent>
                    </Select>
                    {isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
                  </Field>
                );
              }}
            />
          </CardContent>

          <CardFooter className="border-t border-border/50 pt-6 mt-auto bg-muted/20">
            <form.Subscribe
              selector={(state) => [state.canSubmit, state.isSubmitting]}
              children={([canSubmit, isSubmitting]) => (
                <Button
                  type="submit"
                  disabled={!canSubmit || isSaving || isSubmitting}
                  className="w-full sm:w-auto gap-2 rounded-full"
                >
                  {isSaving || isSubmitting ? (
                    <RiLoader4Line className="h-4 w-4 animate-spin" />
                  ) : (
                    <RiSave3Line className="h-4 w-4" />
                  )}
                  Save Changes
                </Button>
              )}
            />
          </CardFooter>
        </form>
      </Card>

      {/* Account Status Card */}
      <Card className="shadow-sm border-zinc-200 dark:border-zinc-800 bg-card/50 backdrop-blur-sm flex flex-col items-center justify-center min-h-75 text-center p-8">
        <div className="p-5 rounded-full bg-primary/10 mb-6 border border-primary/20 shadow-inner">
          <RiShieldCheckLine className="h-10 w-10 text-primary" />
        </div>
        <h3 className="font-semibold text-xl mb-3 tracking-tight">
          Account Verified
        </h3>
        <p className="text-sm text-muted-foreground mb-6 leading-relaxed max-w-sm">
          Your WioCare account is fully secured and verified. Your data is
          protected with industry-standard encryption protocols.
        </p>
      </Card>
    </section>
  );
};
