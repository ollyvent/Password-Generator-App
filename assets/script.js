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

var finalCharacterPool = "";

// Function to prompt user for password options
function getPasswordOptions() {
  var lengthOfPassword = prompt(
    "enter a number between 8 and 128 for lenght of your password"
  );

  lengthOfPassword = parseInt(lengthOfPassword);

  if (
    lengthOfPassword < 8 ||
    lengthOfPassword > 128 ||
    isNaN(lengthOfPassword)
  ) {
    alert("invalid input, enter a number between 8 and 128");
    return null;
  }

  // ask for character types
  var wantLowercase = confirm("Do you want lowercase characters?");
  var wantUppercase = confirm("Do you want uppercase characters?");
  var wantNumericChar = confirm("Do you want numeric characters?");
  var wantSpecialChar = confirm("Do you want special characters?");

  if (
    !wantLowercase &&
    !wantUppercase &&
    !wantNumericChar &&
    !wantSpecialChar
  ) {
    alert("select a character type");
    return null;
  }

  // conditional statements to populate the final character pool

  if (wantLowercase) finalCharacterPool += lowerCasedCharacters.join("");
  if (wantUppercase) finalCharacterPool += upperCasedCharacters.join("");
  if (wantNumericChar) finalCharacterPool += numericCharacters.join("");
  if (wantSpecialChar) finalCharacterPool += specialCharacters.join("");

  return {
    length: lengthOfPassword,
    characterPool: finalCharacterPool,
  };
}
// console.log(finalCharacterPool);

// Function for getting a random element from an array
function getRandom(arr) {
  var randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

// Function to generate password with user input
function generatePassword() {
  var options = getPasswordOptions();
  // if no option is selected, return an empty string
  if (!options) {
    return "";
  }

  var password = "";
  for (var i = 0; i < options.length; i++) {
    password += getRandom(options.characterPool);
  }

  return password;
}

// Get references to the #generate element
var generateButton = document.getElementById("generate");

generateButton.addEventListener("click", function () {
  var password = generatePassword();
  var passwordTextArea = document.getElementById("password");
  passwordTextArea.value = password;
});
