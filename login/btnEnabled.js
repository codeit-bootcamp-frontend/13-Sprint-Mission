import { validateEmail, validateEmpty, validatePassword, errorMessage } from "../utils/validate.js";

function loginActive() {
    const emailTarget = document.getElementById("email");
    const passwordTarget = document.getElementById("password");
    const loginBtn = document.querySelector(".login-btn");

    const errMessage = (input, errorM) => {
        const err = input.parentElement.parentElement.querySelector(".error-message");
        if (errorM) {
            input.classList.add("error");
            err.textContent = errorM;
        } else {
            input.classList.remove("error");
            err.textContent = "";
        }
    };

    const emailValidate = () => {
        const value = emailTarget.value.trim();
        if (!validateEmpty(value)) {
            errMessage(emailTarget, errorMessage.email.empty);
            return false;
        }

        if (!validateEmail(value)) {
            errMessage(emailTarget, errorMessage.email.invalid);
            return false;
        }

        errMessage(emailTarget, "");
        return true;
    };

    const passwordValidate = () => {
        const value = passwordTarget.value.trim();
        if (!validateEmpty(value)) {
            errMessage(passwordTarget, errorMessage.password.empty);
            return false;
        }

        if (!validatePassword(value)) {
            errMessage(passwordTarget, errorMessage.password.invalid);
            return false;
        }

        errMessage(passwordTarget, "");
        return true;
    };

    const loginValidate = () => {
        const isEmailValid =
            !emailTarget.classList.contains("error") &&
            validateEmpty(emailTarget.value) &&
            validateEmail(emailTarget.value);
        const isPasswordValid = !passwordTarget.classList.contains("error") && validatePassword(passwordTarget.value);

        loginBtn.disabled = !(isEmailValid && isPasswordValid);
    };

    emailTarget.addEventListener("blur", emailValidate);
    passwordTarget.addEventListener("blur", passwordValidate);

    emailTarget.addEventListener("input", loginValidate);
    passwordTarget.addEventListener("input", loginValidate);

    loginBtn.addEventListener("click", (e) => {
        e.preventDefault();
        if (!loginBtn.disabled) {
            window.location.href = "../items.html";
        }
    });
}

loginActive();
