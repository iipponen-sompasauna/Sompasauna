function openNav() {
	
  document.getElementById("menuOverlay").style.width = "100%";
  document.getElementById("maincont").style.position = "fixed";
  document.getElementById("maincont").style.overflow = "hidden";
}

function closeNav() {
  document.getElementById("menuOverlay").style.width = "0%";
  document.getElementById("maincont").style.position = "relative";
  document.getElementById("maincont").style.overflow = "visible";
}
						