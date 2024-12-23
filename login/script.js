const formInputs = document.querySelectorAll(".form-field-input");
const submitButton = document.querySelector(".form-button-submit");

const isInputFilled = (input) => input.value.trim() !== "";

const updateInputState = () => {
  const isFormFilled = Array.from(formInputs).every(isInputFilled);
  submitButton.classList.toggle("active", isFormFilled); // 버튼 스타일 변경
  submitButton.disabled = !isFormFilled; // 버튼 활성/비활성
};

formInputs.forEach((input) => {
  input.addEventListener("input", updateInputState);
});

updateInputState();
