import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST() {
  const cookie = await cookies();
  const refreshToken = cookie.get("refreshToken")?.value;

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/auth/refresh-token`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ refreshToken }),
    },
  );

  const { accessToken } = await response.json();

  cookie.set("accessToken", accessToken, {
    httpOnly: false,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
  });

  return NextResponse.json({ accessToken });
}
