"use client";

import { useState } from "react";
import Button from "../common/Button/Button";
import FormField from "../common/FormField/FormField";
import PasswordToggleBtn from "../PasswordToggleBtn/PasswordToggleBtn";

const SIGNUP_FORM_FIELDS = [
  {
    label: "이메일",
    name: "email",
    type: "email",
    placeholder: "이메일을 입력해주세요",
  },
  {
    label: "닉네임",
    name: "nickname",
    type: "text",
    placeholder: "닉네임을 입력해주세요",
  },
  {
    label: "비밀번호",
    name: "password",
    type: "password",
    placeholder: "비밀번호를 입력해주세요",
  },
  {
    label: "비밀번호 확인",
    name: "checkPassword",
    type: "password",
    placeholder: "비밀번호를 다시 한 번 입력해주세요",
  },
];

export default function SignupForm() {
  const [isPasswordVisible, setIsPasswordVisible] = useState<
    Record<string, boolean>
  >({
    password: false,
    checkPassword: false,
  });

  const toggleVisiblePassword = (name: string) => {
    setIsPasswordVisible((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  return (
    <form className="flex flex-col gap-6">
      {SIGNUP_FORM_FIELDS.map((field) => {
        const { label, name, type, placeholder } = field;
        const isPassword = isPasswordVisible[name];
        const isPasswordField = ["password", "checkPassword"].includes(name);
        const passwordType = isPassword ? "text" : "password";

        return (
          <FormField
            key={name}
            label={label}
            name={name}
            type={isPassword ? passwordType : type}
            placeholder={placeholder}
            rightSlot={
              isPasswordField && (
                <PasswordToggleBtn
                  isVisible={isPassword}
                  onClick={() => toggleVisiblePassword(name)}
                />
              )
            }
          />
        );
      })}
      <Button fullWidth fontSize="20" paddingY={16}>
        회원가입
      </Button>
    </form>
  );
}
