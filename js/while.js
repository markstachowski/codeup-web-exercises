"use strict";

// var numberList = [2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192, 16384, 32768, 65536];
// var i = 0;
//
// while (i < numberList.length) {
//     console.log(numberList[i]);
//     i++;
// }
//

var i = 2;

while (i <= 65536) {
    console.log(i);
    i += i - 1;
    i++;
}
