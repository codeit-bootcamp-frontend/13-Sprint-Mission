"use client";

import Button from "../common/Button/Button";
import FormField from "../common/FormField/FormField";
import PasswordToggleBtn from "../PasswordToggleBtn/PasswordToggleBtn";
import useLogin from "./useLogin";

export default function LoginForm() {
  const {
    formData,
    state,
    isPasswordVisible,
    isPending,
    isFormComplete,
    toggleVisiblePassword,
    handleFormChange,
    handleLoginSubmit,
  } = useLogin();

  const passwordType = isPasswordVisible ? "text" : "password";

  return (
    <form onSubmit={handleLoginSubmit} className="w-full flex flex-col gap-6">
      <FormField
        id="email"
        label="이메일"
        name="email"
        type="text"
        value={formData.email}
        isValid={!(state?.field === "email")}
        errorMessage={state.message}
        onChange={handleFormChange}
        placeholder="이메일을 입력해주세요"
        required
      />
      <FormField
        id="password"
        label="비밀번호"
        name="password"
        type={passwordType}
        value={formData.password}
        isValid={!(state?.field === "password")}
        errorMessage={state.message}
        onChange={handleFormChange}
        placeholder="비밀번호를 입력해주세요"
        required
        rightSlot={
          <PasswordToggleBtn
            isVisible={isPasswordVisible}
            onClick={toggleVisiblePassword}
          />
        }
      />
      <Button disabled={!isFormComplete} fullWidth fontSize="20" paddingY={16}>
        {isPending ? "..." : "로그인"}
      </Button>
    </form>
  );
}
