import {
  isValidateEmail,
  isValidateNicknameLimitLength,
  isValidatePasswordLength,
  isValidatePassword,
  isValidateEqualPassword,
} from "@/utils/authValidate";
import { SIGNUP_MESSAGE } from "@/constants/message";
import { SignupState, SignupType } from "./useSignup";

export const signupValidate = (formData: SignupType): SignupState | null => {
  const { email, nickname, password, checkPassword } = formData;

  if (!isValidateEmail(email)) {
    return {
      success: false,
      field: "email",
      message: SIGNUP_MESSAGE.EMAIL,
    };
  }

  if (!isValidateNicknameLimitLength(nickname)) {
    return {
      success: false,
      field: "nickname",
      message: SIGNUP_MESSAGE.NICKNAME,
    };
  }

  if (!isValidatePasswordLength(password)) {
    return {
      success: false,
      field: "password",
      message: SIGNUP_MESSAGE.PASSWORD_LENGTH,
    };
  }

  if (!isValidatePassword(password)) {
    return {
      success: false,
      field: "password",
      message: SIGNUP_MESSAGE.PASSWORD_VALID,
    };
  }

  if (!isValidateEqualPassword(password, checkPassword)) {
    return {
      success: false,
      field: "checkPassword",
      message: SIGNUP_MESSAGE.CHECK_PASSWORD,
    };
  }

  return null;
};
