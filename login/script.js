const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const submitButton = document.querySelector(".form-buttom-submit");

let isEmailInputFilled = false;
let isPasswordInputFilled = false;

emailInput.addEventListener("input", (event) => {
  if (event.target.value !== "") {
    isEmailInputFilled = true;
  } else {
    isEmailInputFilled = false;
  }
  changeColor();
});

passwordInput.addEventListener("input", (event) => {
  if (event.target.value !== "") {
    isPasswordInputFilled = true;
  } else {
    isPasswordInputFilled = false;
  }
  changeColor();
});

function changeColor() {
  const rootStyles = getComputedStyle(document.documentElement);
  const blueColor = rootStyles.getPropertyValue("--blue100").trim(); // --blue100 변수
  const whiteColor = rootStyles.getPropertyValue("--gray400").trim(); // --gray50 변수

  // 조건에 따라 버튼 색상 변경
  if (isEmailInputFilled && isPasswordInputFilled) {
    submitButton.style.backgroundColor = blueColor; // CSS 변수 사용
  } else {
    submitButton.style.backgroundColor = whiteColor; // CSS 변수 사용
  }
}
