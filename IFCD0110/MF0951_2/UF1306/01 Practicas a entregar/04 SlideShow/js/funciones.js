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


/* Inicio tratamiento PORTFOLIO GALLERY FILTERING */


filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("columnP");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "showP");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "showP");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}


// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btnP");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("activeP");
    current[0].className = current[0].className.replace(" activeP", "");
    this.className += " activeP";
  });
}

/* Fin tratamiento PORTFOLIO GALLERY FILTERING */