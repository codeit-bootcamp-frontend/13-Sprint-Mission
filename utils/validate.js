const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const PASSWORD_REGEX = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,}$/;

export const validateEmail = (value) => {
    return EMAIL_REGEX.test(value);
};

export const validatePassword = (value) => {
    return PASSWORD_REGEX.test(value);
};

export const validatePasswordCheck = (password1, password2) => {
    return password1 === password2;
};

export const validateEmpty = (value) => {
    return value.trim() !== "";
};
