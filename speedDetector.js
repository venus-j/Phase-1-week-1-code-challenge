// Importing prompt-sync module to take user input
let prompt = require("prompt-sync")();
// Asking user to enter speed
let input = prompt("Enter speed: ");

// Defining the speed function
function speed(value) {
  let speedLimit = 70; // Defining the speed limit

  // Checking if the value is within the speed limit
  if (value <= speedLimit) {
    return "okay"; // Return "okay" if within the speed limit
  } else {
    let excess_speed = value - speedLimit; // Calculating how much over the speed limit
    let demeritPoints = excess_speed / 5; // Calculating demerit points

    // Checking if demerit points exceed 12
    if (demeritPoints > 12) {
      return "License suspended"; // Return "License suspended" if demerit points exceed 12
    } else {
      return `${demeritPoints}`; // Return demerit points as a string if below or equal to 12
    }
  }
}

console.log(speed(input));
