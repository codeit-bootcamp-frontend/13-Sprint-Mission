const userEmail = document.getElementById("user-email");
const userPwd = document.getElementById("user-password");
const loginBtn = document.getElementById("loginBtn");

// 입력 상태를 추적하는 함수
function toggleButton() {
  const isEmailValid = userEmail.value.trim() !== "" && userEmail.checkValidity();
  const isPasswordValid = userPwd.value.length >= 8;

  if (isEmailValid && isPasswordValid) {
    loginBtn.classList.add("color-blue");
    loginBtn.disabled = false; // 일부러 언제나 활성화로 설정하였습니다.
  } else {
    loginBtn.classList.remove("color-blue");
    loginBtn.disabled = false; // 일부러 언제나 활성화로 설정하였습니다.
  }
}

// 이벤트 리스너 설정
userEmail.addEventListener("input", toggleButton);
userPwd.addEventListener("input", toggleButton);
