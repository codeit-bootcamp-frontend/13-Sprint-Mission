const NOINPUT = 0;
const WRONGINPUT = 1;
const VALIDINPUT = 2;

const visibilityConfig = {
    showPassword: {
        type: "text",
        src: "/src/assets/icons/visibility_off_btn.svg",
        alt: "비밀번호 숨기기",
    },
    hidePassword: {
        type: "password",
        src: "/src/assets/icons/visibility_on_btn.svg",
        alt: "비밀번호 보기",
    },
};

const validators = {
    email: (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (email.trim() === "")
            return (NOINPUT);
        else if (!emailRegex.test(email))
            return (WRONGINPUT);
        return (VALIDINPUT);
    },
    password: (password) => {
        if (password.length === 0)
            return (NOINPUT);
        else if (password.length < 8)
            return (WRONGINPUT);
        return (VALIDINPUT);
    }
}

export function setVisibilityToggle(parent) {

    parent.addEventListener("click", (event) => {
        const target = event.target;

        if (target.classList.contains("input-icon")) {
            const wrapper = target.closest(".input-wrapper");
            const passwordInput = wrapper.querySelector("input");
            const toggleButton = target;

            const nextState = passwordInput.type === "password" ? visibilityConfig["showPassword"] : visibilityConfig["hidePassword"];

            passwordInput.type = nextState.type;
            toggleButton.src = nextState.src;
            toggleButton.alt = nextState.alt;
        }
    });
}

function setWarningMessage(warningDiv, checkValid, messages, inputField) {
    if (checkValid === NOINPUT) {
        warningDiv.textContent = messages.noInput;
        inputField.classList.add("input-error");
    } else if (checkValid === WRONGINPUT) {
        warningDiv.textContent = messages.wrongInput;
        inputField.classList.add("input-error");
    }
    else {
        warningDiv.textContent = "";
        inputField.classList.remove("input-error");
    }
}

export function registerValidationEvents(parent) {
    const forms = parent.querySelectorAll(".form-structure");

    for (let form of forms) {
        form.addEventListener("focusout", (event) => {
            const target = event.target;
            const warningDiv = form.querySelector(".form-warning");
            if (target.classList.contains("email-input")) {
                const checkValid = validators.email(target.value);
                setWarningMessage(warningDiv, checkValid, {
                    noInput: "이메일을 입력해주세요.",
                    wrongInput: "잘못된 이메일 형식입니다."
                }, target);
            }
            else if (target.classList.contains("password-input")) {
                const checkValid = validators.password(target.value);
                setWarningMessage(warningDiv, checkValid, {
                    noInput: "비밀번호를 입력해주세요.",
                    wrongInput: "비밀번호를 8자 이상 입력해주세요."
                }, target);
            }
        })
    }
}

export function setButtonDisable(parent, buttonClass) {
    const button = parent.querySelector(buttonClass);
  
    // 초기 상태 및 입력값 검증 함수
    function validateInputs() {
        const forms = parent.querySelectorAll(".form-structure");

        const allValid = Array.from(forms).every(form => {
            const input = form.querySelector("input");
            const warning = form.querySelector(".form-warning");

            return (input.value !== "" && warning.textContent === "");
        });
      button.disabled = !allValid;
    }

    /*
        초기 상태에 button을 disabled로 설정하였으나
        안전성과 일관성을 위해 호출
    */
    validateInputs();
  
    parent.addEventListener("input", (event) => {
      if (event.target.tagName === "INPUT") {
        validateInputs();
      }
    });

    parent.addEventListener("focusout", (event) => {
      if (event.target.tagName === "INPUT") {
        validateInputs();
      }
    });
}

export function handleFormSubmission(parent, buttonClass, redirectUrl) {
    const button = parent.querySelector(buttonClass);

    function validateInputs() {
        const forms = parent.querySelectorAll(".form-structure");

        return Array.from(forms).every(form => {
            const input = form.querySelector("input");
            const warning = form.querySelector(".form-warning");
            return input.value !== "" && warning.textContent === "";
        });
    }

    button.addEventListener("click", (event) => {
        if (validateInputs()) {
            location.href = redirectUrl;
        } 
    });
}
