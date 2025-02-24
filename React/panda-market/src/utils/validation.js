export const validEmail = (email) => {
  const email_regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
  return email_regex.test(email);
};

export const validPassword = (password) => {
  return !(password.length < 8);
};

export const matchPassword = (password, passwordCheck) => {
  return password === passwordCheck;
};
