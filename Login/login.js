document.addEventListener("DOMContentLoaded", function () {
  const emailInput = document.getElementById("email");
  const emailInputBorder = document.getElementById("email_input");
  const emailError = document.getElementById("email_error");
  const passwordInput = document.getElementById("password");
  const passwordInputBorder = document.getElementById("password_input");
  const passwordError = document.getElementById("password_error");
  const loginButton = document.querySelector(".btn_login2");
  const togglePasswordIcon = document.querySelector(".input_icon");

  /* 비밀번호 보이기 */
  togglePasswordIcon.addEventListener("click", function () {
    if (passwordInput.type === "password") {
      passwordInput.type = "text"; // 비밀번호 보이기
      togglePasswordIcon.src = "../img/login/btn_hidepw.svg";
    } else {
      passwordInput.type = "password"; // 비밀번호 가리기
      togglePasswordIcon.src = "../img/login/btn_showpw.svg";
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
    if (!emailInput.value) {
      emailError.textContent = "이메일을 입력해주세요.";
      emailError.style.display = "block";
      emailInputBorder.classList.add("error-border");
    } else if (!validateEmail(emailInput.value)) {
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

  /* 로그인 버튼 활성화 */
  loginButton.addEventListener("click", function (event) {
    if (!loginButton.classList.contains("active")) {
      event.preventDefault(); // 비활성화 상태 클릭 방지
    } else {
      window.location.href = "/items";
    }
  });

  validateInputs(); // 페이지 로드 시 초기 상태 체크
});
