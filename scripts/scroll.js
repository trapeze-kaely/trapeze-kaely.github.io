if (innerWidth / innerHeight > 3 / 4) $(window).scroll(function() { 

 if ($(document).height() - $(window).height() - $(window).scrollTop() <= 30) {

  $("#navigation").css("bottom",  "0") } else {
  $("#navigation").removeAttr("style") }

})