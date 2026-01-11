// JavaScript source code
// 2
// Declare an array with friend names
let friends = ["Benjamin", "Lily", "Emily", "Gabriel"];

// 2a
// Add two new friends to the array called Isabella and Charlotte.
friends.push("Isabella", "Charlotte");
console.log("Updated : ", friends);

// 2b
// Change the last element in the array to Miles
friends[friends.length - 1] = 'Miles';
console.log("Updated : ", friends);

// 2c
// Using the splice() method, replace the second and third friends in the array with a single new friend Aria
friends.splice(1, 2, 'Aria');
console.log("Updated : ", friends);

// 2d
// Using the pop() method, remove the last element of the array and then insert it at index 0 using the unshift() method
let lastOfTheList = friends.pop();
friends.unshift(lastOfTheList);
console.log("Updated : ", friends);

// 2e
// Reverse the process by using the shift() method to remove the first element of the array and the push() method to add it at the end of the array
let firstOfTheList = friends.shift();
friends.push(firstOfTheList);
console.log("Updated : ", friends);

// 2f
// Using the indexOf() method, find the index of the name Aria in the array
let indexAria = friends.indexOf('Aria');
console.log("Index of 'Aria' : ", friends);

// 2g
// Using the indexOf() method, log true to the console if the array contains the name Bob or false otherwise. Try doing this in a single statement.
console.log(friends.indexOf('Bob') !== -1);

// 2h
// Using the sort() method, sort the array in ascending alphabetical order
friends.sort();
console.log("Sorted : ", friends);

// 2i
// Using the join() method, create a string of all names separated by a comma space (", ")
let nameStr = friends.join(", ");
console.log("Updated : ", nameStr);


// 3
// Declare a new variable count, then loop over the array friends and add the length of each name to the count variable. Log to the console the total number of characters in all names and the average numbers of characters per name.
let count = 0;
for (let i = 0; i < friends.length; i++) {
    count = count + friends[i].trim().length;
}
let average = count / friends.length;
console.log("Total character of friend : ", count);
console.log("Average characters per name : ", average.toFixed(2));