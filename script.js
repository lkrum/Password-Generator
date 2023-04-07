
// IF pushing to a mega-array randomly generate a number to pull a character from the array
// IF pushing to a mega-array, remember to set the array back to an empty array at the start of the process!
// return the generated password


// variables:
var chooseLength;
var passLengthMin = 8;
var passLengthMax = 128;
var lowerArray = "abcdefghijklmnopqrstuvwxyz".split("");
var upperArray = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var numeralArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharArray = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~".split("");
var passOptions = [];
var userPassword = "";

// program begins
var generatePassword = function () {

  // password length prompt 
  var passLength = window.prompt("How many characters do you want in your password?");
  if ((passLength < 8) || (passLength > 128)) {
    window.alert("Invalid character count. Please select a password length in between 8 and 128 characters");
    return;
  }
  if (!passLength) {
    window.alert("Please choose a valid input.");
    return;
  }

  // choose characters to include in password
  var lower = window.confirm("Do you want to include lowercase letters?");
  console.log(lower)
  var upper = window.confirm("Do you want to include uppercase letters?");
  console.log(upper)

  var numeral = window.confirm("Do you want to include numbers?");
  console.log(numeral)

  var specialChar = window.confirm("Do you want to include special characters?");
  console.log(specialChar)


  // validate that at least one criteria is true
  if (
    (lower === false) &&
    (upper === false) &&
    (numeral === false) &&
    (specialChar === false)) {
    window.alert("Please choose at least one character type.");
    return;
  }

  // combining options into single mega-array
  if (lower) {
    passOptions = passOptions.concat(lowerArray);
  }
  if (upper) {
    passOptions = passOptions.concat(upperArray);
  }
  if (numeral) {
    passOptions = passOptions.concat(numeralArray);
  }
  if (specialChar) {
    passOptions = passOptions.concat(specialCharArray);
  }

  // Randomly selecting characters from array
  var userPassword = "";
  for (var x = 0; x < passLength; x++) {  
  var randomNumber = Math.floor(Math.random() * passOptions.length);   
  userPassword += passOptions[randomNumber];
}  

  return userPassword;

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




