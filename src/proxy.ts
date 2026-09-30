import { type NextRequest, NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export function proxy(request: NextRequest) {
  const url = request.url;
  const requestCookie = request.cookies;
  const accessToken = requestCookie.get("accessToken")?.value;
  const session = requestCookie.get("better-auth.session")?.value;

  if (!accessToken && !session) {
    const loginUrl = new URL("/login", url);
    loginUrl.searchParams.set("redirect", url);

    return NextResponse.redirect(loginUrl);
  }
}

// Alternatively, you can use a default export:
// export default function proxy(request: NextRequest) { ... }

export const config = {
  matcher: "/dashboard/:path*",
};
