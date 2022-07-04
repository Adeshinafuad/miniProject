userDetailsDatabase = {}


function getUserDetails() {
  //email
  let username = prompt("Enter your Username");

  if (username == null) {
    return;
  }

  function validateUsername(username) {
    if (username.length < 10 && username.length > 0) {
      return true;
    } else {
      return false;
    }
  }
  while (validateUsername(username) == false) {
    username = prompt("Username must be less than 10 and greater than 0");
  }

  userDetailsDatabase["username"] = username

  // Email

  let email = prompt("Enter your Email Address");

  if (email == null) {
    return;
  }

  function validateEmail(email) {
    const emailCheck =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    // check if its an email
    emailCheckResult = emailCheck.test(email);
    if (emailCheckResult == true) {
      return true;
    } else {
      return false;
    }
  }

  while (validateEmail(email) == false) {
    email = prompt("Enter a valid email address");
  }

  userDetailsDatabase["email"] = email

  //Phone Number

  let phoneNumber = prompt("Enter your phone number");

  if (phoneNumber == null) {
    return;
  }

  function validatePhoneNumber(phoneNumber) {
    if ((phoneNumber.length = 11)) {
      return true;
    } else {
      return false;
    }
  }

  while (validatePhoneNumber(phoneNumber) == false) {
    phoneNumber = prompt("Phone number must be 11 digits, try again");
  }

  userDetailsDatabase["phoneNumber"] = phoneNumber

  //Password

  let password = prompt("Enter your password");

  if (password == null) {
    return;
  }

  function validatePassword(password) {
    if (password.length < 6) {
      return false;
    } else {
      return true;
    }
  }

  while (validatePassword(password) == false) {
    password = prompt("Password must be less than six digits");
  }

  let confirmPassword = prompt("Confirm your password");

  if (confirmPassword == null) {
    return;
  }

  userDetailsDatabase["Password"] = password

  function validateConfirmPassword(confirmPassword) {
    if (confirmPassword == password) {
      return true;
    } else {
      return false;
    }
  }

  while (validateConfirmPassword(confirmPassword) == false) {
    confirmPassword = prompt("Confirm password does not match");
  }

  console.log(userDetailsDatabase)
}


function displayUserDetails(){
    alert(`Your Details\n\nUsername: ${userDetailsDatabase.username}\n
    Phone Number: ${userDetailsDatabase.phoneNumber}\n
    Email: ${userDetailsDatabase.email}`)
}