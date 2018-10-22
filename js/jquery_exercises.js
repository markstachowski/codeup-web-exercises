"use strict";

$(document).ready(function() {

$('h1').click(function (e) {
    $(this).css('background', 'green');
});

$('p').dblclick(function (e) {
    $(e.target).css('font-size', '18px');
})

    $('li').hover(
        function() {
            $(this).css('color', 'red');
        },
        function() {
            $(this).css('color', 'black');
        }
    );
    // var multiple = $('h1, p, li').html();
    // alert(multiple);

// $('.codeuup').css('border', '1px solid red');

// var mainID = $('#main-title').html();
// alert(mainID);
//
// var descr = $('#main-description').html();
// alert(descr);
//
// var mainIDLower = $('#main-title-lower').html();
// alert(mainIDLower);
//
// var descrLower = $('#main-description-lower').html();
// alert(descrLower);
//
// var secondaryID = $('#secondary-description').html();
// alert(secondaryID);
//
// var mainList = $('#main-list').html();
// alert(mainList);
//
// var secondaryList = $('#secondary-list').html();
// alert(secondaryList);
//
// var drinkList = $('.drink-list').html();
// alert(drinkList);
//
// var drinks = $('.drinks').html();
// alert(drinks);
//
// var places = $('.places').html();
// alert(places);

});
