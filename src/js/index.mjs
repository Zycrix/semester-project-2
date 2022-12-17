import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import { fetchAll } from "./modules/api/fetchAll.mjs";
import { removeEnded } from "./modules/filters/removeEnded.mjs";
import { popFilter } from "./modules/filters/popular.mjs";
import { listingHtml } from "./modules/utilities/html/listingHtml.mjs";
import { endingFilter } from "./modules/filters/endingSoon.js";
import { loggedIn } from "./modules/utilities/loggedIn.mjs";
import { search } from "./modules/utilities/search.mjs";
import { tooltip } from "./modules/utilities/initTooltips.mjs";
import { hScroll } from "./modules/utilities/horizontalScroll.mjs";

//init tooltips

tooltip();

loggedIn();

const data = await fetchAll("activeListings");

const endedRemoved = removeEnded(data);

const popular = popFilter(endedRemoved);

const ending = endingFilter(endedRemoved);

listingHtml(popular, "pop-container", "pop");
listingHtml(endedRemoved, "new-container", "new");
listingHtml(ending, "ending-container", "ending");

hScroll();

search(data);
