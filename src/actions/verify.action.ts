"use server";

import { setCookies } from "@/lib";
import { authFetch } from "@/lib";

export const sendVerificationEmail = async (data: { email: string }) => {
  try {
    const response = await authFetch.post("/auth/send-verification-email", {
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (!response.ok) {
      return {
        success: false,
        message: result.message || "Failed to send verification email",
      };
    }

    return {
      success: true,
      message: result.message || "Verification email sent successfully!",
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

export const verifyEmail = async (data: { email: string; otp: string }) => {
  try {
    const response = await authFetch.post("/auth/verify-email", {
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (!response.ok) {
      return {
        success: false,
        message: result.message || "Failed to verify email",
      };
    }

    // Parse and set cookies from the response headers
    const setCookieHeader = response.headers.getSetCookie();
    if (setCookieHeader && setCookieHeader.length > 0) {
      await setCookies(setCookieHeader);
    }

    return {
      success: true,
      message: result.message || "Email verified successfully!",
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
