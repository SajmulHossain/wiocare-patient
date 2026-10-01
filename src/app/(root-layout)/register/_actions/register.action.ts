"use server";

import { authFetch } from "@/lib/custom-fetch";
import type { RegisterFormValues } from "../_schema/register.schema";

export const register = async (data: RegisterFormValues) => {
  try {
    const res = await authFetch.post("/auth/register", {
      body: JSON.stringify(data),
    });

    const result = await res.json();

    if (!res.ok) {
      throw new Error(result.message);
    }

    return {
      success: true,
      message: result.message || "Registered successfully!",
      data: result.data,
    };
  } catch (error) {
    return {
      success: false,
      message:
        (error instanceof Error && error.message) ||
        "An unexpected error occurred",
    };
  }
};
