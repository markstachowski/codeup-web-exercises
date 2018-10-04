//(function () {
"use strict";

//... rest of javascript code

alert("This is the start of the JS extra exercises!");

    var confirmed = confirm('Would you like to participate in the JS exercises?');
    console.log(confirmed);
        if (confirmed === true) {

            // 1. Counting the Number of Characters
            // Create a program that prompts for an input string and dis- plays output that shows the input string and the number of characters the string contains.
            //     Example Output
            // What is the input string? Homer
            //     Homer has 5 characters.
            //     Constraints
            // - Be sure the output contains the original string.
            // - If the user enters nothing, stat that the user must enter something in the program

            var userInput = prompt("Please type anything: ");
            console.log(userInput);
            alert("The user entered: " + userInput);
            alert("The user input had " + userInput.length + " characters");

            if ((userInput === "") || (userInput === NaN) || (userInput === undefined)) {
                alert("The user must enter something in the program, please try again.");
            } else {
                alert("Congrats complete!");
            }

            // 2. Mad Lib
            // Mad libs are a simple game where you create a story template with blanks for words. You, or another player, then construct a list of words and place them into the story, creating an often silly or funny story as a result.
            // Create a simple mad-lib program that prompts for a noun, a verb, an adverb, and an adjective and injects those into a story that you create.
            //  Example Output
            //  Enter a noun: dog
            //  Enter a verb: walk
            //  Enter an adjective: blue
            //  Enter an adverb: quickly
            // Do you walk your blue dog quickly? That's hilarious!
            //  Constraints
            //   • Use a single output statement for this program.
            //   • If your language supports string interpolation or string
            //      substitution, use it to build up the output.

            var madlibsNoun = prompt("Enter a noun: ");
            var madlibsVerb = prompt("Enter a verb: ");
            var madlibsAdjective = prompt("Enter an Adjective: ");
            var madlibsAdverb = prompt("Enter an Adverb: ");

            alert("Do you eat " + madlibsNoun + " " + madlibsVerb + " " + madlibsAdjective + " " + madlibsAdverb + "? Cool, cool, cool.");

            // 3. Simple math
            // Example Output
            // What is the first number? 10
            //     What is the second number? 5
            //     10 + 5 = 15
            // 10 - 5 = 5
            // 10 * 5 = 50
            // 10 / 5 = 2
            // Constraints
            //   • Values coming from users will be strings. Ensure that you convert these values to numbers before doing the math.
            //   • Keep the inputs and outputs separate from the numerical conversions and other processing.
            //   • Generate a single output statement with line breaks in the appropriate spots.

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
            var width1 = prompt("What is the width of the room in feet? ");
            var imperial = Number(0.09290304.toFixed(2));
            var areaTotal = parseInt(length1)*parseInt(width1);

            alert("You entered dimensions of " + length1 + " feet by " + width1 + " feet.");
            alert( 'The area is' + ' = ' + (parseInt(length1)*parseInt(width1)));
            alert(imperial*areaTotal + " Square meters" );

            // 5. Pizza Party
            // Division isn’t always exact, and sometimes you’ll write programs that will need to deal with the leftovers as a whole number instead of a decimal.
            //     Write a program to evenly divide pizzas. Prompt for the number of people, the number of pizzas, and the number of slices per pizza. Ensure that the number of pieces comes out even. Display the number of pieces of pizza each person should get. If there are leftovers, show the number of leftover pieces.
            //     Example Output
            // How many people? 8
            //     How many pizzas do you have? 2
            //     8 people with 2 pizzas
            // Each person gets 2 pieces of pizza.
            //     There are 0 leftover pieces.

            var peopleEating = prompt("How many people are going to eat pizza? ");
            var pizzaPie = prompt("How many pizzas did you order? ");
            var pizzaSlices = prompt("How many slices are in a pizza? ");
            var pizzaRemainder = parseInt(pizzaSlices / peopleEating);
            alert(peopleEating + " people with " + pizzaPie + " pizzas.");
            alert("Each person gets " + pizzaSlices + " pieces of pizza.");
            alert("Total is " + pizzaPie*pizzaSlices + " pieces of pizza.");
            alert("There are " + pizzaRemainder + " leftover pieces.");

            function countLetters(){
                var input = prompt("Enter input: ");
                input = (input.toUpperCase().trim());
                var inputLength = input.length;
                alert("Input had " + inputLength + " characters.");
                return input;
            }
            console.log(countLetters());

            function hasLetterA() {
                var input2 = prompt("Enter input: ");
                if (input2.match(/[a]/i)) {
                    alert("Your input has the letter 'a'.");
                } else {
                    alert("Your input does not contain 'a'");
                }
                return input2;
            }
            console.log(hasLetterA());

            function hasLetterB() {
                var input = prompt("Enter a word with B in it");
                var output;
                var b = input.indexOf("b");
                var bB = input.indexOf("B");
                output = (b >= 0) || (bB >= 0);

                return output;
            }
            console.log(hasLetterB());
        }

else {
            alert("Winners never quit JavaScript and quitters never win :_( ");
        }
//})();
