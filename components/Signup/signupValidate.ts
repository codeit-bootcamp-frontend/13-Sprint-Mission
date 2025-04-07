import {
  isValidateEmail,
  isValidateNicknameLimitLength,
  isValidatePasswordLength,
  isValidatePassword,
  isValidateEqualPassword,
} from "@/utils/authValidate";
import { ERROR_MESSAGE } from "@/constants/message";
import { ResponseState, SignupType } from "./useSignup";

const signupValidate = (formData: SignupType): ResponseState | null => {
  const { email, nickname, password, checkPassword } = formData;

  if (!isValidateEmail(email)) {
    return {
      success: false,
      field: "email",
      message: ERROR_MESSAGE.EMAIL,
    };
  }

  if (!isValidateNicknameLimitLength(nickname)) {
    return {
      success: false,
      field: "nickname",
      message: ERROR_MESSAGE.NICKNAME,
    };
  }

  if (!isValidatePasswordLength(password)) {
    return {
      success: false,
      field: "password",
      message: ERROR_MESSAGE.PASSWORD_LENGTH,
    };
  }

  if (!isValidatePassword(password)) {
    return {
      success: false,
      field: "password",
      message: ERROR_MESSAGE.PASSWORD_VALID,
    };
  }

  if (!isValidateEqualPassword(password, checkPassword)) {
    return {
      success: false,
      field: "checkPassword",
      message: ERROR_MESSAGE.CHECK_PASSWORD,
    };
  }

  return null;
};

export default signupValidate;
