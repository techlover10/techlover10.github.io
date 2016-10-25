//Color defs from Metro CSS for different page categories
var aboutCol = "#9a1616";
var musicCol = "#16499a";
var devCol = "#128023";
var homeCol = "#a9a9a9";
var PHONE_MODE = 641; // threshold for phone display
var ERROR_PAGE = "templates/error.html";
var CIRC_DURATION = 300;
var FADE_SLIDE_DURATION = 500;
var FADE_OUT_DURATION = 200;
var COLOR_CHANGE_DURATION = 250;

var colors = {
  about: aboutCol,
  music: musicCol,
  dev: devCol,
  main: homeCol
}

function getColor(str){
  return colors[str];
}

function doesResourceExist(url){
  var http = new XMLHttpRequest();
  http.open('HEAD', url, false);
  http.send();
  return http.status!=404;
}

function handleChanges(newHash, oldhash){
  splitParams = newHash.split('?');
  mainRoute = splitParams[0].split(/\//);
  loadMaster(mainRoute, splitParams[1]);
}


$( document ).ready(function () {
  hasher.init();
  hasher.changed.add(handleChanges);
  if (!hasher.getHash()){
    hasher.setHash('main/Home');
  }else{
    hasher.initialized.add(handleChanges);
  }
});

function finalDisplay(){
  $('#main_page').show();
  $('#loadingCircle').velocity("fadeOut", { duration: CIRC_DURATION });
}

function redisplay(){
  $('#main_page').waitForImages(finalDisplay);
}

function loadMaster(hashArr, optionalArgs){
  $('#main_page').hide();
  var loadMasterHelper = function () {
    var resourceName = 'templates/' + hashArr[1]+'.html';
    $('#main_page').load((doesResourceExist(resourceName) ? resourceName : ERROR_PAGE), redisplay);
  }
  $('#loadingCircle').velocity("fadeIn", { duration: CIRC_DURATION, complete: loadMasterHelper});
  hashArr[0] ? changeBorderColor(getColor(hashArr[0])) : changeBorderColor(homeCol);
  titleString = hashArr[1] + ' | Jared Wong';
  document.title= titleString.replace(/_/g, " "); 
  window.scrollTo(0,0);
    if (optionalArgs){
      loadPage(optionalArgs);
    };
}

function changeBorderColor( color){
  $('#main_nav').velocity({backgroundColor: color}, FADE_OUT_DURATION);
  $('#nav_buttons').velocity({backgroundColor: color}, FADE_OUT_DURATION);
}

function loadPage(name){
  //$('#title').velocity("fadeOut", {duration: 500});
  $('#title').velocity("slideUp", { duration: FADE_SLIDE_DURATION });
  $('#infoExperience').load('templates/' + name + '.html', calculateHeight);
  function calculateHeight(){
    var height = $('#infoExperience').height() + 100;
    $('#mainExperience').velocity({height: height});
    $('#infoExperience').velocity("fadeIn", { duration: FADE_SLIDE_DURATION});
  }
  $('#buttons').velocity({ left: 20});
  $('#reset').velocity('fadeIn', {duration: FADE_SLIDE_DURATION});
}

function loadUpperDiv(name){
  //$('#title').velocity("fadeOut", {duration: 500});
  $('#hamburger').velocity("slideDown", { duration: FADE_SLIDE_DURATION });
  function calculateHeight(){
    var height = $('#hamburger').height() + 100;
    $('#mainPage').velocity({height: height});
  }
  $('#buttons').velocity({ left: 20});
  $('#reset').velocity('fadeIn', {duration: FADE_SLIDE_DURATION});
}

function reset(){
  $('#title').velocity("slideDown", {duration: FADE_SLIDE_DURATION});
  $('#infoExperience').velocity("fadeOut", {duration: FADE_OUT_DURATION});
  $('#reset').velocity('fadeOut', {duration: FADE_SLIDE_DURATION});
  $('#mainExperience').velocity({height: 70});
}

