"use strict";

//DANI IF YOU SEE THIS IT WORKED
// YO YO YO SAM

var gender, height, weight, bodyType, cPref, frequency, advtrs;
//var edmBrands = [];
var colors = [];

	function verifyLogIn(){
		var user = document.getElementById('usernameInput').value;
		var pass = document.getElementById('passwordInput').value;
		if(user == "sam19" && pass == "blue")
		{
			showTab(event,'SurveyPage');
		} 
		else
			{ alert("Wrong credentials entered! try again.") }
 
	}

	function storeInfo() {
		
		//this whill store info from the survey in variables which can be used for search criteria
		gender = document.querySelector('input[name="gender"]:checked').value;
		bodyType = document.querySelector('input[name="bodytype"]:checked').value;
		cPref = document.querySelector('input[name="style-comfort"]:checked').value;
		advtrs = document.querySelector	('input[name="adventurous"]:checked').value;
		var colorobjects = document.getElementsByClassName	("down");
		var i = 0;
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

	var counter = 0;
	var img2 = "<img src=\"./pic/outfits/JoJoElec-02.jpg\" border=\"5\">";
	var img3 = "<img src=\"./pic/outfits/JoJoElec-03.jpg\" border=\"5\">";
	var img4 = "<img src=\"./pic/outfits/JoJoElec-04.jpg\" border=\"5\">";
	var img5 = "<img src=\"./pic/outfits/JoJoElec-05.jpg\" border=\"5\">"; 
	var rotation = [img2, img3, img4, img5];
		
	function cycleImages() {
		//fuinction in progress (SQ)
		if(counter > 3)
		{
			showTab(event, 'accountHome');
		}
		document.getElementById('imagePick').innerHTML = rotation[counter];
		counter++;

	}

