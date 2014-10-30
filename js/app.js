/* app.js
* main script file for our little application
* */

"use strict";

var tile = 'img/sec1.jpg'//'any kind of data assoc with element';
var info = 'some other data';

var gameBoard = $('#game-board');

//create and configure a new <img> element...
var newTile = $(document.createElement('img'));

newTile.attr('src', 'img/background.jpg');
newTile.attr('alt', 'photo of nature');
newTile.attr('width', '250px');


//use the .data() method to associate extra data with HTML elements
newTile.data('assocTile', tile) //first param is a key
newTile.data('tileInfo', info) //second param is a value

//add to the board
gameBoard.append(newTile);

//when an image in game-board is cicked
$('#game-board img').click(function(){
	//remember that 'this' refers to the DOM element that raised the event
	//wrapped in jQuery $() to get more functionality
	var clickedImage = $(this);
	var tileData1 = clickedImage.data('assocTile');//var to data
	var tileData2 = clickedImage.data('tileInfo');

	clickedImage.attr('src', tileData1);//on event chang attr data
	clickedImage.attr('alt', tileData2);

	console.log(tileData1);//shows in log
	console.log(tileData2);
});



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