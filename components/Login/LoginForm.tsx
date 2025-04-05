"use client";

import { useState } from "react";
import Button from "../common/Button/Button";
import Input from "../common/Input/Input";
import PasswordToggleBtn from "../PasswordToggleBtn/PasswordToggleBtn";

export default function LoginForm() {
  const [isVisiblePassword, setIsVisiblePassword] = useState(false);
  const passwordType = isVisiblePassword ? "text" : "password";
  return (
    <form className="w-full flex flex-col gap-6">
      <Input
        id="email"
        label="이메일"
        name="email"
        type="email"
        placeholder="이메일을 입력해주세요"
        height={56}
        required
      />
      <Input
        id="password"
        label="비밀번호"
        name="password"
        type={passwordType}
        placeholder="비밀번호를 입력해주세요"
        height={56}
        required
        rightSlot={
          <PasswordToggleBtn
            isVisible={isVisiblePassword}
            onClick={() => setIsVisiblePassword((prev) => !prev)}
          />
        }
      />
      <Button fullWidth fontSize="20" paddingY={16}>
        로그인
      </Button>
    </form>
  );
}
