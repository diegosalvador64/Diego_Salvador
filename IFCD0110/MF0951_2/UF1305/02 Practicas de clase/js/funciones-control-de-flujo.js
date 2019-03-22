// JavaScript Document
//Estructura if
function horaIf() {
	var fecha = new Date();
	var hora = fecha.getHours();
	
	var mensaje = "";
	
	if (hora >= 7 && hora <= 12) {
		mensaje = "Buenos días"
	}
	if (hora >= 13 && hora <= 18) {
		mensaje = "Buenas tardes"
	}
	if (hora >= 19 && hora <= 23) {
		mensaje = "Buenas noches"
	}
	if (hora >= 0 && hora <= 6) {
		mensaje = "Madrugada"
	}
	
	alert(mensaje);
}

//Estructura if/else
function horaElse() {
	var fecha = new Date();
	var hora = fecha.getHours();
	
	var mensaje = "";
	
	if (hora >= 7 && hora <= 12) {
		mensaje = "Buenos días";
	} else {
		mensaje = "Buenas tardes";
	}
	alert(mensaje);
}
//Estructura if/else/if
function horaElseIf() {
	var fecha = new Date();
	var hora = fecha.getHours();
	
	var mensaje = "";
		
	if (hora >= 7 && hora <= 12) {
		mensaje = "Buenos días";
	} else { if (hora >= 13 && hora <= 18)
				{mensaje = "Buenas tardes";} 
			else 
				{mensaje = "Buenas noches"}
			}
	alert(mensaje);
}
//Estructura switch/case
function switchCase() {
	var dia;
	switch (new Date().getDay()) {
	  case 0:
		dia = "Domingo";
		break;
	  case 1:
		dia = "Lunes";
		break;
	  case 2:
		dia = "Martes";
		break;
	  case 3:
		dia = "Miércoles";
		break;
	  case 4:
		dia = "Jueves";
		break;
	  case 5:
		dia = "Viernes";
		break;
	  case  6:
		dia = "Sábado";
	  default:
		dia = "Indefinido";	
	}
	var resultado = dia.slice(0,10);
	
	alert("Hoy es " + resultado);
}
//Estructura bucle for
function bucleFor() {
	
		var color1 = prompt("Inserte un color: ");
		var color2 = prompt("Inserte otro color: ");
		var color3 = prompt("Inserte otro color más: ");
	
		var matriz = new Array(color1,color2,color3);
	
		var text = "";
		text = "<ul>";
		var i;
	
		for (i = 0; i < matriz.length; i++) {
		  text += "<li><strong>" + matriz[i] + "</strong></li>";
		}
	
		text += "</ul>";
	
		document.getElementById("demo").innerHTML = "<strong>La lista de colores introducida es : </strong>" + text;
	
	}
//Estructura bucle while
function mientrasWhile() {
		var num = parseInt(prompt("Introduce un múmero del 1 al 10: "));
		var text = "";
		var i = 0;
		while (i < num) {
		  text += "<br>El número es: " + i;
		  i++;
		}
		document.getElementById("demo").innerHTML = text;
	}
//Estructura bucle do while
function hacerMientrasDoWhile() {
		var num = parseInt(prompt("Introduce un múmero del 1 al 10: "));
		var text = "";
		var i = 0;
		do {
			  text += "<br>El número es: " + i;
			  i++;
			}
		while (i < num);  

		document.getElementById("demo").innerHTML = text;	
}
function romperBucle() {
	/*------voy por aquí ----*/
}