var animateInSvgLogo = function(){
	var path = document.querySelector('#logo');
	var length = path.getTotalLength();
	// Clear any previous transition
	path.style.transition = path.style.WebkitTransition =
	  'none';
	// Set up the starting positions
	path.style.strokeDasharray = length + ' ' + length;
	path.style.strokeDashoffset = length;
	// Trigger a layout so styles are calculated & the browser
	// picks up the starting position before animating
	path.getBoundingClientRect();
	// Define our transition
	path.style.transition = path.style.WebkitTransition =
	  'stroke-dashoffset 2.5s ease-in-out';
	// Go!
	// setTimeout(function(){ 
		path.style.strokeDashoffset = '0'; 
	// }, 2000);
};

var animateOutSvgLogo = function(){
	var path = document.querySelector('#logo');
	var length = path.getTotalLength();
	// Clear any previous transition
	// path.style.transition = path.style.WebkitTransition =
	  'none';
	// Set up the starting positions
	path.style.strokeDasharray = length + ' ' + length;
	path.style.strokeDashoffset = '0';
	// Trigger a layout so styles are calculated & the browser
	// picks up the starting position before animating
	path.getBoundingClientRect();
	// Define our transition
	path.style.transition = path.style.WebkitTransition =
	  'stroke-dashoffset 0.5s ease';
	// Go!
	// setTimeout(function(){ 
		path.style.strokeDashoffset = length; 
	// }, 2000);
};

window.onload = function(){
	animateInSvgLogo();
};

$( ".bs-logo" ).hover(
  function() {
    animateOutSvgLogo();
  }, function() {
    animateInSvgLogo();
  }
);