"use strict";
//***** Problem 1.*****************************************************************
//     Create a file named while.js in the js directory.
//     Create a while loop that uses console.log() to create the output shown below.
//
//     2
//     4
//     8
//     16
//     32
//     64
//     128
//     256
//     512
//     1024
//     2048
//     4096
//     8192
//     16384
//     32768
//     65536
//**********************************************************************************
// Problem 1 and Method 1
// var numberList = [2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192, 16384, 32768, 65536];
// var i = 0;
//
// while (i < numberList.length) {
//     console.log(numberList[i]);
//     i++;
// }
// Problem 1 and Method 2
// var i = 2;
//
// while (i <= 65536) {
//     console.log(i);
//     i += i - 1;
//     i++;
// }
// Problem 1 and Method 3
// var i = 2;
//
// while (i <= 65536) {
//     console.log(i);
//     i *= 2;
// }
////////////////////////////////////////////////////////////////////////////////////////////////////////////
//***** Problem 2.******************************************************************************************
// An ice cream seller can't go home until she sells all of her cones. Write a JS program that generates a random number between 50 and 100 representing the amount of cones to sell. Your code should generate numbers between 1 and 5, simulating the amount of cones being bought by her clients. Use a do-while loop to log to the console the amount of cones sold to each person. This is how you get the random numbers.
// This is how you get a random number between 50 and 100
var allCones = Math.floor(Math.random() * 50) + 50;
// This expression will generate a random number between 1 and 5
var person = Math.floor(Math.random() * 5) + 1;
//********************************************************************************************************
// Problem 2 and Method 1
// var x = 1;
// do {
//     console.log(x);
//     x++;
// } while (person <= allCones);

