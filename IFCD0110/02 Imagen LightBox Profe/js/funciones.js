// JavaScript Document


//FUNCIÓN ABRIR CAJA MODAL CON LA IMAGEN
function abrirFoto(foto) {

/*	var extraer = foto;
	alert(extraer);*/

//Estraer el src de la imagen que se pulsa.	
	var imagen = '<img class="imagen" src="' + foto.src + '" alt="' + foto.alt + 
	' style="width:100%" onClick="cerrarFoto()">';

//Mostrar texto alternativo en la etiqueta con clase leyenda
	document.getElementsByClassName("leyenda")[0].innerHTML = foto.alt;
	
//Mostrar la imagen dentro de la etiqueta demo
	document.getElementById("demo").innerHTML = imagen;

// Obtener el elemento caja modal y mostrar la Caja Modal
    var caja = document.getElementById("modal");
	caja.style.display = "block";
}


// FUNCIÓN CERRAR CAJA MODAL

function cerrarFoto() {
// Obtener la Caja Modal
var caja = document.getElementById('modal');
	
// Obtener el elemento <span> con la X que cierra la Caja Modal
var span = document.getElementsByClassName("cerrar")[0];
	
// Obtener el elemento <span> con el texto que cierra la Caja Modal
var span = document.getElementsByClassName("cerrar-texto")[0];

// Cuando el usuario hace click en el texto CERRAR, cierra el cuadro Modal
span.onclick = miFuncion();
	function miFuncion() {
  caja.style.display = "none";
}
// Cuando el usuario hace click en el <span> (x), cierra la caja modal
span.onclick = function() {
  caja.style.display = "none";
}
// Cuando el usuario hace click en el fondo oscuro, cierra la caja modal
caja.onclick = function() {
  caja.style.display = "none";
}

}

 

