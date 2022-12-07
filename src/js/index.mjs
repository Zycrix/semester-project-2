import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import { fetchAll } from "./modules/api/fetchAll.mjs";
import { removeEnded } from "./modules/filters/removeEnded.mjs";
import { popFilter } from "./modules/filters/popular.mjs";
import { listingHtml } from "./modules/utilities/listingHtml.mjs";
import { endingFilter } from "./modules/filters/endingSoon.js";
import { loggedIn } from "./modules/utilities/loggedIn.mjs";
import { search } from "./modules/utilities/search.mjs";

loggedIn();

const data = await fetchAll("activeListings");

const endedRemoved = removeEnded(data);

const popular = popFilter(endedRemoved);

const ending = endingFilter(endedRemoved);

console.log(endedRemoved);
listingHtml(popular, "pop-container", "pop");
listingHtml(endedRemoved, "new-container", "new");
listingHtml(ending, "ending-container", "ending");

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const result = search(data);
  window.localStorage.setItem("search", JSON.stringify(result));
  window.location.href = `./pages/listings.html?source=search`
});
