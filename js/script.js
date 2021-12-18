// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789"
const symbols = "!@#$%^&*()" 

//added userSelection & finalPassword var
var userSelection = [];
var finalPassword = [];

 //prompt user for password length
function generatePassword() {
  console.log("Button is clicked");
 var passLength = window.prompt("How long would you like your password to be? (8-128 characters)")

 //Pass Length Validation
 if (passLength <8) {
   alert ("Please insert a number between 8 to 128");
   generatePassword();
 }
 if (passLength >128) {
  alert ("Please insert a number between 8 to 128");
  generatePassword;
}

var upperC = confirm("Would you like Uppercase Letters");
if (upperC) {
  userSelection = userSelection.
}

  //prompt user for password criteria 
  //password length between 8-128 ****
  //Lowercase, Uppercase, numbers, special characters
  //Validate the input
  //Generate password
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
