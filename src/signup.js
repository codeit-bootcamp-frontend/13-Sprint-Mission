const Email = document.querySelector("#user_email");
const nickname = document.querySelector("#user_nickname");
const password = document.querySelector("#password");
const check_pass = document.querySelector("#password_correct");
const Btn = document.querySelector("#Btn");
const Error_message = document.querySelectorAll(".error_message");
const Input = document.querySelectorAll(".input_area");
const eyes = document.querySelectorAll("i");

const pattern = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/;

document.addEventListener("DOMContentLoaded", () => {
  Btn.disabled = true;
}); //초기 Button 상태 설정

Btn.addEventListener("click", () => {
  if (!Btn.disabled) {
    location.href = "./signin.html";
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

//이메일 함수
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

//닉네임 함수
function Nickname_focus_out(e) {
  tag_delete(1);
  if (e.target.value == "") {
    e.target.classList.add("input_red_border");
    const text = document.createElement("a");
    text.textContent = "닉네임을 입력해 주세요";
    Error_message[1].append(text);
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

//비밀번호 확인 함수
function Password_correct(e, x) {
  let input = e.target.value;
  tag_delete(x);
  if (input !== password.value) {
    const text = document.createElement("a");
    e.target.classList.add("input_red_border");
    text.textContent = "비밀번호가 일치하지 않습니다..";
    Error_message[x].append(text);
  } else {
    e.target.classList.remove("input_red_border");
  }
}

//form에 값이 다 있는지 보는 함수
function is_form_value() {
  let array = [];
  for (let i = 0; i < 4; i++) {
    array.push(Boolean(Input[i].value));
  }
  return array.every((x) => x == true);
}

//에러 메시지가 없는지 보는 함수
function is_error() {
  let array = [];
  for (let i = 0; i < 4; i++) {
    let x = Boolean(Error_message[i].querySelector("a"));
    array.push(x);
  }
  console.log(array);
  return array.every((x) => x == false);
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

//패스워드 확인 숨김 핸들러 함수

function check_pass_hide(e) {
  if (password.type == "password") {
    check_pass.type = "text";
    e.target.classList.remove("fa-eye-slash");
    e.target.classList.add("fa-eye");
  } else {
    check_pass.type = "password";
    e.target.classList.remove("fa-eye");
    e.target.classList.add("fa-eye-slash");
  }
}
//버튼 함수

function Button_inactive(e) {
  switch (is_form_value() && is_error()) {
    case true:
      Btn.disabled = false;
      break;
    case false:
      Btn.disabled = true;
      break;
  }
}

//이벤트 핸들러 등록
Email.addEventListener("focusout", Email_focus_out);
nickname.addEventListener("focusout", Nickname_focus_out);
password.addEventListener("focusout", (e) => Password_focus_out(e, 2));
check_pass.addEventListener("keyup", (e) => Password_correct(e, 3));
eyes[0].addEventListener("click", Password_hide);
eyes[1].addEventListener("click", check_pass_hide);

Input.forEach((input) => {
  input.addEventListener("change", Button_inactive);
});
