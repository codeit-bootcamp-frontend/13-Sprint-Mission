const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const PASSWORD_REGEX = /^(?=.*[a-zA-Z]).{8,}$/;

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

export const errorMessage = {
    email: {
        empty: "이메일을 입력해주세요",
        invalid: "잘못된 이메일 형식입니다",
    },
    password: {
        empty: "비밀번호를 입력해주세요",
        invalid: "비밀번호를 8자 이상 입력해주세요",
        notEqual: "비밀번호가 일치하지 않습니다",
    },
    nickname: "닉네임을 입력해주세요",
};
