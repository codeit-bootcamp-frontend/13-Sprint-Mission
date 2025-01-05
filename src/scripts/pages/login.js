import { setVisibilityToggle, registerValidationEvents, setButtonDisable, handleFormSubmission } from "/src/scripts/formUtils.js";


const contentWrapper = document.querySelector(".content-wrapper");
setVisibilityToggle(contentWrapper);
registerValidationEvents(contentWrapper);
setButtonDisable(contentWrapper, ".login-button");
handleFormSubmission(contentWrapper, ".login-button", '/src/pages/items.html');
