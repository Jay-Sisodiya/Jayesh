function validateRegInForm() {
  // Get input values
  var user = document.getElementById("un").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var confirmPassword = document.getElementById("confirm-password").value;
  var unError = document.getElementById("un-error");
  var emailError = document.getElementById("email-error");
  var passwordError = document.getElementById("password-error");
  var confirmPasswordError = document.getElementById("confirm-password-error");

  if (user == "") {
    unError.innerText = "User name is required";
    return false;
  } else {
    unError.innerText = "";
  }
  // Email validation
  if (email == "") {
    emailError.innerText = "Email is required";
    return false;
  } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
    emailError.innerText = "Invalid email format";
    return false;
  } else {
    emailError.innerText = "";
  }

  // Password validation
  if (password == "") {
    passwordError.innerText = "Password is required";
    return false;
  } else {
    passwordError.innerText = "";
  }

  if (confirmPassword == "") {
    confirmPasswordError.innerText = "Confirm  Password is required";
    return false;
  }else if (confirmPassword != password) {
    confirmPasswordError.innerText = "Confirm password is not Equal to password !";
    return false;
  }
   else {
    confirmPasswordError.innerText = "";
  }

  // If valid, submit form
  return true;
}



