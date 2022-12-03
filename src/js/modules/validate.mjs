export default function validate(data) {
  /**
   * Validates the registration form input
   * @param {object} data The body object to be sent with the post request
   * @returns True or false based on validation result
   */
  //Check that the email is a noroff email

  const emailError = document.querySelector(".email");

  const email = data.email;
  const regex = /[a-w.]+@stud.noroff.no/g;
  const result = regex.test(email);

  if (!result) {
    emailError.classList.add("email-error");
    return false;
  } else {
    emailError.classList.remove("email-error");
  }

  //Make sure the passwords match
  const passError = document.querySelector(".password");
  const confError = document.querySelector(".confirm");

  if (data.password.length < 8) {
    passError.classList.add("password-error");
    return false;
  } else if (data.password !== confirm) {
    passError.classList.remove("password-error");
    passError.classList.add("confirm-error");
    confError.classList.add("confirm-error");
    return false;
  } else {
    passError.classList.remove("password-error");
    confError.classList.remove("confirm-error");
  }

  return true;
}
