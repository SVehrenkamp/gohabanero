//gohabanero.js
var menu = 0;
var windowSize = window.innerWidth; 
$('.navbar-toggle').on('click', function(e){
	if(menu === 0){
		menu = 1;
		$('.menu-right').animate({"width":(windowSize*0.65)+"px"}, 0250);
		$(this).animate({"right":((windowSize*0.65)-5)+"px"}, 0250);
	} else{
		menu = 0;
		$('.menu-right').animate({"width":"0px"}, 0250);
		$(this).animate({"right":"-5px"}, 0250);
	}

});