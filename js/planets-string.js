(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsStringBRtags = "Mercury<br>Venus<br>Earth<br>Mars<br>Jupiter<br>Saturn<br>Uranus<br>Neptune";
    var planetsStringNewLine = "Mercury\nVenus\nEarth\nMars\nJupiter\nSaturn\nUranus\nNeptune";
    var planetsStringHTMLlist = "<ul><li>Mercury</li><li>Venus</li><li>Earth</li><li>Mars</li><li>Jupiter</li><li>Saturn</li><li>Uranus</li><li>Neptune</li></ul>";


    //var planetsArray;

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */
        var planetsArray = planetsString.split("|");
        //console.log(planetsArray);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     *
     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */
        console.log(planetsStringBRtags);
        console.log(planetsStringHTMLlist);

    // var options = [
    //     set0 = ['Option 1','Option 2'],
    //     set1 = ['First Option','Second Option','Third Option']
    // ];
    // var planetsStringHTMLlist = planetsStringHTMLlist.split();
    //
    // function makeUL(array) {
    //     // Create the list element:
    //     //var list = document.createElement('ul');
    //
    //     for(var i = 0; i < planetsStringHTMLlist.length; i++) {
    //         // Create the list item:
    //        // var item = document.createElement('li');
    //
    //         // Set its contents:
    //         item.appendChild(document.createTextNode(planetsStringHTMLlist[i]));
    //
    //         // Add it to the list:
    //         //list.appendChild(item);
    //     }
    //
    //     // Finally, return the constructed list:
    //     return array;
    // }

// Add the contents of options[0] to #foo:
    document.body.innerHTML = planetsStringBRtags

})();
