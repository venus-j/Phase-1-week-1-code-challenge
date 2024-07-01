//prompt
const readline = require('readline').createInterface({
      input: process.stdin,
      output: process.stdout
})

// function to grade student
function grade(marks) {
     if (marks === "") {
        console.log("Please enter your marks")
     }
     else if (marks<=100.0 && marks>=79.0) {
        console.log("A")
     }
     else if (marks>=60.0 && marks<=78.0) {
        console.log("B")
     }
     else if (marks>=49.0 && marks<=59.0) {
        console.log("C")
    }
     else if (marks>=40.0 && marks<=48.0) {
        console.log("D")
     }
     else if (marks>=39.0 && marks<=0.0) {
        console.log("E")
     }
     else (
        console.log("Invalid Grade")
     )
}

// get user input
readline.question('Please enter marks here: ', marks => {
    grade(marks)
    readline.close ()
})


