export const validEmail = (email: string) => {
  const email_regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
  return email_regex.test(email);
};

export const validPassword = (password: string) => {
  return !(password.length < 8);
};

export const matchPassword = (
  password: string,
  passwordCheck: string
): boolean => {
  return password === passwordCheck;
};
