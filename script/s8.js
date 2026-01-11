// JavaScript source code

// 2 
// Attach an initial load event listener to the window object, which hosts all the code to set up further event listeners on document elements once the DOM is fully loaded. If you are unsure how to do this, look at the JavaScript code from the previous tutorial.
window.addEventListener("load", function() {

// 3
// Attach a click event listener to the button with id btn3. The event listener should log the text "Clicked" to the console.
var button3 = document.querySelector("#btn3");
button3.addEventListener("click", action3);

function action3() {
    console.log("button was clicked");
}

// 4
// Attach a click event listener to the button with id btn4. The event listener should get the paragraph with id p4, log its current text to the console, and replace it with "Success".
var button4 = document.querySelector("#btn4");
var idp4 = document.querySelectorAll("#p4");
button4.addEventListener("click", action4);

function action4() {
    console.log(p4.textContent);
    p4.textContent = "Success";
}

// 5
// Attach a click event listener to the button with the id btn5. This event listener should get all paragraph <p> elements and log their text to the console.
var button5 = document.querySelector("#btn5");
var pElement = document.querySelectorAll("p");
button5.addEventListener("click", action5)

function action5() {
    console.log(p.textContent);
    console.log(package.textContent);
}
// 6
// Investigate mouse events (e.g. mousedown, mouseup, mousemove, click, etc.) by registering a listener for each event on the div with id div6. The listeners should log event properties to the console including the event type and the mouse position.
// HINT: To complete this question, first research MouseEvent and general Event properties at https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent and https://developer.mozilla.org/en-US/docs/Web/API/Event
let event = ["mousedown", "mouseup", "mousemove", "click"];

var event6 = document.querySelector("#div6");
for ( i = 0; i < event6.length; i++ ) {
    console.log(event6[i] + event6[i].textContent);
}

// 7
// Attach a click listener to the anchor element with id a7, which logs the link target (href attribute) to the console. The listener should prevent the default action of the anchor.
var button7 = document.querySelector("#a7");
button7.addEventListener("click", function (event6) {
    event6.preventDefault();
    console.log(this.getAttribute("href"));
});
    

// 8
// Attach a click event listener to all table cell <td> elements, which replaces the current cell text with "Success" when clicked.
var button8 = document.querySelectorAll("td");
button8.forEach( td => {td.addEventListener("click", function() {
    this.textContent = "Success";
})})

});