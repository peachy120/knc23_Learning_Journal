// JavaScript source code

// 2
// Write a function called multiply that takes two arguments (a, b) and returns the result of multiplying those arguments together. Use the new function to log to the console the result of multiplying two numbers
// Try calling function multiply with one parameter or three parameters instead of the required two parameters and log the result to the console. What happens? How does JavaScript handle missing or surplus parameters? Research the special values undefined and NaN.
function multiply(x, y) {
    return x * y;
}


// 3
// Write a function called countChar that counts how often a character c occurs in a string s. The function takes two arguments (s and c) and returns a number. Use the new function to log to the console the number of times the character 'l' occurs in the word 'Hello'.
// HINT: since we are looking for a single character, we can use the String.charAt() method
function countChar(c, s) {
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        if (s.charAt(i) === c) {
            count++;
        }
    }
    return count;
}
console.log(countChar("Hello", "1"));

// 4
// Write a function called countStr that counts how often a search string needle occurs in a string haystack. The function takes two string arguments and returns a number. Use the new function to log to the console
// 4a
// The number of times the string 'cream' occurs in the string 'I scream, you scream, we all scream for icecream!'
function countStr(haystack, needle) {
    let count = 0;
    let index = 0;
    while ((index = haystack.indexOf(needle, index)) !== -1) {
        count++;
        index += needle.length;
    }
    return count;
}

let screamTest = "I scream, you scream, we all scream for icecream!";
console.log("Occurrences of 'cream':", countStr(screamTest, "cream"));

// 4b
// The number of times the string 'sea' occurs in the string 'She sells sea shells on the sea shore. The shells that she sells are sea shells I'm sure. So if she sells sea shells on the sea shore, I'm sure that the shells are sea shore shells'
// HINT: since we are looking for a string with multiple characters, we cannot use the String.charAt() method. Instead, try the String.indexOf() method and use the second parameter to control the start index for the search after each find. This is a tricky problem, so don't despair if things don't work out immediately.
let seaTest = `She sells sea shells on the sea shore. The shells that she sells are
sea shells I'm sure. So if she sells sea shells on the sea shore, I'm
sure that the shells are sea shore shells`;

console.log("Occurrences of 'sea':", countStr(seaTest, "sea"));

// 5
// Write a function called rotate that takes two arguments (arr, an array, and num, a number), which will modify the arr array by popping an element off the last element and splicing it at the start of the array. This should be repeated num times, effectively rotating the array. For example: rotate(["Harry","Sarah","Oscar","Tina"], 2) -> ["Oscar","Tina","Harry","Sarah"];
function rotate(arr, num) {
    for (let i = 0; i < num; i++) {
        let last = arr.pop();
        arr.splice(0, 0, last);  // or arr.unshift(last)
    }
    return arr;
}

console.log("Rotated array:", rotate(["Harry", "Sarah", "Oscar", "Tina"], 2));

// 6
// Sort the array [12, 9, 33, 8, 71, 2, 41, 5] first in alphabetical order, then in ascending and in descending numerical order, each time logging the result to the console. Use anonymous functions as arguments to the Array.sort() method for the numerical sorts.
// HINT: Refer to the lecture slides on how to do this.
let nums = [12, 9, 33, 8, 71, 2, 41, 5];

// Alphabetical (converted to strings)
let alphaSorted = [...nums].sort();
console.log("Alphabetical sort:", alphaSorted);

// Ascending numeric sort
let ascending = [...nums].sort((a, b) => a - b);
console.log("Ascending sort:", ascending);

// Descending numeric sort
let descending = [...nums].sort((a, b) => b - a);
console.log("Descending sort:", descending);