document.addEventListener("DOMContentLoaded", () => {
  const emailInput = document.querySelector(".email-input");
  const nicknameInput = document.querySelector(".nickname-input");
  const passwordInput = document.querySelector(".password-input");
  const passwordCheckInput = document.querySelector(".password-check-input");
  const signUpButton = document.querySelector(".signup-button");
  const loginButton = document.querySelector(".login-button");

  const emailError = document.getElementById("emailError");
  const passwordError = document.getElementById("passwordError");
  const passwordCheckError = document.getElementById("passwordCheckError");
  const nicknameError = document.getElementById("nicknameError");

  const state = {
    email: false,
    nickname: false,
    password: false,
    passwordCheck: false
  };

  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  function validateInput(inputElement) {
    const inputType = inputElement.getAttribute("type");
    const inputName = inputElement.getAttribute("name");
    let isValid = true;

    if (inputType === "email") {
      const emailValue = emailInput.value.trim();

      if (!emailValue) {
        emailError.textContent = "이메일을 입력해주세요.";
        inputElement.classList.add("error");
        isValid = false;
      } else if (!isValidEmail(emailValue)) {
        emailError.textContent = "잘못된 이메일 형식입니다.";
        inputElement.classList.add("error");
        isValid = false;
      } else {
        emailError.textContent = "";
        inputElement.classList.remove("error");
      }

      state.email = isValid;
    }

    if (inputType === "text") {
      const nicknameValue = nicknameInput.value.trim();

      if (!nicknameValue) {
        nicknameError.textContent = "닉네임을 입력해주세요.";
        inputElement.classList.add("error");
        isValid = false;
      } else {
        nicknameError.textContent = "";
        inputElement.classList.remove("error");
      }

      state.nickname = isValid;
    }

    if (inputType === "password" && inputName === "password") {
      const passwordValue = passwordInput.value.trim();

      if (!passwordValue) {
        passwordError.textContent = "비밀번호를 입력해주세요.";
        inputElement.classList.add("error");
        isValid = false;
      } else if (passwordValue.length < 8) {
        passwordError.textContent = "비밀번호를 8자 이상 입력해주세요.";
        inputElement.classList.add("error");
        isValid = false;
      } else {
        passwordError.textContent = "";
        inputElement.classList.remove("error");
      }

      state.password = isValid;
    }

    if (inputType === "password" && inputName === "passwordDoubleCheck") {
      const passwordValue = passwordInput.value.trim();
      const passwordCheckValue = passwordCheckInput.value.trim();

      if (!passwordCheckValue) {
        passwordCheckError.textContent = "비밀번호를 입력해주세요.";
        inputElement.classList.add("error");
        isValid = false;
      } else if (passwordValue !== passwordCheckValue) {
        passwordCheckError.textContent = "비밀번호가 일치하지 않습니다.";
        inputElement.classList.add("error");
        isValid = false;
      } else {
        passwordCheckError.textContent = "";
        inputElement.classList.remove("error");
      }

      state.passwordCheck = isValid;
    }
    updateButtonState();
  }

  function updateButtonState() {
    const isLoginValid = state.email && state.password;
    const isSignUpValid = state.email && state.nickname && state.password && state.passwordCheck;

    if (loginButton) {
      if (isLoginValid) {
        loginButton.classList.add("active");
        loginButton.removeAttribute("disabled");
      } else {
        loginButton.classList.remove("active");
        loginButton.setAttribute("disabled", true);
      }
    }

    if (signUpButton) {
      if (isSignUpValid) {
        signUpButton.classList.add("active");
        signUpButton.removeAttribute("disabled");
      } else {
        signUpButton.classList.remove("active");
        signUpButton.setAttribute("disabled", true);
      }
    }
  }

  if (emailInput) {
    emailInput.addEventListener("focusout", () => validateInput(emailInput));
  }
  if (passwordInput) {
    passwordInput.addEventListener("focusout", () => validateInput(passwordInput));
  }
  if (passwordCheckInput) {
    passwordCheckInput.addEventListener("focusout", () => validateInput(passwordCheckInput));
  }
  if (nicknameInput) {
    nicknameInput.addEventListener("focusout", () => validateInput(nicknameInput));
  }

  if (loginButton) {
    loginButton.addEventListener("click", function(e) {
      e.preventDefault();
      const isEmailValid = state.email;
      const isPasswordValid = state.password;

      if (isEmailValid && isPasswordValid) {
        window.location.href = "items.html";
      }
    });
  }

  if (signUpButton) {
    signUpButton.addEventListener("click", function (e) {
      e.preventDefault();
      const isFormValid = state.email && state.nickname && state.password && state.passwordCheck;

      if (isFormValid) {
        window.location.href = "signup.html";
      }
    });
  }
});