import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import { loggedIn } from "./modules/utilities/loggedIn.mjs";
import { apiCall } from "./modules/api/apiCall.mjs";
import * as urls from "./modules/api/urls.mjs";
import { specificHtml } from "./modules/utilities/specificHtml.mjs";
import { makeBid } from "./modules/api/makeBid.mjs";
import { search } from "./modules/utilities/search.mjs";

//Check if the user is logged in and make adjustments
loggedIn();

//Search function 
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const result = search(data);
  window.localStorage.setItem("search", JSON.stringify(result));
  window.location.href = `/pages/listings.html?source=search`
});

//Get listing id
const queryString = new URLSearchParams(window.location.search);
const id = queryString.get("id");

//Create the endpoint and call the api
const endpoint = urls.listing + id + "?&_bids=true&_seller=true";

const result = await apiCall("get", endpoint);

//Build the page
specificHtml(result);

//Add event listener on bid form
const bidForm = document.querySelector("#bid-form");

bidForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const newResult = await makeBid(result);

  if (newResult) {
    console.log(newResult);
    // specificHtml(newResult);
  }
});
