const userEmail = document.getElementById("user-email");
const userPwd = document.getElementById("user-password");
const loginBtn = document.getElementById("loginBtn");

let emailFilled = false;

userEmail.addEventListener("blur", () => {
  // 입력한 이메일 필드가 비어있는지 확인
  userEmail.value !== "" ? (emailFilled = true) : (emailFilled = false);
});

// 비밀번호 입력 시,  조건에 따라 버튼 색상을 변경
userPwd.addEventListener("input", () => {
  // 이메일이 입력되어 있고 비밀번호가 8자 이상인 경우
  if (emailFilled && userPwd.value.length >= 8) {
    loginBtn.classList.add("color-blue");
  }
});
