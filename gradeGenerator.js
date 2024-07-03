// Importing prompt-sync module to take user input
let prompt = require("prompt-sync")();
// Asking user to enter a number
let input = prompt("Enter your number: ");
input = Number(input); // Convert input string to a number

// Defining the grade function
function grade(number) {
  // Checking various ranges to determine the grade
  if (number < 40) {
    return "E"; // Return "E" if number is less than 40
  } else if (number >= 40 && number < 49) {
    return "D"; // Return "D" if number is between 40 and 48 (inclusive)
  } else if (number >= 49 && number < 59) {
    return "C"; // Return "C" if number is between 49 and 58 (inclusive)
  } else if (number >= 60 && number < 79) {
    return "B"; // Return "B" if number is between 60 and 78 (inclusive)
  } else if (number >= 79 && number <= 100) {
    return "A"; // Return "A" if number is between 79 and 100 (inclusive)
  } else if (number > 100) {
    return "Entry invalid"; // Return "Entry invalid" if number is greater than 100
  }
}

// Calling the grade function with user input and printing the result
console.log(grade(input));
