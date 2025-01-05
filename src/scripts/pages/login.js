import { setVisibilityToggle, registerValidationEvents, setButtonDisable } from "/src/scripts/formUtils.js";

setVisibilityToggle(".input-wrapper");

const contentWrapper = document.querySelector(".content-wrapper");
registerValidationEvents(contentWrapper);
setButtonDisable(contentWrapper, ".primary-button");
