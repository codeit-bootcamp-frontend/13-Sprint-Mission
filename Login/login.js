document.addEventListener("DOMContentLoaded", function () {
  const emailInput = document.getElementById("email");
  const emailError = document.getElementById("email_error");
  const passwordInput = document.getElementById("password");
  const passwordError = document.getElementById("password_error");
  const loginButton = document.querySelector(".btn_login2");

  function validateEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  }

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

  function checkEmail() {
    if (!validateEmail(emailInput.value)) {
      emailError.textContent = "잘못된 이메일 형식입니다.";
      emailError.style.display = "block";
      emailInput.classList.add("error-border");
    } else {
      emailError.style.display = "none";
      emailInput.classList.remove("error-border");
    }
    validateInputs();
  }

  function checkPassword() {
    if (passwordInput.value.length < 8) {
      passwordError.textContent = "비밀번호를 8자 이상 입력해주세요.";
      passwordError.style.display = "block";
    } else {
      passwordError.style.display = "none";
    }
    validateInputs();
  }

  emailInput.addEventListener("blur", checkEmail);
  passwordInput.addEventListener("blur", checkPassword);

  // 🎯 실시간 입력 감지 (input 이벤트 추가)
  emailInput.addEventListener("input", checkEmail);
  passwordInput.addEventListener("input", checkPassword);

  loginButton.addEventListener("click", function (event) {
    if (!loginButton.classList.contains("active")) {
      event.preventDefault(); // 비활성화 상태에서 클릭 방지
    } else {
      window.location.href = "/items"; // /items 페이지로 이동
    }
  });

  validateInputs(); // 페이지 로드 시 초기 상태 체크
});
