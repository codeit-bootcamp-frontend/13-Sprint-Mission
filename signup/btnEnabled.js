import {
    validateEmpty,
    validateEmail,
    validatePassword,
    validatePasswordCheck,
    errorMessage,
} from "../utils/validate.js";

function signupActive() {
    const emailTarget = document.getElementById("email");
    const nicknameTarget = document.getElementById("nickname");
    const passwordTarget = document.getElementById("password");
    const passwordCheckTarget = document.getElementById("password-check");
    const signupBtn = document.querySelector(".signup-btn");

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

    const clearErrMessage = (input) => {
        input.addEventListener("input", () => {
            if (input.value.trim() === "") return;
            errMessage(input, "");
        });
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

        return true;
    };

    const nicknameValidate = () => {
        const value = nicknameTarget.value.trim();
        if (!validateEmpty(value)) {
            errMessage(nicknameTarget, errorMessage.nickname);
            return false;
        }

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

        return true;
    };

    const passwordCheckValidate = () => {
        const password1 = passwordTarget.value.trim();
        const password2 = passwordCheckTarget.value.trim();
        if (!validateEmpty(password2)) {
            errMessage(passwordCheckTarget, errorMessage.password.empty);
            return false;
        }

        if (!validatePasswordCheck(password1, password2)) {
            errMessage(passwordCheckTarget, errorMessage.password.notEqual);
            return false;
        }

        return true;
    };

    const signupValidate = () => {
        const isEmailValid =
            !emailTarget.classList.contains("error") &&
            validateEmpty(emailTarget.value) &&
            validateEmail(emailTarget.value);

        const isNicknameValid = !nicknameTarget.classList.contains("error") && validateEmpty(nicknameTarget.value);

        const isPasswordValid =
            !passwordTarget.classList.contains("error") &&
            validateEmpty(passwordTarget.value) &&
            validatePassword(passwordTarget.value);

        const isPasswordCheckValid =
            !passwordCheckTarget.classList.contains("error") &&
            validateEmpty(passwordCheckTarget.value) &&
            validatePasswordCheck(passwordTarget.value, passwordCheckTarget.value);

        signupBtn.disabled = !(isEmailValid && isNicknameValid && isPasswordValid && isPasswordCheckValid);
    };

    emailTarget.addEventListener("blur", emailValidate);
    nicknameTarget.addEventListener("blur", nicknameValidate);
    passwordTarget.addEventListener("blur", passwordValidate);
    passwordCheckTarget.addEventListener("blur", passwordCheckValidate);

    emailTarget.addEventListener("input", signupValidate);
    nicknameTarget.addEventListener("input", signupValidate);
    passwordTarget.addEventListener("input", signupValidate);
    passwordCheckTarget.addEventListener("input", signupValidate);

    clearErrMessage(emailTarget);
    clearErrMessage(nicknameTarget);
    clearErrMessage(passwordTarget);
    clearErrMessage(passwordCheckTarget);

    signupBtn.addEventListener("click", (e) => {
        e.preventDefault();
        if (!signupBtn.disabled) {
            window.location.href = "../signin.html";
        }
    });
}

signupActive();
