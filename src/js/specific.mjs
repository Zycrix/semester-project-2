import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import { loggedIn } from "./modules/utilities/loggedIn.mjs";
import { apiCall } from "./modules/api/apiCall.mjs";
import * as urls from "./modules/api/urls.mjs";
import { specificHtml } from "./modules/utilities/specificHtml.mjs";

loggedIn();

const search = window.location.search;
const queryString = new URLSearchParams(search);
const id = queryString.get("id");

const endpoint = urls.listing + id + "?&_bids=true";
console.log(endpoint);

const result = await apiCall("get", endpoint);

specificHtml(result);

console.log(result);
