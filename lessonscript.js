

//  ***************This is the lesson we did on Friday the 27th**********************


/*var cellArray=[1,2,3,4,5,6,7,8,9];*/

var popup;

/* var popupOpacity =1.0;*/

var popupSize = 0.0;


fuction pageLoaded() {
  popup = document.getElementById("popup");
}


fuction timeout()
{
	popup.style.width = popup.style.height = 
	60 - (50 * Math.cos(popupSize)) + "px";
	popupSize += 0.05;
	if(popupOpacity <= Math.PI)
		setTimeout("timeout();", 10)
}











function hidePopup(){
	popup.style.display = "none";
}

fuction getPopup(){
	popup.style.display = "inline-block";
}







//Zoom in popup//


