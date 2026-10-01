"use server";

import { authFetch } from "@/lib";
import { setCookies } from "@/lib";
import type { LoginFormValues } from "../_schema/login.schema";
import { Roles } from "@/types";
import { redirect } from "next/navigation";
import { sendVerificationEmail } from "@/actions/verify.action";
import { catchRedirectError } from "@/lib";

export const loginAction = async (data: LoginFormValues) => {
  try {
    const response = await authFetch.post("/auth/login", {
      body: JSON.stringify({ ...data, role: Roles.PATIENT }),
    });

    const result = await response.json();

    if (result.code === "EMAIL_NOT_VERIFIED") {
      await sendVerificationEmail({ email: data.identifier });
      redirect(`/verify/email?email=${encodeURIComponent(data.identifier)}`);
    }

    if (!response.ok) {
      return { success: false, message: result.message || "Failed to login" };
    }

    // Parse and set cookies from the response headers
    const setCookieHeader = response.headers.getSetCookie();
    if (setCookieHeader && setCookieHeader.length > 0) {
      await setCookies(setCookieHeader);
    }

    return {
      success: true,
      message: result.message || "Logged in successfully!",
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
