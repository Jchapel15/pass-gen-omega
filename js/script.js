// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {

  console.log("Button is clicked");
  //prompt user for password criteria
  //password length between 8-128
  //Lowercase, Uppercase, numbers, special characters
  //Validate the input
  //Display generated password

  return "Generated password will go here";
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
