$( document).ready(function () {
	loadMain();
});

function loadMain(){
	$('#main_page').load('main.html');
	window.scrollTo(0,0);
}