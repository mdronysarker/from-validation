// Get the form element and submit button
const form = document.getElementById("form");
const submitBtn = document.querySelector("button");

// Add event listener to the submit button
submitBtn.addEventListener("click", function (event) {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Call the validation function
  validateForm();
});

// Define the validation function
function validateForm() {
  // Get the input values
  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confrimPassword").value;

  // Check if the input values are valid
  if (username === "") {
    setErrorFor("username", "Username cannot be blank");
  } else {
    setSuccessFor("username");
  }

  if (email === "") {
    setErrorFor("email", "Email cannot be blank");
  } else if (!isEmail(email)) {
    setErrorFor("email", "Email is not valid");
  } else {
    setSuccessFor("email");
  }

  if (password === "") {
    setErrorFor("password", "Password cannot be blank");
  } else if (password.length < 8) {
    setErrorFor("password", "password lenght must be eight");
  } else {
    setSuccessFor("password");
  }

  if (confirmPassword === "") {
    setErrorFor("confrimPassword", "Confirm password cannot be blank");
  } else if (password !== confirmPassword) {
    setErrorFor("confrimPassword", "Passwords do not match");
  } else {
    setSuccessFor("confrimPassword");
  }
}

// Define helper functions for showing error/success messages
function setErrorFor(inputName, errorMessage) {
  // console.log(inputName, errorMessage);
  const input = document.getElementById(inputName);
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");

  // Add error classes
  formControl.classList.add("error");
  formControl.classList.remove("success");

  // Set the error message
  small.innerText = errorMessage;

  // Show the error message
  small.style.visibility = "visible";
}

function setSuccessFor(inputName) {
  const input = document.getElementById(inputName);
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");

  // Add success classes
  formControl.classList.add("success");
  formControl.classList.remove("error");

  // Hide the error message
  small.style.visibility = "hidden";
}

function isEmail(email) {
  // Regular expression for validating email addresses
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
