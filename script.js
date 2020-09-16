

$(document).ready(function() {

  var scrollTop = $(".scrollTop");

  $(window).scroll(function() {
    var topPos = $(this).scrollTop();

    if (topPos > 520) {
      $(scrollTop).addClass('active');
    } else {
      $(scrollTop).removeClass('active');
    }
  }); 

  $(scrollTop).click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 2000);
  }); 

}); 