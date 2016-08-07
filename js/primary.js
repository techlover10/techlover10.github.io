//Color defs from Metro CSS for different page categories
var aboutCol = "#9a1616";
var musicCol = "#16499a";
var devCol = "#128023";
var homeCol = "#a9a9a9";

var colors = {
  about: aboutCol,
  music: musicCol,
  dev: devCol,
  main: homeCol
}

function getColor(str){
  return colors[str];
}


function handleChanges(newHash, oldhash){
  x = newHash.split(/\//);
  loadMaster(x);
}


$( document ).ready(function () {
hasher.changed.add(handleChanges);
hasher.initialized.add(handleChanges);
hasher.init();
if (!hasher.getHash()){
  hasher.setHash('main/Home');
}
});

function finalDisplay(){
  $('#main_page').show();
  $('#loadingCircle').velocity("fadeOut", { duration: 500 });
}

function redisplay(){
  $('#main_page').waitForImages(finalDisplay);
}

function loadMaster(hashArr){
  $('#main_page').hide();
  var loadMasterHelper = function () {
    $('#main_page').load(hashArr[1]+'.html', redisplay);
  }
  $('#loadingCircle').velocity("fadeIn", { duration: 500, complete: loadMasterHelper});
  hashArr[0] ? changeBorderColor(getColor(hashArr[0])) : changeBorderColor(homeCol);
  titleString = hashArr[1] + ' | Jared Wong';
  document.title= titleString.replace(/_/g, " "); 
  window.scrollTo(0,0);
}

function changeBorderColor( color){
  $('#main_nav').velocity({backgroundColor: color}, 250);
  $('#nav_buttons').velocity({backgroundColor: color}, 250);
}

function loadPage(name){
  //$('#title').velocity("fadeOut", {duration: 500});
  $('#title').velocity("slideUp", { duration: 500 });
  $('#infoExperience').load(name + '.html', calculateHeight);
  function calculateHeight(){
    var height = $('#infoExperience').height() + 100;
    $('#mainExperience').velocity({height: height});
    $('#infoExperience').velocity("fadeIn", { duration: 500});
  }
  $('#buttons').velocity({ left: 20});
  $('#reset').velocity('fadeIn', {duration: 500});
}

function reset(){
  $('#title').velocity("slideDown", {duration: 500});
  $('#infoExperience').velocity("fadeOut", {duration: 200});
  $('#reset').velocity('fadeOut', {duration: 500});
  $('#mainExperience').velocity({height: 70});
}
