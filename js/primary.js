$( document ).ready(function () {
  console.log("test");
	loadMain();
});

$('#CAH').click(function(){
  console.log("test2");
  loadCards();
});

function loadMain(){
	$('#main_page').load('main.html');
	window.scrollTo(0,0);
}

function loadCards(){
	$('#main_page').load('CardsAgainstOCaml.html');
	window.scrollTo(0,0);
}

  
