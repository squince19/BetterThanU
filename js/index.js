"use strict";


	const homePage = "SurveyPage";

		function showHomeTab() {
			var startPage = document.getElementById(homePage);
			showTab(event, startPage)
		}

		function showTab(event, pageName) {
		    var i = 0; 
		    var tabElements, tabLinkElements;

		    tabElements = document.getElementsByClassName("tabbedPage");
		    for (i = 0; i < tabElements.length; i++) {
		        tabElements[i].style.display = "none";
		    }

		    /* This code is only used for navigation links */
		    /* tabLinkElements = document.getElementsByClassName("tabLink");
		    for (i = 0; i < tabLinkElements.length; i++) {
		        tabLinkElements[i].className = 
		        	tabLinkElements[i].className.replace(" active", ""); 
		    } */

		    document.getElementById(pageName).style.display = "block";
		    event.currentTarget.className += " active";
		}		