document.addEventListener("DOMContentLoaded", function () {
  const emailInput = document.getElementById("email");
  const emailError = document.getElementById("email_error");
  const passwordInput = document.getElementById("password");
  const passwordError = document.getElementById("password_error");

  function validateEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  }

  emailInput.addEventListener("blur", function () {
    if (!emailInput.value) {
      emailError.textContent = "이메일을 입력해주세요.";
      emailError.style.display = "block";
      emailInput.classList.add("error-border");
    } else if (!validateEmail(emailInput.value)) {
      emailError.textContent = "잘못된 이메일입니다.";
      emailError.style.display = "block";
      emailInput.classList.add("error-border");
    } else {
      emailError.style.display = "none";
      emailInput.classList.remove("error-border");
    }
  });

  passwordInput.addEventListener("blur", function () {
    if (!passwordInput.value) {
      passwordError.textContent = "비밀번호를 입력해주세요.";
      passwordError.style.display = "block";
    } else if (passwordInput.value.length < 8) {
      passwordError.textContent = "비밀번호를 8자 이상 입력해주세요.";
      passwordError.style.display = "block";
    } else {
      passwordError.style.display = "none";
    }
  });
});
