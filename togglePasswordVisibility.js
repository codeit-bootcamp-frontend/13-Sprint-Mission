function togglePasswordVisibility() {
    const passwordTarget = document.getElementById("password");
    const passwordCheckTarget = document.getElementById("password-check");
    const visibilityPassword = document.querySelector(".visibility");
    const visibilityPassword2 = document.querySelector(".visibility2");

    const passwordVisibility = () => {
        passwordTarget.value.trim()
            ? (visibilityPassword.style.display = "block")
            : (visibilityPassword.style.display = "none");
    };

    const passwordCheckVisibility = () => {
        passwordCheckTarget.value.trim()
            ? (visibilityPassword2.style.display = "block")
            : (visibilityPassword2.style.display = "none");
    };

    const passwordClickHandler = (targetInput, targetImg) => {
        if (targetInput.type === "password") {
            targetInput.type = "text";
            targetImg.src = "../assets/invisibility.svg";
        } else {
            targetInput.type = "password";
            targetImg.src = "../assets/visibility.svg";
        }
    };

    visibilityPassword?.addEventListener("click", () => passwordClickHandler(passwordTarget, visibilityPassword));
    visibilityPassword2?.addEventListener("click", () =>
        passwordClickHandler(passwordCheckTarget, visibilityPassword2)
    );

    passwordTarget?.addEventListener("input", passwordVisibility);
    passwordCheckTarget?.addEventListener("input", passwordCheckVisibility);

    passwordVisibility();
    passwordCheckVisibility();
}
togglePasswordVisibility();
