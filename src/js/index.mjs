import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import { fetchAll } from "./modules/fetchAll.mjs";
import { removeEnded } from "./modules/filters/removeEnded.mjs";
import { popFilter } from "./modules/filters/popular.mjs";
import { listingHtml } from "./modules/listingHtml.mjs";
import { endingFilter } from "./modules/filters/endingSoon.js";

const data = await fetchAll();

const endedRemoved = removeEnded(data);

const popular = popFilter(endedRemoved);

const ending = endingFilter(endedRemoved);

listingHtml(popular, "pop-container", "pop");
listingHtml(data, "new-container", "new");
listingHtml(ending, "ending-container", "ending");
