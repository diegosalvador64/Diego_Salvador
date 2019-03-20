// JavaScript Document
//Función Reloj
function reloj(){
	var fecha     = new Date();
	var anio      = fecha.getFullYear();
	var mes       = fecha.getMonth();
	var	numeroMes = mes +1; //ojo, que el mes viene en formato del 0-11,por eso le sumo 1
	var dia       = fecha.getDate();
	var hora      = fecha.getHours();
	var minuto    = fecha.getMinutes();
	var segundo   = fecha.getSeconds();
	var diaSemana = fecha.getDay();
	
	var dias = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
	var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
				
	document.getElementById("link1").innerHTML = "Año: " + anio;
	if (numeroMes<10) {
		numeroMes="0"+numeroMes;
	}
	document.getElementById("link2").innerHTML = "Mes: " + numeroMes;
	if (dia<10) {
		dia="0"+dia;
	}
	document.getElementById("link3").innerHTML = "Día: " + dia;
	if (hora<10) {
		hora="0"+hora;
	}
	document.getElementById("link4").innerHTML = "Horas: " + hora;
	if (minuto<10) {
		minuto="0"+minuto;
	}
	document.getElementById("link5").innerHTML = "Minutos: " + minuto;
	if (segundo<10) {
		segundo="0"+segundo;
	}
	document.getElementById("link6").innerHTML = "Segundos: " + segundo;
	
	document.getElementById("fechalarga").innerHTML = "Hoy es " + dias[diaSemana] + " " + dia + " de " +   meses[mes] + " de " + anio;
	
	setTimeout(reloj,1000); //actualiza la función reloj
}
//función new Array
function ejemplonewArray() {
	var color1 = prompt("Inserte un color: ");
	var color2 = prompt("Inserte otro color: ");
	var color3 = prompt("Inserte otro color más: ");
	
	var colores = ("\"" + color1 + "\"," + "\"" + color2 + "\"," + "\"" + color3 + "\"");
	var convertir = colores.split(",");
	
	var matriz = new Array(convertir);
	
	alert("La matriz o array resultante es: " + matriz);
	
	alert("El tipo de datos de la variable colores es: " + typeof(colores) + "\n" + "El tipo de datos de la variable matriz es: " + typeof(matriz) + "\n longitud de la matriz es: " + matriz.length);
}