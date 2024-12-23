const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const submitButton = document.querySelector(".form-button-submit");

const isInputFilled = (input) => input.value.trim() !== "";

const updateInputState = () => {
  const isFormFilled =
    isInputFilled(emailInput) && isInputFilled(passwordInput);
  submitButton.classList.toggle("active", isFormFilled);
};

[emailInput, passwordInput].forEach((input) => {
  input.addEventListener("input", updateInputState);
});

updateInputState();
