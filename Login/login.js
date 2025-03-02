document.addEventListener("DOMContentLoaded", function () {
  const emailInput = document.getElementById("email");
  const emailError = document.getElementById("email_error");
  const passwordInput = document.getElementById("password");
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

  /* 비밀번호 에러메세지 */
  function checkPassword() {
    if (passwordInput.value.length < 8) {
      passwordError.textContent = "비밀번호를 8자 이상 입력해주세요.";
      passwordError.style.display = "block";
    } else {
      passwordError.style.display = "none";
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
