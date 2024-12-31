const Email = document.querySelector("#user_email");
const password = document.querySelector("#login_password");
const Error_message = document.querySelectorAll(".error_message");
const Btn = document.querySelector("#Btn");
const eyes = document.querySelector("i");
const Input = document.querySelectorAll(".input_area");

const pattern = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/;

document.addEventListener("DOMContentLoaded", () => {
  Button_inactive();
}); //초기 Button 상태 설정

Btn.addEventListener("click", () => {
  if (!Btn.disabled) {
    location.href = "./items.html";
  }
});

//이메일 유효성 검사 함수
function email_check(email) {
  return pattern.test(email);
}
//비밀번호 8자리 이상 체크  함수
function password_checked(password) {
  return password.length > 7;
}

//a태그 존재시 삭제
function tag_delete(i) {
  let isTag = Error_message[i].querySelector("a");
  if (isTag) {
    Error_message[i].lastChild.remove();
  }
}

function Email_focus_out(e) {
  let input = e.target.value;
  tag_delete(0);
  if (!email_check(input)) {
    e.target.classList.add("input_red_border");
    const text = document.createElement("a");
    if (input == "") {
      text.textContent = "이메일을 입력해주세요";
      Error_message[0].prepend(text);
    } else {
      text.textContent = "잘못된 이메일 형식 입니다.";
      Error_message[0].prepend(text);
    }
  } else {
    e.target.classList.remove("input_red_border");
  }
}

//비밀번호 함수
function Password_focus_out(e, x) {
  let input = e.target.value;
  tag_delete(x);
  if (!password_checked(input)) {
    e.target.classList.add("input_red_border");
    const text = document.createElement("a");
    text.textContent =
      input === ""
        ? "비밀번호를 입력해주세요"
        : "비밀번호를 8자 이상 입력해주세요";
    Error_message[x].prepend(text);
  } else {
    e.target.classList.remove("input_red_border");
  }
}

//버튼 함수
function Button_inactive(e) {
  switch (email_check(Email.value) && password_checked(password.value)) {
    case true:
      Btn.disabled = false;

      break;
    case false:
      Btn.disabled = true;

      break;
  }
}
//패스워드 숨김 핸들러 함수
function Password_hide(e) {
  if (password.type == "password") {
    password.type = "text";
    e.target.classList.remove("fa-eye-slash");
    e.target.classList.add("fa-eye");
  } else {
    password.type = "password";
    e.target.classList.remove("fa-eye");
    e.target.classList.add("fa-eye-slash");
  }
}
//이벤트 핸들러 등록
password.addEventListener("focusout", Password_focus_out);
Email.addEventListener("focusout", Email_focus_out);
password.addEventListener("focusout", (e) => Password_focus_out(e, 1));
eyes.addEventListener("click", Password_hide);

Input.forEach((input) => {
  input.addEventListener("change", Button_inactive);
});
