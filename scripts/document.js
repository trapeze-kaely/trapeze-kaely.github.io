document.write(

 '<script src="scripts/jquery.slim.min.js"></script>' +
 // '<script src="scripts/scroll.js"></script>' +
 '<script>' +

  '$("html").prepend("\\n ").append("\\n");' +
  '$("body").html( $("body").html().slice(0, -221) );' +
  '$("script").remove();' +

 '</script>'

)