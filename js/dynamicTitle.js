function fixAlign () {
  var currWidth = $(window).width();
  var correctAlign = (currWidth < PHONE_MODE) ? "center" : "right";
  $( ".secTitle").css("text-align", correctAlign);
};
fixAlign();
$( window ).resize(fixAlign);

