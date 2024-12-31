const Email = document.querySelector("#user_email");
const nickname = document.querySelector("#user_nickname");
const LoginPassword = document.querySelector("#login_password");
const Password = document.querySelector("#password");
const check_pass = document.querySelector("#password_correct");
const eyes = document.querySelector("i");
const Btn = document.querySelector("#Btn");
const Error_message = document.querySelectorAll(".error_message");
const Input = document.querySelectorAll(".input_area");

import { email_check, password_checked, tag_delete } from "./utils";

const pattern = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/;

document.addEventListener("DOMContentLoaded", () => {
  Button_inactive();
}); //초기 Button 상태 설정

Btn.addEventListener("click", () => {
  if (!Btn.disabled) {
    location.href = "./items.html";
  }
});

//이메일 확인
function Email_focus_out(e, i) {
  let input = e.target.value;
  tag_delete(i);
  if (!email_check(input)) {
    e.target.classList.add("input_red_border");
    const text = document.createElement("a");
    text.textContent =
      input === "" ? "이메일을 입력해주세요" : "잘못된 이메일 형식 입니다.";
    Error_message[i].prepend(text);
  } else {
    e.target.classList.remove("input_red_border");
  }
}

//비밀번호
function Password_focus_out(e, i) {
  let input = e.target.value;
  tag_delete(i);
  if (input.length < 8) {
    e.target.classList.add("input_red_border");
    const text = document.createElement("a");
    text.textContent =
      input === ""
        ? "비밀번호를 입력해주세요"
        : "비밀번호를 8자 이상 입력해주세요";
    Error_message[i].prepend(text);
  } else {
    e.target.classList.remove("input_red_border");
  }
}

//닉네임 함수
function Nickname_focus_out(e, i) {
  tag_delete(i);
  if (e.target.value == "") {
    e.target.classList.add("input_red_border");
    const text = document.createElement("a");
    text.textContent = "닉네임을 입력해 주세요";
    Error_message[i].append(text);
  } else {
    e.target.classList.remove("input_red_border");
  }
}

//비밀번호 확인 함수
function Password_correct(e, x) {
  let input = e.target.value;
  tag_delete(x);
  if (input !== Password.value) {
    const text = document.createElement("a");
    e.target.classList.add("input_red_border");
    text.textContent = "비밀번호가 일치하지 않습니다..";
    Error_message[x].append(text);
  } else {
    e.target.classList.remove("input_red_border");
  }
}

//패스워드 숨김 핸들러 함수
function Password_hide(e, el) {
  if (el.type == "password") {
    el.type = "text";
    e.target.classList.remove("fa-eye-slash");
    e.target.classList.add("fa-eye");
  } else {
    el.type = "password";
    e.target.classList.remove("fa-eye");
    e.target.classList.add("fa-eye-slash");
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
//버튼
function Button_inactive(e, condition1, condition2) {
  switch (condition1 && condition2) {
    case true:
      Btn.disabled = false;
      break;
    case false:
      Btn.disabled = true;
      break;
  }
}

//이벤트 핸들러 등록--------------------------------------------------------//

Email.addEventListener("focusout", (e) => Email_focus_out(e, 0)); //이메일은 두 페이지 모드 0번 인덱스
LoginPassword.addEventListener("focusout", (e) => Password_focus_out(e, 1)); //로그인페이지 비밀번호
eyes[0].addEventListener("click", (e) => Password_hide(e, LoginPassword)); //로그인 페이지 비밀번호 눈

nickname.addEventListener("focusout", (e) => Nickname_focus_out(e, 1)); //회원가입 페이지 닉네임
Password.addEventListener("focusout", (e) => Password_focus_out(e, 2)); //회원가입페이지 비밀번호
check_pass.addEventListener("keyup", (e) => Password_correct(e, 3)); //회원가입페이지 비밀번호 확인
eyes[0].addEventListener("click", (e) => Password_hide(e, Password)); //회원가입 페이지 비밀번호 눈
eyes[1].addEventListener("click", (e) => Password_hide(e, check_pass)); //회원가입 페이지 비밀번호 확인 눈

Input.forEach((input) => {
  input.addEventListener(
    "change",
    (e) => Button_inactive(e, is_form_value(), is_error()) //회원가입 페이지 버튼
  );
});
Input.forEach((input) => {
  input.addEventListener(
    "change",
    Button_inactive(
      e,
      email_check(Email.value),
      password_checked(Password.value)
    )
  ); //로그인 페이지 버튼
});
