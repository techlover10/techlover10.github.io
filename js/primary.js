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
hasher.changed.add(handleChanges);
hasher.initialized.add(handleChanges);
hasher.init();


$( document ).ready(function () {
});


function loadMain(){
  $('#main_page').load('main.html');
  changeBorderColor("darkGray");
  document.title="Home | Jared Wong";
  window.scrollTo(0,0);
}

function loadCards(){
  $('#main_page').load('CardsAgainstOCaml.html');
  changeBorderColor("darkGreen");
  document.title="CAH | Jared Wong";
  window.scrollTo(0,0);
}

function loadPitbull(){
  $('#main_page').load('Pitbull_Generator.html');
  changeBorderColor("darkGreen");
  document.title="Pitbull Generator | Jared Wong"
  window.scrollTo(0,0);
}

function loadClassTeX(){
  $('#main_page').load('ClassTeX.html');
  changeBorderColor("darkGreen");
  document.title = "ClassTeX | Jared Wong"
  window.scrollTo(0,0);
}

function loadGenerateEDM(){
$('#main_page').load('EDMGen.html');
changeBorderColor("darkGreen");
document.title = "EDMGen | Jared Wong"
  window.scrollTo(0,0);
}


function loadMTT(){
  $('#main_page').load('MeasuresTempoTimeConverter.html');
  changeBorderColor("darkGreen");
  document.title = "MTT | Jared Wong";
  window.scrollTo(0,0);
}

function loadArrangements(){
  $('#main_page').load('Arrangements.html');
  changeBorderColor("darkBlue");
  document.title = "Arrangements | Jared Wong"
  window.scrollTo(0,0);
}

function loadComposition(){
  $('#main_page').load('Composition.html');
  changeBorderColor("darkBlue");
  document.title = "Composition | Jared Wong";
  window.scrollTo(0,0);
}

function loadResume(){
  $('#main_page').load('Resume.html');
  changeBorderColor("darkRed");
  document.title = "Resume | Jared Wong";
  window.scrollTo(0,0);
}

function loadExperience(){
  $('#main_page').load('Experience.html');
  changeBorderColor("darkRed");
  document.title = "Experience | Jared Wong";
  window.scrollTo(0,0);
}

function changeBorderColor( color){
  $('#main_nav').css("background-color", color);
  $('#nav_buttons').css("background-color", color);
}

function getHashParams() {

  var hashParams = {};
  var e,
  a = /\+/g,  // Regex for replacing addition symbol with a space
  r = /([^&;=]+)=?([^&;]*)/g,
  d = function (s) { return decodeURIComponent(s.replace(a, " ")); },
  q = window.location.hash.substring(1);

  while (e = r.exec(q))
    hashParams[d(e[1])] = d(e[2]);

  return hashParams;
}

