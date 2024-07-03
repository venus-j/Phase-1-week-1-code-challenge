// Importing prompt-sync module to take user input
let prompt = require("prompt-sync")();
// Asking user to enter salary
let input = parseFloat(prompt("Enter salary: ")); // Using parseFloat to convert input to a number

// Tax rate function based on gross salary
const taxRate = (gross) => {
  if (gross <= 24000) {
    return 10 / 100; // 10% tax rate for gross salary <= 24000
  } else if (gross > 24000 && gross <= 32333) {
    return 25 / 100; // 25% tax rate for gross salary > 24000 and <= 32333
  } else {
    return 30 / 100; // 30% tax rate for gross salary > 32333
  }
};

// NHIF deduction function based on gross salary
const nhifDeduction = (gross) => {
  // NHIF deductions based on various gross salary ranges
  if (gross <= 5999) {
    return 150;
  } else if (gross <= 7999) {
    return 300;
  } else if (gross <= 11999) {
    return 400;
  } else if (gross <= 14999) {
    return 500;
  } else if (gross <= 19999) {
    return 600;
  } else if (gross <= 24999) {
    return 750;
  } else if (gross <= 29999) {
    return 850;
  } else if (gross <= 34999) {
    return 900;
  } else if (gross <= 39999) {
    return 950;
  } else if (gross <= 44999) {
    return 1000;
  } else if (gross <= 49999) {
    return 1100;
  } else if (gross <= 59999) {
    return 1200;
  } else if (gross <= 69999) {
    return 1300;
  } else if (gross <= 79999) {
    return 1400;
  } else if (gross <= 89999) {
    return 1500;
  } else if (gross <= 99999) {
    return 1600;
  } else {
    return 1700; // 1700 NHIF deduction for gross salary > 99999
  }
};

// NSSF deduction (fixed rate)
const nssfDeduction = 400;

// Function to calculate net salary
const calculateNetSalary = (gross) => {
  let netSalary =
    gross - gross * taxRate(gross) - nssfDeduction - nhifDeduction(gross);
  return netSalary;
};

// Calling the calculateNetSalary function with user input and printing the result
console.log(calculateNetSalary(input));
