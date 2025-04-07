import { SIGNUP_MESSAGE } from "@/constants/message";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { email, nickname, password, passwordConfirmation } = await req.json();

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/auth/signUp`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        nickname,
        password,
        passwordConfirmation,
      }),
    }
  );

  const status = response.status;

  if (status === 400) {
    return NextResponse.json(
      {
        status: false,
        field: "nickname",
        message: SIGNUP_MESSAGE.DUPLICATE_NICKNAME,
      },
      { status: 400 }
    );
  }

  if (response.ok) {
    return NextResponse.json(
      { success: true, data: response },
      { status: 201 }
    );
  } else {
    return NextResponse.json(
      { success: false, data: response },
      { status: status }
    );
  }
}
