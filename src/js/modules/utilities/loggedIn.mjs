export function loggedIn() {
  if (window.localStorage.getItem("token")) {
    const user = JSON.parse(window.localStorage.getItem("user"));

    //Show the complete menu
    const menuItems = document.querySelectorAll("#menu-list li a");

    menuItems.forEach((e) => {
      e.classList.remove("hidden");
    });

    //Show profile icon and user menu
    const loginButtons = document.querySelector(".login-buttons");
    const profileContainer = document.querySelector(".user");
    const profilePicture = document.querySelector(".profile-picture");
    const creditsContainer = document.querySelector(".credits-container");

    loginButtons.classList.add("hidden");
    profileContainer.classList.remove("hidden");
    profileContainer.classList.add("d-flex");
    profilePicture.classList.remove("hidden");
    profilePicture.src = user.avatar;
    creditsContainer.innerHTML = user.credits + "C";

    //Add listener to logout button
    const logOut = document.querySelector("#log-out");

    logOut.addEventListener("click", (e) => {
      window.localStorage.clear();
      window.location.reload();
    });
  }
}