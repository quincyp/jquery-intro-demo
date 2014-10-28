/* app.js
* main script file for our little application
* */

"use strict";

//select all navigation links
var allNavLinks = $('nav a');

//select all imgs
var allImgs = $('img');

//select all sections
var allSections = $('section');

function onReady() {

	$('nav').slideUp(2000);
	$('nav').slideDown();
	allSections.hide();
	allSections.fadeIn(6000);
}

$('#exit-button').dblclick(function() {
	//show the modal
	$('#confirm-exit-modal').modal();
});

$('#confirm-exit-button').click(function() {
	window.location().href = 'http://courses.washington.edu/info343/morris/daily.shtml';
});

allImgs.hover(function() {
	console.log($(this));
	$(this).addClass('awesomesauce');
});

allImgs.mouseout(function() {
	$(this).removeClass('awesomesauce');
});

allNavLinks.click(function() {
	//the cooler jQuery this - its totally money
	console.log();

	//the plain version of this... its ok.
	console.log(this)

	//acts on the jQuery object containing this element
	allSections.hide();
	$($(this).attr('href')).fadeToggle(1000).addClass('awesomesauce');
});

$(onReady);