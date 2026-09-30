"use server";

import { authFetch } from "@/lib/custom-fetch";
import type { RegisterFormValues } from "../_schema/register.schema";
import { setCookies } from "@/lib/cookie";

export const register = async (data: RegisterFormValues) => {
  try {
    const res = await authFetch.post("/auth/register", {
      body: JSON.stringify(data),
    });

    const result = await res.json();

    if (!res.ok) {
      return {
        success: false,
        message: result.message || "Failed to register",
      };
    }

    // Parse and set cookies from the response headers
    const setCookieHeader = res.headers.getSetCookie();
    if (setCookieHeader && setCookieHeader.length > 0) {
      await setCookies(setCookieHeader);
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
