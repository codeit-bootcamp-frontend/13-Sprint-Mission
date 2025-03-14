document.addEventListener("DOMContentLoaded", () => {
  const passwordInput = document.querySelector(".password-input");
  const passwordCheckInput = document.querySelector(".password-check-input");
  const visiblePasswordIcon = document.querySelector(".visibility-icon");
  const visiblePasswordCheckIcon = document.querySelector(".password-check-visibility-icon");

  let passwordVisible = true;
  let passwordCheckVisible = true;

  function togglePasswordType (type) {

    if (type === "password") {
      if (!passwordVisible) {
        visiblePasswordIcon.classList.remove('on');
        visiblePasswordIcon.classList.add('off');
        passwordInput.setAttribute("type", "password");
      } else {
        visiblePasswordIcon.classList.remove('off');
        visiblePasswordIcon.classList.add('on');
        passwordInput.setAttribute("type", "text");
      }

      passwordVisible = !passwordVisible;
    }

    if (type === "passwordCheck") {
      if (!passwordCheckVisible) {
        visiblePasswordCheckIcon.classList.remove('on');
        visiblePasswordCheckIcon.classList.add('off');
        passwordCheckInput.setAttribute("type", "password");
      } else {
        visiblePasswordCheckIcon.classList.remove('off');
        visiblePasswordCheckIcon.classList.add('on');
        passwordCheckInput.setAttribute("type", "text");
      }

      passwordCheckVisible = !passwordCheckVisible;
    }
    
  }

  if (visiblePasswordIcon) {
    visiblePasswordIcon.addEventListener("click", () => togglePasswordType("password"));
  }
  if (visiblePasswordCheckIcon) {
    visiblePasswordCheckIcon.addEventListener("click", () => togglePasswordType("passwordCheck"));
  }
});