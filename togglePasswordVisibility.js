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

    passwordTarget?.addEventListener("input", passwordVisibility);
    passwordCheckTarget?.addEventListener("input", passwordCheckVisibility);

    passwordVisibility();
    passwordCheckVisibility();
}
togglePasswordVisibility();

/* 추가할 기능 
    visibility click event 발생 시
    passwordTarget / passwordCheckTarget type이 password에서 text로 변환
    visibility src visibility에서 invisibility로 변환
*/
