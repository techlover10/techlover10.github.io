function fixSize () {
  var currWidth = $(window).width();
  var currHeight = $(window).height();
  $( ".fullframe").css("height", currHeight - 46);
  $( ".fullframe").css("width", currWidth);
};
fixSize();
$( window ).resize(fixSize);

