const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const emailError = document.querySelector(".email.error");
const passwordError = document.querySelector(".password.error");
const loginBtn = document.querySelector(".login-btn");
const emailInputWrapper = document.querySelector(".input-wrapper.email");
const passwordInputWrapper = document.querySelector(".input-wrapper.password");
const ENTER_EMAIL = "이메일을 입력해주세요.";
const ENTER_PASSWORD = "비밀번호를 입력해주세요.";
const WRONG_EMAIL = "잘못된 이메일 형식입니다";
const PASSWORD_NEED_EIGHT_WORDS = "비밀번호를 8자 이상 입력해주세요.";
const NO_ERROR_MESSAGE = "";

const toggleLoginButton = () => {
  const isEmailValid =
    emailInput.value && emailError.innerHTML === NO_ERROR_MESSAGE;
  const isPasswordValid =
    passwordInput.value && passwordError.innerHTML === NO_ERROR_MESSAGE;

  if (isEmailValid && isPasswordValid) {
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
    console.log(passwordInput.value.length);
    passwordError.innerHTML = PASSWORD_NEED_EIGHT_WORDS;
    passwordInputWrapper.style.border = "3px solid #F74747";
  }
  if (passwordInput.value && passwordInput.value.length >= 8) {
    passwordError.innerHTML = NO_ERROR_MESSAGE;
    passwordInputWrapper.style.border = "none";
  }
  toggleLoginButton();
};

emailInput.addEventListener("blur", emailValid);
passwordInput.addEventListener("blur", passwordValid);
