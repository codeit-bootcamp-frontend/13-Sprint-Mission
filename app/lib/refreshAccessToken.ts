import { cookies } from "next/headers";

export const refreshAccessToken = async () => {
  const cookie = await cookies();
  const refreshToken = cookie.get("refreshToken")?.value;

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/auth/refresh-token`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ refreshToken }),
    },
  );

  const { accessToken } = await response.json();

  if (typeof window === undefined) {
    cookie.set("accessToken", accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
    });
  }

  return accessToken;
};
