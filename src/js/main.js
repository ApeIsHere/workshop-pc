import "../scss/style.scss";

import timer from "./modules/timer";
import hamburger from "./modules/hamburger";
import tutors from "./modules/tutors";
import scroll from "./modules/scroll";
import forms from "./modules/forms";
import modals from "./modules/modals";

window.addEventListener("DOMContentLoaded", () => {
  "use strict";

  //----------------------------------- Timer
  // Use the format "2023-09-04T15:30:00"

  timer(".main__countdown", "2024-11-02T00:00:00");

  hamburger();
  scroll();
  tutors();
  forms();
  modals();
});
