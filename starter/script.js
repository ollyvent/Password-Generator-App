// Array of special characters to be included in password
var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// Array of numeric characters to be included in password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

var finalCharacterPool = [];

// Function to prompt user for password options
function getPasswordOptions() {
  var lenghtOfPassword = prompt(
    "enter a number between 8 and 128 for lenght of your password"
  );

  lenghtOfPassword = parseInt(lenghtOfPassword);

  if (
    lenghtOfPassword <= 8 ||
    lenghtOfPassword >= 128 ||
    isNaN(lenghtOfPassword)
  ) {
    return alert(
      "invalid input, enter a number between 8 and 128 for lenght of your password "
    );
  }

  var wantsLowercase = confirm("Do you want lowercase chars");
  var wantsUppercase = confirm("Do you want lowercase chars");
  var wantSpecialCharacters = confirm("Do you want soecial characters?");
  // ask for the rest of char types

  if (wantsLowercase) {
    finalCharacterPool.push(...lowerCasedCharacters);
  }

  if (wantsUppercase) {
    finalCharacterPool.push(...upperCasedCharacters);
  }



  console.log(finalCharacterPool);
}

// Function for getting a random element from an array
function getRandom(arr) {}

// Function to generate password with user input
function generatePassword() {
  getPasswordOptions();
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
