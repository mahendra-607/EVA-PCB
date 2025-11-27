
$( document ).ready(function() {
    $(window).bind('scroll', function () {
              if ($(window).scrollTop() > 5) {
                      $(".main-nav").addClass('animation');
              } else {
                  $(".main-nav").removeClass('animation'); 
              }
          });
  });