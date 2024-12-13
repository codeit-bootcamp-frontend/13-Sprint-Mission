function loginActive() {
    const emailTarget = document.getElementById("email");
    const passwordTarget = document.getElementById("password");
    const loginBtn = document.getElementById("login-btn");

    const inputValue = () => {
        emailTarget.value.trim() && passwordTarget.value.trim()
            ? (loginBtn.disabled = false)
            : (loginBtn.disabled = true);
    };

    emailTarget.addEventListener("input", inputValue);
    passwordTarget.addEventListener("input", inputValue);
}

loginActive();
