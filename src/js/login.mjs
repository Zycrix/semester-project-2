import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import { showRegister } from "./modules/showRegister.mjs";
import { getFormData } from "./modules/getFormData.js";

//Check if the user was sent trough the register button
const queryString = document.location.search;
if (queryString.includes("page=register")) {
  showRegister();
}

//Make the form buttons work
const form = document.querySelector("#login");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (e.submitter.dataset.action === "register-open") {
    showRegister();
  } else if (e.submitter.dataset.action === "close-register") {
    showRegister();
  } else if (e.submitter.dataset.action === "register-send") {
    const body = getFormData("register");
    console.log(body);
  } else {
    const body = getFormData();
  }
});
