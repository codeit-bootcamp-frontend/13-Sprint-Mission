export function setVisibilityToggle(inputWrapperSelector) {
    const inputWrapperList = document.querySelectorAll(inputWrapperSelector);

    inputWrapperList.forEach((wrapper) => {
        wrapper.addEventListener("click", event => {
            const target = event.target;
            if(target.classList.contains("input-icon")) {
                const input = wrapper.querySelector("input");
                const icon = target;

                if (input.type === "password")
                {
                    input.type = "text";
                    icon.src = "/src/assets/icons/visibility_off_btn.svg";
                }
                else
                {
                    input.type = "password";
                    icon.src = "/src/assets/icons/visibility_on_btn.svg";
                }
            }
        })
    })
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