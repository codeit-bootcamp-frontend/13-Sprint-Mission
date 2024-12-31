import { setVisibilityToggle, setButtonDisable } from "/src/scripts/global.js";

setVisibilityToggle(".input-wrapper");

const contentWrapper = document.querySelector(".content-wrapper");
setButtonDisable(contentWrapper, ".primary-button");
