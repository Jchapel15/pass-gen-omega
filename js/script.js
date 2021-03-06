function generatePassword() {

  //Validation for criteria.  Length. Type
  var length = Number(prompt("How long would you like your password?"));
  while (isNaN(length) || length < 8 || length > 128) length = Number(prompt("Must be between 8-128 characters. How many characters would you like your password to be?"));
  

  //Variables for validation
  var uppers = confirm("Would you like to use uppercase letters?");
  var lowers = confirm("Would you like to use lowercase letters?");
  var numbers = confirm("Would you like to use numbers?");
  var symbols = confirm("Would you like to use special characters?");


  //If no criteria is selected
  while (!uppers && !lowers && !numbers && !symbols) {
    alert("You must select at least one character type!");
    uppers = confirm("Would you like to use uppercase letters?");
    lowers = confirm("Would you like to use lowercase letters?");
    numbers = confirm("Would you like to use numbers?");
    symbols = confirm("Would you like to use special characters?");
  }
  
    var password = "";
  
    //Build string of allowed characters
    var allowed = {};
    if (uppers) password += rando(allowed.uppers = "ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    if (lowers) password += rando(allowed.lowers = "abcdefghijklmnopqrstuvwxyz");
    if (numbers) password += rando(allowed.numbers = "1234567890");
    if (symbols) password += rando(allowed.symbols = "!@#$%^&*(){}[]=<>/,.");
  
    //for loop to generate password
    for (var i = password.length; i < length; i++) password += rando(rando(allowed).value);
  
    return password;
  }
  
  // Get references to the #generate element
  var generateBtn = document.querySelector("#generate");
  
  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  passwordText.value = password;
  }
  
  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);