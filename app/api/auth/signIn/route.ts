import { apiServer } from "@/lib/apiServer";
import { NextResponse } from "next/server";

export interface User {
  id: number;
  email: string;
  image: string | null;
  nickname: string;
  updatedAt: string;
  createdAt: string;
}

interface LoginResponse {
  accessToken: string;
  refreshToken: string;
  user: User;
}

export async function POST(req: Request) {
  const { email, password } = await req.json();

  const response = await apiServer.post<LoginResponse>("/auth/signIn", {
    email,
    password,
  });

  const status = response.status;

  if (status === 200) {
    const accessToken = response.data.accessToken;
    const res = NextResponse.json({ response }, { status: 200 });

    res.cookies.set("accessToken", accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
    });

    return res;
  } else {
    return NextResponse.json({ data: response }, { status: status });
  }
}
