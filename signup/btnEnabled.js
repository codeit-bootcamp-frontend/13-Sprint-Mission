function signupActive() {
    const emailTarget = document.getElementById("email");
    const nicknameTarget = document.getElementById("nickname");
    const passwordTarget = document.getElementById("password");
    const passwordCheckTarget = document.getElementById("password-check");
    const signupBtn = document.getElementById("signup-btn");

    const inputValue = () => {
        emailTarget.value.trim() &&
        nicknameTarget.value.trim() &&
        passwordTarget.value.trim() &&
        passwordCheckTarget.value.trim()
            ? (signupBtn.disabled = false)
            : (signupBtn.disabled = true);
    };

    emailTarget.addEventListener("input", inputValue);
    nicknameTarget.addEventListener("input", inputValue);
    passwordTarget.addEventListener("input", inputValue);
    passwordCheckTarget.addEventListener("input", inputValue);
}

signupActive();
