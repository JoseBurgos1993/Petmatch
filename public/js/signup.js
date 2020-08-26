$(document).ready(() => {
  // Getting references to our form and input
  const signUpForm = $("form.signup");
  const userName = $("input#username");
  const emailInput = $("input#email");
  const ageInput = $("input#age");
  const sexInput = $("input#sex");
  const speciesInput = $("input#species");
  const passwordInput = $("input#password-input");
  // When the signup button is clicked, we validate the email and password are not blank
  signUpForm.on("submit", event => {
    event.preventDefault();
    const userData = {
      username: userName.val().trim(),
      email: emailInput.val().trim(),
      age: ageInput.val().trim(),
      sex: sexInput.val(),
      species: speciesInput.val(),
      password: passwordInput.val().trim()
    };

    if (!userData.email || !userData.password|| !userData.sex|| !userData.username|| !userData.species || !userData.age || isNaN(userData.age)) {
      return;
    }
    // If we have an email and password, run the signUpUser function
    signUpUser(userData.username, userData.email, userData.sex, userData.species,userData.password);
    userName.val("");
    emailInput.val("");
    ageInput.val("");
    sexInput.val("");
    passwordInput.val("");
    speciesInput.val("");
  });

  // Does a post to the signup route. If successful, we are redirected to the members page
  // Otherwise we log any errors
  function signUpUser(username, email, age, sex, species, password) {
    $.post("/api/signup", {
      username: username,
      email: email,
      age: age,
      sex: sex,
      species: species,
      password: password
    })
      .then(() => {
        window.location.replace("/profile");
        // If there's an error, handle it by throwing up a bootstrap alert
      })
      .catch(handleLoginErr);
  }

  function handleLoginErr(err) {
    $("#alert .msg").text(err.responseJSON);
    $("#alert").fadeIn(500);
  }
});
