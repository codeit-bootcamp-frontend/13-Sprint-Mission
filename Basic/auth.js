const input = document.querySelector(".input");
const loginBtn = document.querySelector("#loginButton");

/* 이메일 형식 확인 */
function validEmail(email_address) {
  const email_regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
  return email_regex.test(email_address);
}

/* 비밀번호 자릿수 확인 */
function validPassword(password) {
  return !(password.length < 8);
}

/* 비밀번호 일치 여부 확인 */
function matchPassword(password) {
  return !(
    password.value !==
    password.parentElement.previousElementSibling.children[1].value
  );
}

/* 닉네임 입력 확인 */
function nameExist(name) {
  return !(name.length < 1);
}

/* 눈 모양 아이콘으로 비밀번호 값 확인 */
function togglePassword(e) {
  const toggleButton = e.target;
  const passwordField = toggleButton.parentElement.nextElementSibling;

  if (
    toggleButton.classList.contains("visible") &&
    passwordField.type === "password"
  ) {
    passwordField.type = "text";
    toggleButton.classList.toggle("visible");
    toggleButton.nextElementSibling.classList.toggle("visible");
  }
  if (
    toggleButton.classList.contains("visible") &&
    passwordField.type === "text"
  ) {
    passwordField.type = "password";
    toggleButton.classList.toggle("visible");
    toggleButton.previousElementSibling.classList.toggle("visible");
  }
}

function checkEmptyValue(e) {
  /* 이메일 값을 입력하지 않았을 때 */
  if (e.target.classList.contains("email-input")) {
    if (e.target.value === "") {
      if (!e.target.nextElementSibling) {
        const caution = document.createElement("div");
        caution.textContent = "이메일을 입력해주세요.";
        e.target.after(caution);
        caution.classList.add("caution-text");
      }
      e.target.classList.add("input-empty");
    } else {
      e.target.classList.remove("input-empty");
      e.target.nextElementSibling.remove();
    }
  }
  /* 닉네임 값을 입력하지 않았을 때 */
  if (e.target.classList.contains("name-input")) {
    if (e.target.value === "") {
      if (!e.target.nextElementSibling) {
        const caution = document.createElement("div");
        caution.textContent = "닉네임을 입력해주세요.";
        e.target.after(caution);
        caution.classList.add("caution-text");
      }
      e.target.classList.add("input-empty");
    } else {
      e.target.classList.remove("input-empty");
      e.target.nextElementSibling.remove();
    }
  }
  /* 비밀번호 값을 입력하지 않았을 때 */
  if (e.target.classList.contains("password-input")) {
    if (e.target.value === "") {
      if (!e.target.nextElementSibling) {
        const caution = document.createElement("div");
        caution.textContent = "비밀번호를 입력해주세요.";
        e.target.after(caution);
        caution.classList.add("caution-text");
      }
      e.target.classList.add("input-empty");
    } else {
      e.target.classList.remove("input-empty");
      e.target.nextElementSibling.remove();
    }
  }
}

function checkValidValue(e) {
  /* 잘못된 이메일 형식을 입력했을 때 */
  if (e.target.classList.contains("email-input")) {
    if (!validEmail(e.target.value)) {
      if (!e.target.nextElementSibling) {
        const caution = document.createElement("div");
        caution.textContent = "잘못된 이메일 형식입니다.";
        e.target.after(caution);
        caution.classList.add("caution-text");
      } else if (e.target.value === "") {
        e.target.nextElementSibling.remove();
        const caution = document.createElement("div");
        caution.textContent = "이메일을 입력해주세요.";
        e.target.after(caution);
        caution.classList.add("caution-text");
      }
      e.target.classList.add("input-empty");
    } else {
      e.target.classList.remove("input-empty");
      e.target.nextElementSibling.remove();
    }
  }
  /* 비밀번호를 8자 미만으로 입력했을 때 */
  if (e.target.classList.contains("password-input")) {
    if (!validPassword(e.target.value)) {
      if (!e.target.nextElementSibling) {
        const caution = document.createElement("div");
        caution.textContent = "비밀번호를 8자 이상 입력해주세요.";
        e.target.after(caution);
        caution.classList.add("caution-text");
      } else if (e.target.value === "") {
        e.target.nextElementSibling.remove();
        const caution = document.createElement("div");
        caution.textContent = "비밀번호를 입력해주세요.";
        e.target.after(caution);
        caution.classList.add("caution-text");
      }
      e.target.classList.add("input-empty");
    } else {
      e.target.classList.remove("input-empty");
      e.target.nextElementSibling.remove();
    }
  }
  /* 비밀번호 확인 시 입력한 비밀번호가 서로 일치하지 않을 때 */
  if (e.target.classList.contains("password-check-input")) {
    if (!matchPassword(e.target)) {
      if (!e.target.nextElementSibling) {
        const caution = document.createElement("div");
        caution.textContent = "비밀번호가 일치하지 않습니다.";
        e.target.after(caution);
        caution.classList.add("caution-text");
      }
      e.target.classList.add("input-empty");
    } else {
      e.target.classList.remove("input-empty");
      e.target.nextElementSibling.remove();
    }
  }
}

/* input에 유효한 값을 모두 입력했을 때 로그인 버튼 활성화 */
function activeSigninBtn() {
  const isValidAll = !(
    validEmail(input.children[0].lastElementChild.value) &&
    validPassword(input.children[1].lastElementChild.value)
  );
  loginBtn.disabled = isValidAll;
}

/* input에 유효한 값을 모두 입력했을 때 회원가입 버튼 활성화 */
function activeSignupBtn() {
  const isValidAll = !(
    validEmail(input.children[0].lastElementChild.value) &&
    nameExist(input.children[1].lastElementChild.value) &&
    validPassword(input.children[2].lastElementChild.value) &&
    matchPassword(input.children[3].lastElementChild)
  );
  loginBtn.disabled = isValidAll;
}

input.addEventListener("focusout", checkEmptyValue);
input.addEventListener("focusout", checkValidValue);
input.addEventListener("keyup", activeSigninBtn);
input.addEventListener("keyup", activeSignupBtn);
input.addEventListener("click", togglePassword);
