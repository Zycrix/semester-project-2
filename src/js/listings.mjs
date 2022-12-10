import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import { fetchAll } from "./modules/api/fetchAll.mjs";
import { createCards } from "./modules/utilities/cardsHtml.mjs";
import { loggedIn } from "./modules/utilities/loggedIn.mjs";
import { search } from "./modules/utilities/search.mjs";

loggedIn();

const query = document.location.search;
const params = new URLSearchParams(query);
const source = params.get("searchTerm")

const result = await fetchAll("activeListings");

if(source){
  const searchResult = JSON.parse(window.localStorage.getItem("search"));
  createCards(searchResult)
}else{
  createCards(result);
};

search(result);
