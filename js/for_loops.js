"use strict";

// function showMultiplicationTable(num) {
//     for (var i = 1; i <= 10; i += 1) {
//        console.log(num + " * " + i + " = " + (num*i));
//     }
// }
// console.log(showMultiplicationTable(7));


// for (var i = 1; i <=10; i++) {
//     var randNum = Math.floor(Math.random() * 181) + 20;
//     if (randNum%2===0) {
//         console.log(i + ": " + randNum + " is even!");
//     } else {
//         console.log(i + ": " + randNum + " is odd!");
//     }
// }

// for (var i = 1; i <= 9; i+=1) {
//     if (i === 1) {
//         console.log(i);
//     }
//     if (i === 2) {
//         console.log("" + i+i);
//     }
//     if (i === 3) {
//         console.log("" + i+i+i);
//     }
//     if (i === 4) {
//         console.log("" + i+i+i+i);
//     }
//     if (i === 5) {
//         console.log("" + i+i+i+i+i);
//     }
//     if (i === 6) {
//         console.log("" + i+i+i+i+i+i);
//     }
//     if (i === 7) {
//         console.log("" + i+i+i+i+i+i+i);
//     }
//     if (i === 8) {
//         console.log("" + i+i+i+i+i+i+i+i);
//     }
//     if (i === 9) {
//         console.log("" + i+i+i+i+i+i+i+i+i);
//     }
// }

// for (var i=1; i<=9; i+=1) {
//     //console.log(typeof input);
//     for (var j=1; j<=i; j+=1) {
//         var input = "";
//     }
//     console.log(input + i);
// }

for (var i=1; i < 10; i++) {
    var text ='';
    //console.log(typeof input);
    for (var j=1; j<=i; j++) {
        //console.log("inner loop");
        text += i;
    }console.log(text);
}
// for (var i=1; i<=9; i+=1) {
//     console.log(i.toString().repeat(i));
// }
