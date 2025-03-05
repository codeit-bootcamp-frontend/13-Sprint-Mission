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

  const signupButton = document.querySelector(".btn_signup");

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

  /* 버튼 활성화 조건 */
  function validateInputs() {
    const isEmailValid = emailInput.value && validateEmail(emailInput.value);
    const isPasswordValid =
      passwordInput.value && passwordInput.value.length >= 8;
    const isNameValid = nameInput.value.trim().length > 0;
    const isMatchValid = passwdMatch();
    const isFormValid =
      isEmailValid && isPasswordValid && isNameValid && isMatchValid;

    if (isFormValid) {
      signupButton.classList.add("active");
      signupButton.disabled = false;
    } else {
      signupButton.classList.remove("active");
      signupButton.disabled = true;
    }
  }

  /* 회원가입 버튼 활성화 */
  signupButton.addEventListener("click", function (event) {
    if (!signupButton.classList.contains("active")) {
      event.preventDefault();
    } else {
      window.location.href = "/signin";
    }
  });

  /* 이메일 에러메세지 */
  function checkEmail() {
    if (!emailInput.value) {
      emailError.textContent = "이메일을 입력해주세요.";
      emailError.style.display = "block";
      emailInputBorder.classList.add("error-border");
    } else if (!validateEmail(emailInput.value)) {
      emailError.textContent = "잘못된 이메일 형식입니다.";
      emailError.style.display = "block";
      emailInputBorder.classList.add("error-border");
    } else {
      emailError.style.display = "none";
      emailInputBorder.classList.remove("error-border");
      emailInputBorder.classList.add("success-border");
    }
    validateInputs();
  }

  /* 닉네임 에러 메세지 */
  function checkName() {
    if (!nameInput.value) {
      nameError.textContent = "닉네임을 입력해주세요.";
      nameError.style.display = "block";
      nameInputBorder.classList.add("error-border");
    } else {
      nameError.style.display = "none";
      nameInputBorder.classList.remove("error-border");
      nameInputBorder.classList.add("success-border");
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

  /* 비밀번호 확인 input  */
  function checkPassword2() {
    if (checkPasswordInput.value.length < 8) {
      checkPasswordInputBorder.classList.add("error-border");
    } else {
      checkPasswordInputBorder.classList.remove("error-border");
      checkPasswordInputBorder.classList.add("success-border");
    }
    validateInputs();
  }

  /* 비밀번호, 비밀번호 확인 일치 검사 */
  function passwdMatch() {
    const ispasswdmatch = false;
    if (checkPasswordInput.value === "") {
      checkPasswordError.style.display = "none";
      checkPasswordInputBorder.classList.remove("error-border");
      return false;
    }
    const isPasswdMatch = passwordInput.value === checkPasswordInput.value;

    if (!isPasswdMatch) {
      checkPasswordError.textContent = "비밀번호가 일치하지 않습니다.";
      checkPasswordError.style.display = "block";
      checkPasswordInputBorder.classList.add("error-border");
      return false;
    } else {
      checkPasswordError.style.display = "none";
      checkPasswordInputBorder.classList.remove("error-border");
      return true;
    }

    validateInputs();
  }

  emailInput.addEventListener("input", checkEmail);
  passwordInput.addEventListener("input", checkPassword);
  nameInput.addEventListener("input", checkName);
  checkPasswordInput.addEventListener("input", checkPassword2);
  checkPasswordInput.addEventListener("input", passwdMatch);

  validateInputs(); // 페이지 로드 시 초기 상태 체크
});
