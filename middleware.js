import { NextResponse } from "next/server";

export function middleware(request) {
  //const auth = request.headers.get("authorization");
  const auth = true;
  if (!auth) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

export const config = {
  matcher: "/dashboard/:path*",
};
