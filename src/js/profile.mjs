import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import { loggedIn } from "./modules/utilities/loggedIn.mjs";
import {apiCall} from "./modules/api/apiCall.mjs";
import * as urls from "./modules/api/urls.mjs";
import {buildProfile} from "./modules/utilities/buildProfile.mjs";
import { createCards } from "./modules/utilities/cardsHtml.mjs";
import { search } from "./modules/utilities/search.mjs";

//Check if the user is logged in
loggedIn();

//Search function 
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const result = search(data);
  window.localStorage.setItem("search", JSON.stringify(result));
  window.location.href = `./pages/listings.html?source=search`
});

//check if page should display logged in user's profile or another user's profile
const query = new URLSearchParams(document.location.search);
let name = query.get("name")
const edit = name ? false : true;

if(!name){
  const user = JSON.parse(window.localStorage.getItem("user"));
  name = user.name
}

//Get profile object from api
const profileEndpoint = urls.profile + name + "/listings?_bids=true";
const profile = await apiCall("get", urls.profile + name)
const profileListings = await apiCall("get", profileEndpoint);

//Build profile info and profile listings
buildProfile(profile, edit);
createCards(profileListings);
