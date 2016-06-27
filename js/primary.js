//Color defs from Metro CSS for different page categories
var aboutCol = "#9a1616";
var musicCol = "#16499a";
var devCol = "#128023";
var homeCol = "#a9a9a9";
function handleChanges(newHash, oldhash){
  switch(newHash){
    case "":
      loadMain();
      break;
    case "CAH":
      loadCards();
      break;
    case "ClassTeX":
      loadClassTeX();
      break;
    case "Pitbull":
      loadPitbull();
      break;
    case "MTT":
      loadMTT();
      break;
    case "GenerateEDM":
      loadGenerateEDM();
      break;
    case "Resume":
      loadResume();
      break;
    case "Experience":
      loadExperience();
      break;
    case "Arrangements":
      loadArrangements();
      break;
    case "Composition":
      loadComposition();
      break;
  }
}


$( document ).ready(function () {
hasher.changed.add(handleChanges);
hasher.initialized.add(handleChanges);
hasher.init();
});


function loadMain(){
  $('#main_page').load('main.html');
  changeBorderColor(homeCol);
  document.title="Home | Jared Wong";
  window.scrollTo(0,0);
}

function loadCards(){
  $('#main_page').load('CardsAgainstOCaml.html');
  changeBorderColor(devCol);
  document.title="CAH | Jared Wong";
  window.scrollTo(0,0);
}

function loadPitbull(){
  $('#main_page').load('Pitbull_Generator.html');
  changeBorderColor(devCol);
  document.title="Pitbull Generator | Jared Wong"
  window.scrollTo(0,0);
}

function loadClassTeX(){
  $('#main_page').load('ClassTeX.html');
  changeBorderColor(devCol);
  document.title = "ClassTeX | Jared Wong"
  window.scrollTo(0,0);
}

function loadGenerateEDM(){
$('#main_page').load('EDMGen.html');
changeBorderColor(devCol);
document.title = "EDMGen | Jared Wong"
  window.scrollTo(0,0);
}


function loadMTT(){
  $('#main_page').load('MeasuresTempoTimeConverter.html');
  changeBorderColor(devCol);
  document.title = "MTT | Jared Wong";
  window.scrollTo(0,0);
}

function loadArrangements(){
  $('#main_page').load('Arrangements.html');
  changeBorderColor(musicCol);
  document.title = "Arrangements | Jared Wong"
  window.scrollTo(0,0);
}

function loadComposition(){
  $('#main_page').load('Composition.html');
  changeBorderColor(musicCol);
  document.title = "Composition | Jared Wong";
  window.scrollTo(0,0);
}

function loadResume(){
  $('#main_page').load('Resume.html');
  changeBorderColor(aboutCol);
  document.title = "Resume | Jared Wong";
  window.scrollTo(0,0);
}

function loadExperience(){
  $('#main_page').load('Experience.html');
  changeBorderColor(aboutCol);
  document.title = "Experience | Jared Wong";
  window.scrollTo(0,0);
}

function changeBorderColor( color){
  console.log(color);
  $('#main_nav').animate({backgroundColor: color}, 250);
  $('#nav_buttons').animate({backgroundColor: color}, 250);
}

