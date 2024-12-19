const userEmail = document.getElementById("userEmail");
const userPwd = document.getElementById("userPassword");
const pwdConfirm = document.getElementById("pwdConfirm");
const signupBtn = document.getElementById("signupBtn");

// 입력 상태를 추적하는 함수
function toggleButton() {
  // 이메일, 비밀번호, '비밀번호 확인' 유효한지 검사
  const isEmailValid = userEmail.value.trim() !== "" && userEmail.checkValidity();
  const isPasswordValid = userPwd.value.length >= 8;
  const pwdConfirmCheck = userPwd.value !== "" && userPwd.value === pwdConfirm.value;

  // 조건 만족시 회원가입 버튼 색상 변화
  if (isEmailValid && isPasswordValid && pwdConfirmCheck) {
    signupBtn.classList.add("color-blue");
  } else {
    loginBtn.classList.remove("color-blue");
  }
}

// 이벤트 리스너 설정
userEmail.addEventListener("input", toggleButton);
userPwd.addEventListener("input", toggleButton);
pwdConfirm.addEventListener("input", toggleButton);
