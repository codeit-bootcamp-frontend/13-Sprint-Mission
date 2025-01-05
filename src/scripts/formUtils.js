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

export function setVisibilityToggle(inputWrapperSelector) {
    const inputWrappers = document.querySelectorAll(inputWrapperSelector);

    inputWrappers.forEach((wrapper) => {
        wrapper.addEventListener("click", (event) => {
            const clickedElement = event.target;

            if (clickedElement.classList.contains("input-icon")) {
                const passwordInput = wrapper.querySelector("input");
                const toggleButton = clickedElement;

                const nextState = passwordInput.type === "password" ? visibilityConfig["showPassword"] : visibilityConfig["hidePassword"];

                passwordInput.type = nextState.type;
                toggleButton.src = nextState.src;
                toggleButton.alt = nextState.alt;
            }
        });
    });
}

export function setButtonDisable(parent, buttonClass) {
    const button = parent.querySelector(buttonClass);
  
    // 초기 상태 및 입력값 검증 함수
    function validateInputs() {
      const inputs = parent.querySelectorAll("input");
      const allFilled = Array.from(inputs).every(input => input.value.trim() !== "");
      button.disabled = !allFilled;
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
  }