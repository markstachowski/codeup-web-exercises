$(document).ready(function() {
  "use strict";

  var people = [
    {
      name: "Fred",
      favColor: "red"
    },
    {
      name: "Sally",
      favColor: "blue"
    },
    {
      name: "Tom",
      favColor: "yellow"
    }
  ];

  $('#add-names-btn').click(function () {
    $('#names-list').html(function () {
      {
        var html = '<ul>'
        people.forEach(function (person) {
          html += '<li>'
          html += person.name;
          html += '</li>'
        })
          html += '</ul>'
          return html;
        // let html = '<ul class="name">';
        // html += '<li>' + people[0].name + '</li>';
        // html += '<li>' + people[0].favColor + '</li>';
        // html += '<li>' + people[1].name + '</li>';
        // html += '<li>' + people[1].favColor + '</li>';
        // html += '<li>' + people[2].name + '</li>';
        // html += '<li>' + people[2].favColor + '</li>';
        // html += '</ul>';
        // return html;
      }
    });
  })



});
