import {
  isValidateEmail,
  isValidateNicknameLimitLength,
  isValidatePasswordLength,
  isValidatePassword,
  isValidateEqualPassword,
} from "@/utils/authValidate";
import { LoginType } from "./useLogin";
import { ResponseState } from "../Signup/useSignup";
import { ERROR_MESSAGE } from "@/constants/message";

const loginValidate = (formData: LoginType): ResponseState | null => {
  const { email, password } = formData;

  if (!isValidateEmail(email)) {
    return {
      success: false,
      field: "email",
      message: ERROR_MESSAGE.EMAIL,
    };
  }

  if (!isValidatePasswordLength(password)) {
    return {
      success: false,
      field: "password",
      message: ERROR_MESSAGE.PASSWORD_LENGTH,
    };
  }

  return null;
};

export default loginValidate;
