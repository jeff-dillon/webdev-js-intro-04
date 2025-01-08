// Prevent us from attempting to use variables
// that are not declared
"use strict"

// Copy the last code block into your script and change the hero's health 
// points to see what logic gets executed.

// let healthPoints = -5;

// if (healthPoints >= 10) {
//     console.log("Hero is healthy.");
// } else if (healthPoints < 10 && healthPoints >= 5) {
//     console.log("Hero is slightly damaged.");
// } else {
//     console.log("Hero is close to death.");
// }




// Create a couple if statements that are meaningful.

if(true == 1) {
    console.log("The boolean True is essentially equal to the number one.")
}


// Create a couple if/else statements that are meaningful.

if(1 == "one") {
    console.log("This makes no sense.")
} else {
    console.log("1 does not equal 'one'")
}


// Create a couple if/else if/else statements that are meaningful.

let testVar = "1"
console.log(testVar)
console.log(typeof testVar)

if(typeof testVar == 'number') {
    console.log("1 is a number")
} else if(typeof testVar == 'string') {
    console.log("'1' is a string")
}

