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
      field: "email",
      message: ERROR_MESSAGE.EMAIL,
    };
  }

  if (!isValidateNicknameLimitLength(nickname)) {
    return {
      field: "nickname",
      message: ERROR_MESSAGE.NICKNAME,
    };
  }

  if (!isValidatePasswordLength(password)) {
    return {
      field: "password",
      message: ERROR_MESSAGE.PASSWORD_LENGTH,
    };
  }

  if (!isValidatePassword(password)) {
    return {
      field: "password",
      message: ERROR_MESSAGE.PASSWORD_VALID,
    };
  }

  if (!isValidateEqualPassword(password, checkPassword)) {
    return {
      field: "checkPassword",
      message: ERROR_MESSAGE.CHECK_PASSWORD,
    };
  }

  return null;
};

export default signupValidate;
