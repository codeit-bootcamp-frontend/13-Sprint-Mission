const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const PASSWORD_REGEX = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,20}$/;

export const isValidateEmail = (value: string) => {
  return EMAIL_REGEX.test(value);
};

export const isValidateNicknameLimitLength = (value: string) => {
  return value.length <= 10;
};

export const isValidatePasswordLength = (value: string) => value.length >= 8;

export const isValidatePassword = (value: string) => {
  return PASSWORD_REGEX.test(value);
};

export const isValidateEqualPassword = (
  password: string,
  checkPassword: string
) => {
  return password === checkPassword;
};
