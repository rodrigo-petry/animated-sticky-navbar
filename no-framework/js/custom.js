$(document).ready(function(){
  var scrollTop = 0;
  $(window).scroll(function(){
    scrollTop = $(window).scrollTop();
     $('.count').html(scrollTop);
    if (scrollTop >= 50) {
      $('#global-nav').addClass('scrolled-nav');
      $('.container-nav').addClass('container-nav-size');
    } else if (scrollTop < 50) {
      $('#global-nav').removeClass('scrolled-nav');
      $('.container-nav').removeClass('container-nav-size');
    }
  });
});
