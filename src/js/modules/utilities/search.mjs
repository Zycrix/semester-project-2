import { searchFilter } from "../filters/searchFilter.mjs";
export function search(data) {
  const form = document.querySelector("form");
  const input = document.querySelector("#search");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const searchTerm = input.value;
    const result = searchFilter(searchTerm, data);
    console.log(result)

    window.localStorage.setItem("search", JSON.stringify(result));
    window.location.href = `/pages/listings.html?searchTerm=${searchTerm}`
  });
}
