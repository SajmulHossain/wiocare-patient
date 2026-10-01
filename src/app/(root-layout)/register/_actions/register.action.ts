"use server";

import { authFetch } from "@/lib";
import type { RegisterFormValues } from "../_schema/register.schema";
import { redirect } from "next/navigation";
import { catchRedirectError } from "@/lib";
import { phoneZodSchema } from "@/zod-schema";

export const register = async (data: RegisterFormValues) => {
  try {
    const res = await authFetch.post("/auth/register", {
      body: JSON.stringify(data),
    });

    const result = await res.json();

    if (!res.ok) {
      throw new Error(result.message);
    }

    if (result.success) {
      const isPhoneNumber = phoneZodSchema.safeParse(data.identifier).success;

      if (isPhoneNumber) {
        redirect(`/verify/phone?phone=${encodeURIComponent(data.identifier)}`);
      } else {
        redirect(`/verify/email?email=${encodeURIComponent(data.identifier)}`);
      }
    }

    return {
      success: true,
      message: result.message || "Registered successfully!",
      data: result.data,
    };
  } catch (error) {
    catchRedirectError(error);
    return {
      success: false,
      message:
        (error instanceof Error && error.message) ||
        "An unexpected error occurred",
    };
  }
};
