"use strict";

//DANI IF YOU SEE THIS IT WORKED
// YO YO YO SAM

var gender, height, weight, bodyType, cPref, frequency, advtrs;
var edmBrands = [];
var colors = [];

	function storeInfo() {
		gender = document.querySelector('input[name="gender"]:checked').value;
		bodyType = document.querySelector('input[name="bodytype"]:checked').value;
		cPref = document.querySelector('input[name="style-comfort"]:checked').value;
		advtrs = document.querySelector	('input[name="adventurous"]:checked').value;
		var colorobjects = document.getElementsByClassName	("down");
		for (i = 0; i < colorobjects.length; i++) {
			var temp = colorobjects[i].name;
			colors.push(temp);
		}
		console.log(gender);
		console.log(bodyType);
		console.log(cPref);
		console.log(advtrs);
		console.log(colors);

	}	

	function showTab(event, pageName) {
		var i = 0; 
		var tabElements, tabLinkElements;

		tabElements = document.getElementsByClassName("tabbedPage");
		for (i = 0; i < tabElements.length; i++) {
		    tabElements[i].style.display = "none";
		}

		/* This code is only used for activating navigation links */

		/* tabLinkElements = document.getElementsByClassName("tabLink");
		for (i = 0; i < tabLinkElements.length; i++) {
		    tabLinkElements[i].className = 
		  	tabLinkElements[i].className.replace(" active", ""); 
		} */
		document.getElementById(pageName).style.display = "block";
		event.currentTarget.className += " active";
	}	

	$(document).ready(function() {
  		$('a.btn-color').click(function() {
    		$(this).toggleClass("down");
  		});
	});	

