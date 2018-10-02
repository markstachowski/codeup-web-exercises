"use strict";

//... rest of javascript code

alert("This is the start of the JS extra exercises!");

    var confirmed = confirm('Would you like to participate in the JS exercises?');
    console.log(confirmed);
        if (confirmed === true) {

            var userInput = prompt("Please type anything: ");
            console.log(userInput);
            alert("The user entered: " + userInput);
            alert("The user input had " + userInput.length + " characters");

            if ((userInput === "") || (userInput === NaN) || (userInput === undefined)) {
                alert("The user must enter something in the program, please try again.");
            } else {
                alert("Congrats complete!");
            }

            var madlibsNoun = prompt("Enter a noun: ");
            var madlibsVerb = prompt("Enter a verb: ");
            var madlibsAdjective = prompt("Enter an Adjective: ");
            var madlibsAdverb = prompt("Enter an Adverb: ");

            console.log(madlibsNoun);
            console.log(madlibsVerb);
            console.log(madlibsAdjective);
            console.log(madlibsAdverb);

            alert("Do you eat " + madlibsNoun + " " + madlibsVerb + " " + madlibsAdjective + " " + madlibsAdverb + "? Cool, cool, cool.");

            var string1 = prompt("What is the first number? ");
            var string2 = prompt("What is the second number? ");

            alert( string1 + ' + ' + string2 + ' = ' + (parseInt(string1)+parseInt(string2)));
            alert( string1 + ' - ' + string2 + ' = ' + (parseInt(string1)-parseInt(string2)));
            alert( string1 + ' * ' + string2 + ' = ' + (parseInt(string1)*parseInt(string2)));
            alert( string1 + ' / ' + string2 + ' = ' + (parseInt(string1)/parseInt(string2)));
            //alert( string1 + ' / ' + string2 + ' = ' + "penis");

            /*
            4. Area of a rectangular room
            When working in a global environment, you’ll have to present information in both metric and Imperial units. And you’ll need to know when to do the conversion to ensure the most accurate results.
            Create a program that calculates the area of a room. Prompt the user for the length and width of the room in feet. Then display the area in both square feet and square meters.
              Example Output
                  What is the length of the room in feet? 15
                  What is the width of the room in feet? 20
                  You entered dimensions of 15 feet by 20 feet.
                  The area is
                  300 square feet
                  27.871 square meters
            The formula for this conversion is
            m^2 = f^2 × 0.09290304
            Constraints
            • Keep the calculations separate from the output. • Use a constant to hold the conversion factor.
            */

            var length1 = prompt("What is the length of the room in feet? ");
            var width2 = prompt("What is the width of the room in feet? ");

            alert( string1 + ' + ' + string2 + ' = ' + (parseInt(string1)+parseInt(string2)));
            alert( string1 + ' - ' + string2 + ' = ' + (parseInt(string1)-parseInt(string2)));
            alert( string1 + ' * ' + string2 + ' = ' + (parseInt(string1)*parseInt(string2)));
            alert( string1 + ' / ' + string2 + ' = ' + (parseInt(string1)/parseInt(string2)));
            //alert( string1 + ' / ' + string2 + ' = ' + "penis");

        } else {
            alert("Winners never quit JavaScript and quitters never win :_( ");
        }



