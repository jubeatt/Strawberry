const el = document.getElementById("showViewPort");  // HTMLelement
	
function checkViewPort(){
	el.style.display = "block";
	el.textContent = "width: " + window.innerWidth + "px";
}

window.addEventListener("resize", checkViewPort, false);  // binding