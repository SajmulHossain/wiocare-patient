"use server";

// import cookie from "cookie";
import { cookies } from "next/headers";
import envConfig from "@/config/env.config";
import { verifyToken } from "./jwt";
import { parseCookie } from "cookie";

export const setCookies = async (cookieHeader: string[]) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let accessToken: any, refreshToken: any, betterAuthToken: any;

  if (cookieHeader && cookieHeader.length) {
    cookieHeader.forEach((cookies) => {
      const parsedCookie = parseCookie(cookies);

      if (parsedCookie.accessToken) {
        accessToken = parsedCookie as Record<string, string>;
      }

      if (parsedCookie.refreshToken) {
        refreshToken = parsedCookie as Record<string, string>;
      }

      if (parsedCookie["__Secure-cottonsworld.session_token"]) {
        betterAuthToken = parsedCookie as Record<string, string>;
      }
    });
  } else {
    throw new Error("Not authentication response from server!");
  }

  if (!accessToken || !refreshToken) {
    throw new Error("Login Failed. Try again!");
  }

  const nextCookie = await cookies();

  if (accessToken) {
    nextCookie.set("accessToken", accessToken.accessToken, {
      httpOnly: true,
      maxAge: parseInt(accessToken["Max-Age"]),
      expires: accessToken.Expires,
      secure: true,
      path: accessToken.Path || "/",
      sameSite: accessToken.SameSite || "none",
    });
  }

  if (refreshToken) {
    nextCookie.set("refreshToken", refreshToken.refreshToken, {
      httpOnly: true,
      maxAge: parseInt(refreshToken["Max-Age"]),
      expires: refreshToken.Expires,
      secure: true,
      path: refreshToken.Path || "/",
      sameSite: refreshToken.SameSite || "none",
    });

    if (betterAuthToken) {
      nextCookie.set(
        "__Secure-cottonsworld.session_token",
        betterAuthToken["__Secure-cottonsworld.session_token"],
        {
          httpOnly: true,
          maxAge: parseInt(betterAuthToken["Max-Age"]),
          expires: betterAuthToken.Expires,
          secure: true,
          path: betterAuthToken.Path || "/",
          sameSite: betterAuthToken.SameSite || "none",
        },
      );
    }
  }

  verifyToken(accessToken.accessToken, envConfig.jwt_access_token_secret);
};

export const deleteCookies = async () => {
  const cookieStore = await cookies();
  cookieStore.delete("accessToken");
  cookieStore.delete("refreshToken");
  cookieStore.delete({
    name: "__Secure-cottonsworld.session_token",
    secure: true,
    sameSite: "none",
    path: "/",
  });
  cookieStore.delete("user_state");
};

export const getCookies = async () => {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get("accessToken")?.value || null;
  const refreshToken = cookieStore.get("refreshToken")?.value || null;
  const betterAuthToken =
    cookieStore.get("__Secure-cottonsworld.session_token")?.value || null;
  return { accessToken, refreshToken, betterAuthToken };
};
