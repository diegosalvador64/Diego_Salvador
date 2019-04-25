// JavaScript Document
//Inicio tratamiento Acordeón

function mostrarAcordeon() {
	var acc = document.getElementsByClassName("accordion");
	var i;

	for (i = 0; i < acc.length; i++) {
	  acc[i].addEventListener("click", function() {
		this.classList.toggle("activeAcordeon");
		var panel = this.nextElementSibling;
		if (panel.style.display === "block") {
		  panel.style.display = "none";
		} else {
		  panel.style.display = "block";
		  panel.style.width = "100%";
		}
	  });
	}
}
//Fin tratamiento Acordeón

//Inicio Tabs

function openFoto(evt, nombreFoto) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
     tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  
  document.getElementById(nombreFoto).style.display = "block";
  document.getElementById(nombreFoto).style.width = "100%";
  evt.currentTarget.className += " active";
}

//Fin Tabs