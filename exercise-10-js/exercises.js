/*
First exercise for JS
 */
console.log("")
console.log("0. -> Getting familiar with logic");
var a = 1;
var b = a++;
var c = ++a;
// what is value of each of a, b, and c?

console.log(a);
console.log(b);
console.log(c);

var d = "hello";
var e = false;

d++;
e++;

console.log(d);
console.log(e);

var perplexed; // perplexed is undefined (no value is assigned)
perplexed + 2;

console.log(perplexed);

var price = 2.7;
price.toFixed(2);

console.log(price);

/*var price = "2.7";
price.toFixed(2);

console.log(price);
*/

isNaN(0)
console.log(isNaN);

isNaN(1)
console.log(isNaN);

isNaN("")
console.log(isNaN);

isNaN("string")
console.log(isNaN);

isNaN("0")
console.log(isNaN);

isNaN("1")
console.log(isNaN);

isNaN("3.145")
console.log(isNaN);

isNaN(Number.MAX_VALUE)
console.log(isNaN);

isNaN(Infinity)
console.log(isNaN);

isNaN("true")
console.log(isNaN);

isNaN(true)
console.log(isNaN);

isNaN("false")
console.log(isNaN);

isNaN(false)
console.log(isNaN);

// to illustrate why the isNaN() function is needed:
NaN == NaN
console.log(isNaN);

var sample = "Hello Codeup";
console.log(sample.length);

console.log(sample.toUpperCase());

console.log(sample.toLowerCase());

sample = 'Hello' + '\xa0' + 'Codeup' + '\xa0' + 'Students';
console.log(sample);

sample = 'Hello' + '\xa0' + 'Codeup' + '\xa0' + 'Students';
console.log(sample.replace("Students", "Class"));

console.log(sample.indexOf("c"));

console.log(sample.indexOf("C"));

console.log(sample.substring(6, 12));

// Programming section
// Problem 1
console.log("")
console.log("1. -> Exercise 1 - Movie rental cost comparison");
var mermaid = 3; bear = 5; hercules = 1;
var rentmermaid = mermaid * 3;
var rentbear = bear * 3;
var renthercules = hercules *3;
console.log('The amount to rent The little mermaid is', rentmermaid);
console.log('The amount to rent Big Bear is', rentbear);
console.log('The amount to rent Hercules is', renthercules);
console.log('Total amount paid for movies is ~>', rentmermaid + rentbear + renthercules);

// Problem 2
console.log("")
console.log("2. -> Exercise 2 - Working for Amazon, Google, and Facebook");
var Google = 400; Amazon = 380; Facebook = 350;
var paidGoogle = Google * 6;
var paidAmazon = Amazon * 4;
var paidFacebook = Facebook * 10;
console.log('Total compensation from Google, Amazon, and Facebook is ~>', paidGoogle + paidAmazon + paidFacebook);

// Problem 3
console.log("")
console.log("3. -> Exercise 3 - Codeup Username & Password");
var username = 'codeup';
var password = 'notastrongpassword';

if (password.length >= 5) {
    console.log("Congrats your password is 5 characters or more!");
} else {
    console.log("Error your password needs to be at least 5 characters or more");
}

if (password === username) {
    console.log("Error your password cannot have username");
} else {
    console.log("Congrats your password does not contain username");
}

if (username.length >= 20) {
    console.log("Error your username cannnot be greater than 20 characters");
} else {
    console.log("Congrats your username is below 20 characters");
}

if (username === username.trim()) {
    console.log("Congrats no whitespaces in username");
} else {
    console.log("Error no whitespace allowed in username");
}

if (password === password.trim()) {
    console.log("Congrats no whitespaces in password");
} else {
    console.log("Error no whitespace allowed in password");
}

console.log("");
console.log("~FIN~");
console.log("");

