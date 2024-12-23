function loginActive() {
    const emailTarget = document.getElementById("email");
    const passwordTarget = document.getElementById("password");
    const loginBtn = document.querySelector(".login-btn");

    const inputValue = () => {
        loginBtn.disabled = !(emailTarget.value.trim() && passwordTarget.value.trim());
    };

    emailTarget.addEventListener("input", inputValue);
    passwordTarget.addEventListener("input", inputValue);
}

loginActive();
