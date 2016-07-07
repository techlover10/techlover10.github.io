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
hasher.setHash('main/Home');
});

function loadMaster(hashArr){
  $('#main_page').load(hashArr[1]+'.html');
  hashArr[0] ? changeBorderColor(getColor(hashArr[0])) : changeBorderColor(homeCol);
  titleString = hashArr[1] + ' | Jared Wong';
  document.title= titleString.replace(/_/g, " "); 
  window.scrollTo(0,0);
}

function changeBorderColor( color){
  $('#main_nav').velocity({backgroundColor: color}, 250);
  $('#nav_buttons').velocity({backgroundColor: color}, 250);
}

