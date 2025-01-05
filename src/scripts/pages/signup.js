import { setVisibilityToggle, registerValidationEvents, setButtonDisable, handleFormSubmission } from "/src/scripts/formUtils.js";

const contentWrapper = document.querySelector(".content-wrapper");

setVisibilityToggle(contentWrapper);
registerValidationEvents(contentWrapper);
setButtonDisable(contentWrapper, ".signup-button");
handleFormSubmission(contentWrapper, ".signup-button", '/src/pages/signup.html');
