import { setVisibilityToggle, setButtonDisable } from "/src/scripts/formUtils.js";

setVisibilityToggle(".input-wrapper");

const contentWrapper = document.querySelector(".content-wrapper");
setButtonDisable(contentWrapper, ".primary-button");
