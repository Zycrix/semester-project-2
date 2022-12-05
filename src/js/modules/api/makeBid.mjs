import { apiCall } from "./apiCall.mjs";
import * as urls from "./urls.mjs";
import { loggedIn } from "../utilities/loggedIn.mjs";
export async function makeBid(data) {
  const bid = document.querySelector("#bid").value;
  const errorMessage = document.querySelector(".bid-error");
  const amount = Number(bid);

  if (Number(bid) < data.bids[data.bids.length - 1].amount) {
    errorMessage.classList.remove("hidden");
    return false;
  } else {
    errorMessage.classList.add("hidden");
  }

  const endpoint = urls.listing + data.id + "/bids";
  const body = { amount };

  try {
    const result = await apiCall("post", endpoint, body, null);
    if (result.id) {
      const user = JSON.parse(window.localStorage.getItem("user")).name;
      const endpoint = urls.profile + user;
      const update = await apiCall("get", endpoint);
      console.log(update);
      loggedIn();
    }

    return result;
  } catch (e) {
    console.log(e);
    errorMessage.classList.remove("hidden");
    errorMessage.innerHTML = e.message;
    return false;
  }
}
