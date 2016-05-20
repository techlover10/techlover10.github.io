$( document ).ready(function () {
  console.log("test");
  loadMain();
});

$('#home').click(function(){
  loadMain();
})

$('#CAH').click(function(){
  loadCards();
});

$('#ClassTeX').click(function(){
  loadClassTeX();
});

$('#Pitbull').click(function(){
  loadPitbull();
});

$('#MTT').click(function(){
  loadMTT();
});

$('#Resume').click(function(){
  loadResume();
});

$('#Experience').click(function(){
  loadExperience();
});

$('#Arrangements').click(function(){
  loadArrangements();
});

$('#Composition').click(function(){
  loadComposition();
});

function loadMain(){
  $('#main_page').load('main.html');
  changeBorderColor("darkGray");
  window.scrollTo(0,0);
}

function loadCards(){
  $('#main_page').load('CardsAgainstOCaml.html');
  changeBorderColor("darkGreen");
  window.scrollTo(0,0);
}

function loadPitbull(){
  $('#main_page').load('Pitbull_Generator.html');
  changeBorderColor("darkGreen");
  window.scrollTo(0,0);
}

function loadClassTeX(){
  $('#main_page').load('ClassTeX.html');
  changeBorderColor("darkGreen");
  window.scrollTo(0,0);
}


function loadMTT(){
  $('#main_page').load('MTT.html');
  changeBorderColor("darkGreen");
  window.scrollTo(0,0);
}

function loadArrangements(){
  $('#main_page').load('Arrangements.html');
  changeBorderColor("darkBlue");
  window.scrollTo(0,0);
}

function loadComposition(){
  $('#main_page').load('Composition.html');
  changeBorderColor("darkBlue");
  window.scrollTo(0,0);
}

function loadResume(){
  $('#main_page').load('Resume.html');
  changeBorderColor("darkRed");
  window.scrollTo(0,0);
}

function loadExperience(){
  $('#main_page').load('Experience.html');
  changeBorderColor("darkRed");
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

