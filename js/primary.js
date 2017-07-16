// Setting for optional args
var OPTIONAL_ARGS = "";

// Dict of loaded pages
var loadedPages = {};

// Check for touch device
function isTouch() {
  return 'ontouchstart' in window        // works on most browsers 
      || 'onmsgesturechange' in window;  // works on IE10 with some false positives
};

// Perfect scrollbar unless touchscreen
if (!isTouch()) {
    // Load perfect scrollbar plugin
    $('.mainPage').perfectScrollbar();
    window.onresize = function(event) {
        $('.mainPage').css({'height': $(window).height() - 1});
    }
}

//// Perfect scrollbar unless mobile
//if (!(/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent))) {
//    // Load perfect scrollbar plugin
//    $('.mainPage').perfectScrollbar();
//    window.onresize = function(event) {
//        $('.mainPage').css({'height': $(window).height()});
//    }
//}

function showHelpCharm(){

  var  charm = $("#about-charm").data("charm");
  if (charm.element.data("opened") === true) {
    charm.close();
  } else {
    charm.open();
  }
}

var colors = {
    about: aboutCol,
    music: musicCol,
    dev: devCol,
    main: homeCol
}

function getColor(str){
    return colors[str] || homeCol;
}

function doesResourceExist(url){
    var http = new XMLHttpRequest();
    http.open('HEAD', url, false);
    http.send();
    return http.status!=404;
}

function handleChanges(newHash, oldhash){
    if (oldhash && newHash.split('?')[0] == oldhash.split('?')[0]){
        newArgsArr = newHash.split('?');
        if (newArgsArr.length > 1 && newArgsArr[1].split('=')[1]){
            loadPage(newArgsArr[1].split('=')[1]);
        } else {
            reset()
        }
        return;
    }
    crossroads.parse(newHash);
}


$( document ).ready(function () {
    hasher.init();
    hasher.changed.add(handleChanges);
    hasher.initialized.add(handleChanges);
});

function finalDisplay(){
    $('#main_page').show();
    $('#masterContainer').scrollTop(0);
    $('#loadingCircle').velocity("fadeOut", { duration: CIRC_DURATION });
}

function redisplay(){
    $('#main_page').waitForImages(finalDisplay);
}

function loadMaster(hashArr, optArgs){
    $('#main_page').hide();
    var loadMasterHelper = function () {
        var resourceName = 'templates/' + hashArr[1]+'.html';
        $('#main_page').load((doesResourceExist(resourceName) ? resourceName : ERROR_PAGE), redisplay);
    }
    $('#loadingCircle').velocity("fadeIn", { duration: (!(hasLoadedBefore(hasher.getHash())) ? CIRC_DURATION : 0), complete: loadMasterHelper});
    hashArr[0] ? changeBorderColor(getColor(hashArr[0])) : changeBorderColor(homeCol);
    titleString = hashArr[1] + ' | Jared Wong';
    document.title= titleString.replace(/_/g, " "); 
    window.scrollTo(0,0);
    OPTIONAL_ARGS = optArgs || "";
    $('.mainPage').css({'height': $(window).height() - 1});
}

function changeBorderColor( color){
    $('#main_nav').velocity({backgroundColor: color}, FADE_OUT_DURATION);
    $('#nav_buttons').velocity({backgroundColor: color}, FADE_OUT_DURATION);
    $('#hamburger').velocity({backgroundColor: color}, FADE_OUT_DURATION);
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
    $('.mainPage').css({'height': $(window).height() - 1});
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

function hasLoadedBefore(){
    if (loadedPages[hasher.getHash()]){
        return true;
    }
    return false;
}
function setHasLoaded(){
    loadedPages[hasher.getHash()] = true;
}

// Crossroads routing
var mainRoute = crossroads.addRoute('/{section}/{id}', function (section, id){
    loadMaster([section, id]);
});

var mainRouteOpt = crossroads.addRoute('/{section}/{id}{?subsection}', function (section, id, subsection){
    loadMaster([section, id], subsection);
});

var emptyRoute = crossroads.addRoute('/', function (){
    loadMaster(['main', 'Home']);
});

var errorRoute1 = crossroads.addRoute('/{err}', function (){
    loadMaster(['main', 'ERROR']);
});

