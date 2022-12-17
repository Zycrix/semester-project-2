export function loggedIn(check) {
  if (window.localStorage.getItem("token")) {
    if(check){
      return true;
    };

    const user = JSON.parse(window.localStorage.getItem("user"));
  
    //Show the complete menu
    const menuItems = document.querySelectorAll("#menu-list li a");
    const listingButton = document.querySelector(".position-fixed");

    menuItems.forEach((e) => {
      e.classList.remove("hidden");
    });

    listingButton.classList.remove("hidden");
    
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
    return true;
  }else{
    if(window.innerWidth > 1200){
      const registerButton = document.querySelector("#register");
      registerButton.classList.remove("hidden");
    }
    return false;
  }
}
