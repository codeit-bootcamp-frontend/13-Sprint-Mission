import {
    validateEmpty,
    validateEmail,
    validatePassword,
    validatePasswordCheck,
    errorMessage,
} from "../utils/validate.js";

function signupActive() {
    const signupBtn = document.querySelector(".signup-btn");

    const validateObject = {
        email: {
            target: document.getElementById("email"),
            validators: [
                { check: validateEmpty, error: errorMessage.email.empty },
                { check: validateEmail, error: errorMessage.email.invalid },
            ],
        },
        nickname: {
            target: document.getElementById("nickname"),
            validators: [{ check: validateEmpty, error: errorMessage.nickname }],
        },
        password: {
            target: document.getElementById("password"),
            validators: [
                { check: validateEmpty, error: errorMessage.password.empty },
                { check: validatePassword, error: errorMessage.password.invalid },
            ],
        },
        "password-check": {
            target: document.getElementById("password-check"),
            validators: [
                { check: validateEmpty, error: errorMessage.password.empty },
                {
                    check: (value) => validatePasswordCheck(validateObject.password.target.value, value),
                    error: errorMessage.password.notEqual,
                },
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

    const signupValidate = () => {
        const allValidate = (key) => {
            const { target, validators } = validateObject[key];
            const value = target.value.trim();

            return validators.every(({ check }) => check(value));
        };
        const isValid = Object.keys(validateObject).every(allValidate);
        signupBtn.disabled = !isValid;
    };

    for (const [key, { target }] of Object.entries(validateObject)) {
        target.addEventListener("blur", () => validates(key));
        target.addEventListener("input", signupValidate);
        clearErrMessage(target);
    }

    signupBtn.addEventListener("click", (e) => {
        e.preventDefault();
        if (!signupBtn.disabled) {
            window.location.href = "../signin.html";
        }
    });
}

signupActive();
