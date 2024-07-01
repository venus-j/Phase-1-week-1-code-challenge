// import readline library
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})
// function to calculate speed points (to identify demerit)
const points = (speed) => {
if (speed === "") {
        console.log("Please enter a value")
    }

    else if (speed < 70) {
        console.log("Ok")
    }
    else {
        let balance = (speed*1) - 70
        let points = Math.floor(balance / 5)
        if (points > 12) {
            console.log("License suspended")
            }
    else {
            console.log(points)
        }
    }
}

// get user input
readline.question('Please enter the speed: ', speed => {
    points(speed)
    readline.close()
})
