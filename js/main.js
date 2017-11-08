$(document).ready(function(){

  $(window).scroll(function() {
    var scrollDistance = $(window).scrollTop();
    if (scrollDistance > 50) {
      $(".navbar-fixed-top").addClass("affix");
    } else {
      $(".navbar-fixed-top").removeClass("affix");
    }
  });

  $('nav a').on('click', function(e) {
    e.preventDefault();
    var target = $(this).attr('href');
    var targetOffset = $(target).offset().top;
    console.log(targetOffset);
    $('html').animate({
        scrollTop: targetOffset
    }, 600);
  });

});
