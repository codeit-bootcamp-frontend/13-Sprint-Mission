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