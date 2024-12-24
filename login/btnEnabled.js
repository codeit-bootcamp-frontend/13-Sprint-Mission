import { validateEmail, validateEmpty, validatePassword, errorMessage } from "../utils/validate.js";

function loginActive() {
    const loginBtn = document.querySelector(".login-btn");

    const validateObject = {
        email: {
            target: document.getElementById("email"),
            validators: [
                { check: validateEmpty, error: errorMessage.email.empty },
                { check: validateEmail, error: errorMessage.email.invalid },
            ],
        },
        password: {
            target: document.getElementById("password"),
            validators: [
                { check: validateEmpty, error: errorMessage.password.empty },
                { check: validatePassword, error: errorMessage.password.invalid },
            ],
        },
    };

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

    const validates = (key) => {
        const { target, validators } = validateObject[key];
        const value = target.value.trim();
        for (const { check, error } of validators) {
            if (!check(value)) {
                errMessage(target, error);
                return false;
            }
        }
        return true;
    };

    const loginValidate = () => {
        const isValid = Object.keys(validateObject).every((key) => validates(key));
        loginBtn.disabled = !isValid;
    };

    for (const [key, { target }] of Object.entries(validateObject)) {
        target.addEventListener("blur", () => validates(key));
        target.addEventListener("input", loginValidate);
        clearErrMessage(target);
    }

    loginBtn.addEventListener("click", (e) => {
        e.preventDefault();
        if (!loginBtn.disabled) {
            window.location.href = "../items.html";
        }
    });
}

loginActive();
