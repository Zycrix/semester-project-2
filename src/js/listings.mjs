import { fetchAll } from "./modules/api/fetchAll.mjs";
import { createCards } from "./modules/utilities/cardsHtml.mjs";

const query = document.location.search;
const params = new URLSearchParams(query);
const source = params.get("source")
let result;

if(source === "search"){
  result = JSON.parse(window.localStorage.getItem("search"));
  createCards(result)
}else{
  result = await fetchAll("activeListings");
};
