"use strict";

//... rest of javascript code

console.log('Hello from JavaScript!');

alert("Hello from JS External html");

// the following line will show the OK/CANCEL confirm dialog
var confirmed = confirm('Are you sure you want to click confirmed?');
console.log(confirmed); // will be either true or false

var userInput = prompt('To be or not to be?:');
console.log('The user entered: ' + userInput);

console.log("Hello from inline JavaScript");

alert("Welcome to my webpage!");

var userInput2 = prompt("What's your favorite color?:");
console.log('The user entered:' + userInput2);

if (userInput2 === userInput2) {
    alert(userInput2 + " " + "is my favorite color too!");
} else {
    console.log(userInput2);
}

