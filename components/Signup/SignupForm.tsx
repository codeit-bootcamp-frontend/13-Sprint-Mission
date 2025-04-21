"use client";

import { useState } from "react";
import Button from "../common/Button/Button";
import FormField from "../common/FormField/FormField";
import PasswordToggleBtn from "../PasswordToggleBtn/PasswordToggleBtn";
import useSignup from "./useSignup";

const SIGNUP_FORM_FIELDS = [
  {
    label: "이메일",
    name: "email",
    type: "text",
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
] as const;

export default function SignupForm() {
  const {
    formData,
    state,
    isPasswordVisible,
    isPending,
    isFormComplete,
    handleFormChange,
    handlePreventSpace,
    toggleVisiblePassword,
    handleSignupSubmit,
  } = useSignup();
  return (
    <form onSubmit={handleSignupSubmit} className="flex flex-col gap-6">
      {SIGNUP_FORM_FIELDS.map((field) => {
        const { label, name, type, placeholder } = field;
        const isPassword = isPasswordVisible[name];
        const isPasswordField = ["password", "checkPassword"].includes(name);
        const passwordType = isPassword ? "text" : "password";
        const isInputFieldValid = state?.field === name;

        return (
          <FormField
            key={name}
            label={label}
            name={name}
            type={isPassword ? passwordType : type}
            value={formData[name]}
            isValid={!isInputFieldValid}
            errorMessage={state.message}
            onChange={handleFormChange}
            onKeyDown={handlePreventSpace}
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
      <Button
        disabled={!isFormComplete}
        type="submit"
        fullWidth
        fontSize="20"
        paddingY={16}
      >
        {isPending ? "..." : "회원가입"}
      </Button>
    </form>
  );
}
