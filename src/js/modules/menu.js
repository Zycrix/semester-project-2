export function menu() {
  const button = document.querySelector("#menu");
  const menu = document.querySelector("#menu-list");

  console.log(button);
  console.log(menu);
  button.addEventListener("click", () => {
    console.log("click");
    menu.classList.toggle("hidden");
  });
}
