import { setVisibilityToggle, registerValidationEvents, setButtonDisable } from "/src/scripts/formUtils.js";


const contentWrapper = document.querySelector(".content-wrapper");
setVisibilityToggle(contentWrapper);
registerValidationEvents(contentWrapper);
setButtonDisable(contentWrapper, ".primary-button");
