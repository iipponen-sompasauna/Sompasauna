function openNav() {
	
  document.getElementById("menuOverlay").style.width = "100%";
  document.getElementById("maincont2").style.position = "fixed";
  document.getElementById("maincont2").style.overflow = "hidden";
}

function closeNav() {
  document.getElementById("menuOverlay").style.width = "0%";
  document.getElementById("maincont2").style.position = "relative";
  document.getElementById("maincont2").style.overflow = "visible";
}
						