const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const nicknameInput = document.querySelector("#nickname");
const checkPasswordInput = document.querySelector("#checkPassword");
const emailError = document.querySelector(".email.error");
const passwordError = document.querySelector(".password.error");
const checkPasswordError = document.querySelector(".checkPassword.error");
const nicknameError = document.querySelector(".nickname.error");
const loginBtn = document.querySelector(".login-btn");
const emailInputWrapper = document.querySelector(".input-wrapper.email");
const passwordInputWrapper = document.querySelector(".input-wrapper.password");
const nicknameInputWrapper = document.querySelector(".input-wrapper.nickname");
const checkPasswordInputWrapper = document.querySelector(
  ".input-wrapper.checkPassword"
);
const ENTER_EMAIL = "이메일을 입력해주세요.";
const ENTER_NICKNAME = "닉네임을 입력해주세요.";
const ENTER_PASSWORD = "비밀번호를 입력해주세요.";
const WRONG_CHECK_PASSWORD = "비밀번호가 일치하지 않습니다.";
const WRONG_EMAIL = "잘못된 이메일 형식입니다";
const PASSWORD_NEED_EIGHT_WORDS = "비밀번호를 8자 이상 입력해주세요.";
const NO_ERROR_MESSAGE = "";

const toggleLoginButton = () => {
  const isEmailValid =
    emailInput.value && emailError.innerHTML === NO_ERROR_MESSAGE;
  const isPasswordValid =
    passwordInput.value && passwordError.innerHTML === NO_ERROR_MESSAGE;
  const isNicknameValid =
    nicknameInput.value && nicknameError.innerHTML === NO_ERROR_MESSAGE;
  const isCheckPasswordValid =
    checkPasswordInput.value &&
    checkPasswordError.innerHTML === NO_ERROR_MESSAGE;

  if (
    isEmailValid &&
    isPasswordValid &&
    isNicknameValid &&
    isCheckPasswordValid
  ) {
    loginBtn.classList.remove("disabled");
    loginBtn.disabled = false;
  } else {
    loginBtn.classList.add("disabled");
    loginBtn.disabled = true;
  }
};
const emailValid = () => {
  if (!emailInput.value) {
    emailError.innerHTML = ENTER_EMAIL;
    emailInputWrapper.style.border = "3px solid #F74747";
  }
  if (emailInput.value && !emailInput.value.includes("@")) {
    emailError.innerHTML = WRONG_EMAIL;
    emailInputWrapper.style.border = "3px solid #F74747";
  }
  if (emailInput.value && emailInput.value.includes("@")) {
    emailError.innerHTML = NO_ERROR_MESSAGE;
    emailInputWrapper.style.border = "none";
  }
  toggleLoginButton();
};
const passwordValid = () => {
  if (!passwordInput.value) {
    passwordError.innerHTML = ENTER_PASSWORD;
    passwordInputWrapper.style.border = "3px solid #F74747";
  }
  if (passwordInput.value && passwordInput.value.length < 8) {
    passwordError.innerHTML = PASSWORD_NEED_EIGHT_WORDS;
    passwordInputWrapper.style.border = "3px solid #F74747";
  }
  if (passwordInput.value && passwordInput.value.length >= 8) {
    passwordError.innerHTML = NO_ERROR_MESSAGE;
    passwordInputWrapper.style.border = "none";
  }
  toggleLoginButton();
};
const nicknameValid = () => {
  if (!nicknameInput.value) {
    nicknameError.innerHTML = ENTER_NICKNAME;
    nicknameInputWrapper.style.border = "3px solid #F74747";
  } else {
    nicknameError.innerHTML = NO_ERROR_MESSAGE;
    nicknameInputWrapper.style.border = "none";
  }

  toggleLoginButton();
};

const checkPasswordValid = () => {
  if (passwordInput.value !== checkPasswordInput.value) {
    checkPasswordError.innerHTML = WRONG_CHECK_PASSWORD;
    checkPasswordInputWrapper.style.border = "3px solid #F74747";
  } else {
    checkPasswordError.innerHTML = NO_ERROR_MESSAGE;
    checkPasswordInputWrapper.style.border = "none";
  }

  toggleLoginButton();
};

emailInput.addEventListener("blur", emailValid);
passwordInput.addEventListener("blur", passwordValid);
nicknameInput.addEventListener("blur", nicknameValid);
checkPasswordInput.addEventListener("blur", checkPasswordValid);
