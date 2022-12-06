import { searchFilter } from "../filters/searchFilter.mjs";
export function search(data) {
  const input = document.querySelector("#search");

  const searchTerm = input.value;

  const result = searchFilter(searchTerm, data);

  return result;
}
