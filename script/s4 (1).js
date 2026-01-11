// JavaScript source code
// 2
// Declare a variable str and assign it the following piece of text: I'm learning JavaScript in my web development module.
let str = "I'm learning JavaScript in my web development module";

// 3
// Log the number of characters in string str to the console.
console.log("Number of characters : ", str.length);

// 4
// Find the position of the string "JavaScript" in string str and log it to the console.
console.log("The position of 'JavaScript' : ", str.indexOf("JavaScript"));

// 5
// Count the number of times the letter "e" appears in the string str. 
// HINT: Using a for loop and the String.charAt() method.
countE = 0;
for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) === 'e') {
        countE++;
    }
}
console.log("The number of 'e' : ", countE);

// 6
// Find the position of all letters "m" in string str and log them to the console.
// HINT: The String.indexOf() takes an optional second parameter.
let indexM = str.indexOf("m")
while (indexM !== -1) {
    console.log("The position of 'm' : ", indexM);
    indexM = str.indexOf("m", indexM + 1);
}

// 7
// Reverse string str and print it to the console. The result should be:.eludom tnempoleved bew ym ni tpircSavaJ gninrael m'I.
// HINT: Use a second string variable, a decrementing for loop, string concatenation and the String.charAt() method.
let reversedStr = "";
for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str.charAt(i);
}
console.log("Reversed String : ", reversedStr);

// 8
// Declare a variable url and assign it the current web address. Test if the page was called up from a web server (http:), a secure web server (https:), the file system (file:) or any other source and print the result to the console.
// HINT: 1) Use the if / else if / else construct and the String.startsWith() method 2) Use the following statement to get the current web address: var url = window.location.href;
var url = window.location.href;
if (url.startsWith("https:")) {
    console.log("Loaded from a web server https:");
} else if (url.startsWith("http:")) {
    console.log("Loaded from a web server https:");
} else if (url.startsWith("file:")) {
    console.log("Loaded from a file system file:");
} else {
    console.log("Not a valid email");
}










