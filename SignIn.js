function validateSignInForm() {
    // Get input values
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var emailError = document.getElementById('email-error');
    var passwordError = document.getElementById('password-error');
  
    // Email validation
    if (email == '') {
      emailError.innerText = 'Email is required';
      return false;
    } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
      emailError.innerText = 'Invalid email format';
      return false;
    } else {
      emailError.innerText = '';
    }
  
    // Password validation
    if (password == '') {
      passwordError.innerText = 'Password is required';
      return false;
    } else {
      passwordError.innerText = '';
    }
  
    // If valid, submit form
    return true;

}  