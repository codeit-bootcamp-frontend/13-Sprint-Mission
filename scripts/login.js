const userEmail = document.getElementById("userEmail");
const userPwd = document.getElementById("userPassword");
const loginBtn = document.getElementById("loginBtn");

// 입력 상태를 추적하는 함수
function toggleButton() {
  // 이메일, 비밀번호가 유효한지 확인
  const isEmailValid = userEmail.value.trim() !== "" && userEmail.checkValidity();
  const isPasswordValid = userPwd.value.length >= 8;

  // 이메일, 비밀번호 모두 조건을 만족하는 순간
  if (isEmailValid && isPasswordValid) {
    loginBtn.classList.add("color-blue");
  } else {
    loginBtn.classList.remove("color-blue");
  }
}

// 이벤트 리스너 설정
userEmail.addEventListener("input", toggleButton);
userPwd.addEventListener("input", toggleButton);
