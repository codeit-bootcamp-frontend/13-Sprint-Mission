import { isEmpty } from "./utils.js";

const formInputs = document.querySelectorAll(".form-field-input");
const submitButton = document.querySelector(".form-button-submit");

const updateInputState = () => {
  const isFormFilled = Array.from(formInputs)
    .map((input) => input.value)
    .every((string) => !isEmpty(string));
  submitButton.classList.toggle("active", isFormFilled); // 버튼 스타일 변경
  submitButton.disabled = !isFormFilled; // 버튼 활성/비활성
};

formInputs.forEach((input) => {
  input.addEventListener("input", updateInputState);
});

updateInputState();
