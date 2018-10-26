(function($) {
  "use strict"; // Start of use strict

  function buildHTML(arr) {
    var html = "";
    arr.forEach(function (dataBlog) {
      html += '<div>' +
          '<h1>' + dataBlog.title + '</h1>' +
          '<p>' + dataBlog.content + '</p>' +
          '<h4>' + dataBlog.categories.join(', ') + '</h4>' +
          '<p>' + dataBlog.date + '</p>' +
          '</div>';
    });
    $('#posts').html(html);
  }

  $('#update-btn').click(function () {
    console.log("button clicked");
    // $.ajax('blog.json').done(function (data) { **remember to make functional by uncommenting.
    //   console.log("button clicked")
    //   buildHTML(data);
    // }).fail(function () {
    //   console.log("Failed ajax request");
    // });
  });


  // Floating label headings for the contact form
  $("body").on("input propertychange", ".floating-label-form-group", function(e) {
    $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
  }).on("focus", ".floating-label-form-group", function() {
    $(this).addClass("floating-label-form-group-with-focus");
  }).on("blur", ".floating-label-form-group", function() {
    $(this).removeClass("floating-label-form-group-with-focus");
  });

  // Show the navbar when the page is scrolled up
  var MQL = 992;

  //primary navigation slide-in effect
  if ($(window).width() > MQL) {
    var headerHeight = $('#mainNav').height();
    $(window).on('scroll', {
        previousTop: 0
      },
      function() {
        var currentTop = $(window).scrollTop();
        //check if user is scrolling up
        if (currentTop < this.previousTop) {
          //if scrolling up...
          if (currentTop > 0 && $('#mainNav').hasClass('is-fixed')) {
            $('#mainNav').addClass('is-visible');
          } else {
            $('#mainNav').removeClass('is-visible is-fixed');
          }
        } else if (currentTop > this.previousTop) {
          //if scrolling down...
          $('#mainNav').removeClass('is-visible');
          if (currentTop > headerHeight && !$('#mainNav').hasClass('is-fixed')) $('#mainNav').addClass('is-fixed');
        }
        this.previousTop = currentTop;
      });
  }

})(jQuery); // End of use strict
