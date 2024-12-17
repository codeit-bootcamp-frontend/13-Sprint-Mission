const userEmail = document.getElementById("user-email");
const userPwd = document.getElementById("user-password");
const loginBtn = document.getElementById("loginBtn");

let emailFilled = true;

userEmail.addEventListener("blur", () => {
  if (isValidEmail(userEmail.value)) {
    userEmail.value !== "" ? (emailFilled = true) : (emailFilled = false);
  }
});

userPwd.addEventListener("input", () => {
  if (emailFilled && userPwd.value.length >= 8) {
    loginBtn.classList.add("color-blue");
  }
});
