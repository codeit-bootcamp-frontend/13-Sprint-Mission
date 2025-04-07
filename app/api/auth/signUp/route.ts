import { SIGNUP_MESSAGE } from "@/constants/message";
import { apiServer } from "@/lib/apiServer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { email, nickname, password, passwordConfirmation } = await req.json();

  const response = await apiServer.post("/auth/signUp", {
    email,
    nickname,
    password,
    passwordConfirmation,
  });

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

  if (status === 200) {
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
