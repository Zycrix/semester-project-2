/**
 * The main api call function, created to make call to the api using different methods and endpoints making it reusable across several different use cases
 * @param {string} method HTML method to be used in the fetch
 * @param {string} endpoint Api endpoint to call
 * @param {object} body Body object to be sent if applicable //OPTIONAL
 * @param {number} offset A number value to offset listings results //OPTIONAL
 * @returns {object} Response object from the api
 */
import * as urls from "./urls.mjs";
export async function apiCall(method, endpoint, body, offset) {
  //Set url
  let url = urls[endpoint] || endpoint;

  if (offset) {
    url += `&offset=${offset}`;
  }

  //Set base options
  const options = {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
  };

  //Add authorization if the user is logged in
  if (window.localStorage.getItem("token")) {
    const token = JSON.parse(window.localStorage.getItem("token"));

    options.headers = {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    };
  }

  //Add the body object if it's required for the endpoint
  if (body) {
    options.body = JSON.stringify(body);
  }

  //Make the api call
  try {
    const response = await fetch(url, options);
    const result = await response.json();

    return result;
  } catch (e) {
    console.log(e);
    return e;
  }
}
