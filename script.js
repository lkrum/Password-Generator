// Need the following variables:
// selected length of the password: 8< x <128 
// array of lowercase letters
// array of uppercase letters
// array of numbers
// array of special characters
// to hold the password we're building
// possibly the mega-array

// prompt for password length --> stored in a variable
// Validate the user input --> if user chooses <8 or >128, alert that they need to choose a valid password length, then they're going to need to restart OR call the function that prompts for length again
// prompt --> Do they want uppercase letters?
// prompt --> Do they want lowercase letters?
// prompt --> Do they want numbers?
// prompt --> Do they want special characters?
// Validate that the user has chosen at least one character set --> if not, either have them start over OR recursively call the function that prompts for the character sets
// With each of those prompts, you need an array of those character types
// There needs to be at least one of each selected character type included in the password
// Randomly generate a character from each character set as it's chosen and add it to the end of the password that you're building (.push() for an array or .concat() for a string)
// for loop:
// for (var i = password.length - 1; i < passwordLength; i++)
// EITHER keep the character sets separate OR combine them to a mega-array to pull the rest of the characters from
// IF keeping the character sets separate, randomly generate a number to tell which array you're pulling from, then randomly generate a number to pull the character from the array (character will by array[number])
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
var password = "";

// program begins
var generatePassword = function () {
  
// password length prompt 
var passLength = window.prompt("How many characters do you want in your password?");
  if ((passLength < 8 ) || (passLength > 128)) {
    window.alert("Invalid character count. Please select a password length in between 8 and 128 characters");
    // return; 
  } 
  if (!passLength) {
    window.alert("Please choose a valid input.");
  }    

// function chooseCharacters() {
var lower = window.confirm("Do you want to include lowercase letters? Type 'yes' or 'no.'");
console.log(lower);
var upper = window.confirm("Do you want to include uppercase letters? Type 'yes' or 'no.'");
var numb = window.confirm("Do you want to include numbers? Type 'yes' or 'no.'");
var specialChar = window.confirm("Do you want to include special characters? Type 'yes' or 'no.'");

// combining options into single mega-array
if (lower) {
  passOptions = passOptions.concat(lowerArray);
    }
if (upper) {
  passOptions = passOptions.concat(upperArray);
    }
if (numb) {
  passOptions = passOptions.concat(numeralArray);
    }
if (specialChar) {
  passOptions = passOptions.concat(specialCharArray);
    }

 console.log(passOptions)   
    
// for (var i = p - 1; i < passwordLength; i++)   
// var  = Math.floor(Math.random() *  ))


    // console.log(passOptions);

  }
  // return password;



// // Prompt validation
// function validateChoices () {
// if (
//   (!lower == "") ||
//   (!upper == "") ||
//   (!Numb == "") ||
//   (!specialChar == "")) { 
//   alert("Please choose at least one character type.");
//  }
// chooseCharacters ();
// }

// var choice = Math.floor(Math.random() *  .length))
// take in pass length and loop choice to create password (for loop takes length for i = 0. make new array called pass choice to push choices for actual password (Michael Bell -TA))


// if 
// (lower == "yes")






// function generatePassword(

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





// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and / or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page

