import { NextResponse } from "next/server";
import {
  isValidateEmail,
  isValidatePasswordLength,
  isValidateEqualPassword,
  isValidateNicknameLimitLength,
  isValidatePassword,
} from "@/utils/authValidate";

const SIGNUP_MESSAGE = {
  EMAIL: "이메일 형식으로 작성해 주세요.",
  NICKNAME: "닉네임은 10자 이하로 작성해 주세요.",
  PASSWORD_VALID: "비밀번호는 영문, 숫자로 작성해 주세요.",
  PASSWORD_LENGTH: "비밀번호는 8자 이상 입력해 주세요.",
  CHECK_PASSWORD: "비밀번호가 일치하지 않습니다.",
  DUPLICATE_EMAIL: "이미 사용 중인 이메일입니다.",
};

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

  if (status === 200) {
    return NextResponse.json(
      { success: true, data: response },
      { status: 201 }
    );
  }

  if (!isValidateEmail(email)) {
    return NextResponse.json(
      { status: false, field: "email", message: SIGNUP_MESSAGE.EMAIL },
      { status: 400 }
    );
  }

  if (!isValidateNicknameLimitLength(nickname)) {
    return NextResponse.json(
      { status: false, field: "nickname", message: SIGNUP_MESSAGE.NICKNAME },
      { status: 400 }
    );
  }

  if (!isValidatePasswordLength(password)) {
    return NextResponse.json(
      {
        status: false,
        field: "password",
        message: SIGNUP_MESSAGE.PASSWORD_LENGTH,
      },
      { status: 400 }
    );
  }

  if (!isValidatePassword(password)) {
    return NextResponse.json(
      {
        status: false,
        field: "password",
        message: SIGNUP_MESSAGE.PASSWORD_VALID,
      },
      { status: 400 }
    );
  }

  if (!isValidateEqualPassword(password, passwordConfirmation)) {
    return NextResponse.json(
      {
        status: false,
        field: "checkPassword",
        message: SIGNUP_MESSAGE.CHECK_PASSWORD,
      },
      { status: 400 }
    );
  }

  return NextResponse.json({ status: true });
}
