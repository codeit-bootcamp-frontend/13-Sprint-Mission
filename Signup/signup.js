document.addEventListener("DOMContentLoaded", function () {
  const emailInput = document.getElementById("email");
  const emailInputBorder = document.getElementById("email_input");
  const emailError = document.getElementById("email_error");

  const nameInput = document.getElementById("name");
  const nameInputBorder = document.getElementById("name_input");
  const nameError = document.getElementById("name_error");

  const passwordInput = document.getElementById("passwd");
  const passwordInputBorder = document.getElementById("password_input");
  const passwordError = document.getElementById("passwd_error");

  const checkPasswordInput = document.getElementById("checkPw");
  const checkPasswordInputBorder = document.getElementById("checkpw_input");
  const checkPasswordError = document.getElementById("checkPasswd_error");

  const pwIcon = document.getElementById("pwicon");
  const checkPwIcon = document.getElementById("checkpwicon");

  const signupButton = document.getElementById("checkPasswd_error");

  /* 비밀번호 보이기 */
  pwIcon.addEventListener("click", function () {
    if (passwordInput.type === "password") {
      passwordInput.type = "text"; // 비밀번호 보이기
      pwIcon.src = "../img/login/btn_hidepw.svg";
    } else {
      passwordInput.type = "password"; // 비밀번호 가리기
      pwIcon.src = "../img/login/btn_showpw.svg";
    }
  });

  /* 비밀번호 확인 보이기 */
  checkPwIcon.addEventListener("click", function () {
    if (checkPasswordInput.type === "password") {
      checkPasswordInput.type = "text"; // 비밀번호 보이기
      checkPwIcon.src = "../img/login/btn_hidepw.svg";
    } else {
      checkPasswordInput.type = "password"; // 비밀번호 가리기
      checkPwIcon.src = "../img/login/btn_showpw.svg";
    }
  });

  /* 이메일 유효성 */
  function validateEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  }

  /* 비밀번호 유효성 */
  function validateInputs() {
    const isEmailValid = emailInput.value && validateEmail(emailInput.value);
    const isPasswordValid =
      passwordInput.value && passwordInput.value.length >= 8;
    const isFormValid = isEmailValid && isPasswordValid;

    if (isFormValid) {
      loginButton.classList.add("active");
      loginButton.disabled = false;
    } else {
      loginButton.classList.remove("active");
      loginButton.disabled = true;
    }
  }

  /* 이메일 에러메세지 */
  function checkEmail() {
    if (!validateEmail(emailInput.value)) {
      emailError.textContent = "잘못된 이메일 형식입니다.";
      emailError.style.display = "block";
      emailInputBorder.classList.add("error-border"); // input 오류
    } else {
      emailError.style.display = "none";
      emailInputBorder.classList.remove("error-border"); // input 오류 제거
      emailInputBorder.classList.add("success-border");
    }
    validateInputs();
  }

  /* 비밀번호 에러메세지 */
  function checkPassword() {
    if (passwordInput.value.length < 8) {
      passwordError.textContent = "비밀번호를 8자 이상 입력해주세요.";
      passwordError.style.display = "block";
      passwordInputBorder.classList.add("error-border");
    } else {
      passwordError.style.display = "none";
      passwordInputBorder.classList.remove("error-border");
      passwordInputBorder.classList.add("success-border");
    }
    validateInputs();
  }

  emailInput.addEventListener("input", checkEmail);
  passwordInput.addEventListener("input", checkPassword);

  validateInputs(); // 페이지 로드 시 초기 상태 체크
});
