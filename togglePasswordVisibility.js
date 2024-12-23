function togglePasswordVisibility() {
    const passwordTarget = document.getElementById("password");
    const passwordCheckTarget = document.getElementById("password-check");
    const visibilityPassword = document.querySelector(".visibility");
    const visibilityPassword2 = document.querySelector(".visibility2");

    const passwordVisibility = () => {
        visibilityPassword.style.display = passwordTarget.value.trim() ? "block" : "none";
    };

    const passwordCheckVisibility = () => {
        visibilityPassword2.style.display = passwordCheckTarget.value.trim() ? "block" : "none";
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
