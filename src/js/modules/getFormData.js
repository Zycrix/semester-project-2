export function getFormData(type) {
  const form = document.querySelector("#login");
  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;
  const name = document.querySelector("#username").value;
  const avatar = document.querySelector("#avatar").value;
  const confirm = document.querySelector("#confirm");

  let body;

  if (type === "register") {
    body = { name, email, password, confirm, avatar };
  } else {
    body = { email, password };
  }

  return body;
}
