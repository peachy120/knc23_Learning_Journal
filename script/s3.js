// JavaScript source code
// 2
// Print to the console first the expression (1 == true) and then the expression (1 === true). 
// Note the difference between using the simple and strict comparison operators == and ===.
console.log("(1 == true):", 1 == true);
console.log("(1 === true):", 1 === true);

// 3
// Define two variables x and y and initialise them to 3 and 5.
let x = 3;
let y = 5;

// 3a
// Print to the console the following expressions:
console.log("x <= y:", x <= y);
console.log("x > 4 && y > 4:", x > 4 && y > 4);
console.log("x > 4 || y > 4:", x > 4 || y > 4);
console.log("!(x > 4 || y > 4):", !(x > 4 || y > 4));
console.log("x !== y && y > 0:", x !== y && y > 0);
console.log("x * y < 15:", x * y < 15);
console.log("x * y <= 15:", x * y <= 15);

// 3b
// Use an if statement that tests whether x is greater than y and then prints either "x is greater than y" or "x is less than or equal to y" to the console.
if ( x > y ) {
    console.log("x is greater than y")
} else {
    console.log("x is less than or equal to y")
}

// 3c
// Log the result of dividing x by y only if x is greater than y
if ( x > y) {
    let result = x / y;
    console.log(result)
}

// 3d
// Add x to y while y is less than 100, then log the value of y to the console
// HINT: use a while loop
while ( y < 100) {
    y = y + x;
}

// 4
// Log the string "Hello <number>" to the console y times (i.e. Hello 1, Hello 2, Hello 3 ....)
// HINT: use a for loop
for ( let counter = 0 ; counter < y ; counter++ ) {
    console.log("Hello" + counter);
}

// 5
// Define a variable day and initialise it to a random number between 0 and 6. Then use a switch statement to test the value of day and print a corresponding day of the week to the console. (0=Monday, 1=Tuesday, ..., 6=Sunday)
// Hint: use the following expression to generate a random number between 0 and 6: var day = Math.floor(Math.random() * 7)
var day = Math.floor( Math.random() * 7 );
switch(day) {
    case 0:
        console.log("Monday");
        break;
    case 1:
        console.log("Tuesday");
        break;
    case 2:
        console.log("Wednesday");
        break;
    case 3:
        console.log("Thursday");
        break;
    case 4:
        console.log("Friday");
        break;
    case 5:
        console.log("Saturday");
        break;
    case 6:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid Day")
}