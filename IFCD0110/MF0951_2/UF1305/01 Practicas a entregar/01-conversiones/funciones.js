// JavaScript Document
//EJERCICIO 2
function obtenerlitros() {
var litros = parseInt(document.getElementById("number1").value);

	if (isNaN(litros) == true) {
		alert("teclee un número");
		return false;
	}
		
var decilitros = litros / 10;
var centilitros = litros / 100;
var mililitros = litros / 1000;

var decalitros = litros * 10;
var hectolitros = litros * 100;
var kilolitros = litros * 1000;
	
document.getElementById("etiqueta1").innerHTML = "Número de litros "+ litros + "<br>" +
	litros + " litros son " + decilitros.toFixed(2) + " decilitros" + "<br>" +
	litros + " litros son " + centilitros.toFixed(2) + " centilitros" + "<br>" +
	litros + " litros son " + mililitros.toFixed(2) + " mililitros" + "<br>" +
	litros + " litros son " + decalitros + " decalitros" + "<br>" +
	litros + " litros son " + hectolitros + " hectolitros" + "<br>" +
	litros + " litros son " + kilolitros + " kilolitros" + "<br>";	
}

function obtenerlongitud() {
	var kilometros = parseInt(document.getElementById("number2").value);
	
	if (isNaN(kilometros) == true) {
		alert("teclee un número");
		return false;
	}
	
	var metros = kilometros * 1000;
	var centimetros = metros * 100;
	var milimetros = centimetros * 10;

	document.getElementById("etiqueta2").innerHTML = "Los Kilómetros "+ kilometros + "<br>" +
		kilometros + " kilómetros son " + metros + " metros" + "<br>" +
		kilometros + " kilómetros son " + centimetros + " centímetros" + "<br>" +
		kilometros + " kilómetros son " + milimetros + " milímetros" + "<br>";
	}

function obtenerTiempo() {
	var dias = parseInt(document.getElementById("number3").value);
	
	if (isNaN(dias) == true) {
		alert("teclee un número");
		return false;
	}
	
	var horas = dias * 24;
	var minutos = horas * 60;
	var segundos = minutos * 60;

	document.getElementById("etiqueta3").innerHTML = "Los días son " + dias + "<br>" +
		dias + " días son " + horas.toFixed(2) + " horas" + "<br>" +
		dias + " días son " + minutos.toFixed(2) + " minutos" + "<br>" +
		dias + " dias son " + segundos.toFixed(2) + " segundos" + "<br>";
	}
function obtenerTemperatura() {
	var temperatura = parseInt(document.getElementById("number4").value);
	
	if (isNaN(temperatura) == true) {
		alert("teclee un número");
		return false;
	}
	
	var farenheit = ((temperatura * 1.8) + 32);
	var kelvin = temperatura + 273.15;
	
	document.getElementById("etiqueta4").innerHTML = "Temperatura grados centígrados: " + temperatura + "<br>" +
		temperatura + " grados centígrados son " + farenheit.toFixed(2) + " grados Farenheit" + "<br>" +
		temperatura + " grados centígrados son " + kelvin.toFixed(2) + " grados Kelvin" + "<br>"
	}

function obtenerPeso() {
	var toneladas = parseInt(document.getElementById("number5").value);
	
	if (isNaN(toneladas) == true) {
		alert("teclee un número");
		return false;
	}
	
	var kilos = toneladas * 1000;
	var gramos = kilos * 1000;
	var miligramos = gramos * 1000;

	document.getElementById("etiqueta5").innerHTML = "Las Toneladas "+ toneladas + "<br>" +
		toneladas + " toneladas son " + kilos + " kilogramos" + "<br>" +
		toneladas + " toneladas son " + gramos + " gramos" + "<br>" +
		toneladas + " toneladas son " + miligramos + " miligramos" + "<br>";	
}

function obtenerPesaje() {
	var kilos = parseInt(document.getElementById("number6").value);
	
	if (isNaN(kilos) == true) {
		alert("teclee un número");
		return false;
	}
	
	var piedras = kilos * 0.1575;
	var libras = kilos * 2.2046;
	var onzas = kilos * 35.274;
	var quilates = kilos * 5000;

	document.getElementById("etiqueta6").innerHTML = "Los Kilogramos " + kilos + "<br>" +
		kilos + " kilogramos son " + piedras.toFixed(2) + " piedras" + "<br>" +
		kilos + " kilogramos son " + libras.toFixed(2) + " libras" + "<br>" +
		kilos + " kilogramos son " + quilates.toFixed(2) + " quilates" + "<br>" +
		kilos + " kilogramos son " + onzas.toFixed(2) + " onzas" + "<br>";	
}

function obtenerDistancia() {
	var kilometros = parseInt(document.getElementById("number7").value);
	
	if (isNaN(kilometros) == true) {
		alert("teclee un número");
		return false;
	}
	
	var millas = kilometros * 0.621371;
	var yardas = kilometros * 1093.61;
	var pies = kilometros * 3280.84;
	var pulgadas = kilometros * 39370.1;

	document.getElementById("etiqueta7").innerHTML = "Los Kilómetros " + kilometros + "<br>" +
		kilometros + " kilómetros son " + millas.toFixed(2) + " millas" + "<br>" +
		kilometros + " kilómetros son " + yardas.toFixed(2) + " yardas" + "<br>" +
		kilometros + " kilómetros son " + pies.toFixed(2) + " pies" + "<br>" +
		kilometros + " kilómetros son " + pulgadas.toFixed(2) + " pulgadas" + "<br>";	
}

function obtenerMoneda() {
	var euros = parseInt(document.getElementById("number8").value);
	
	if (isNaN(euros) == true) {
		alert("teclee un número");
		return false;
	}
	
	var dolares = euros * 1.13;
	var libras = euros * 0.88;
	var yenes = euros * 128.27;
	var yuanes = euros * 7.85;

	document.getElementById("etiqueta8").innerHTML = "Los euros " + euros + "<br>" +
		euros + " euros son " + dolares.toFixed(2) + " dólares" + "<br>" + //poner el simbolito de la moneda
		euros + " euros son " + libras.toFixed(2) + " libras" + "<br>" +
		euros + " euros son " + yenes.toFixed(2) + " yenes" + "<br>" +
		euros + " euros son " + yuanes.toFixed(2) + " yuanes" + "<br>";	
}
function obtenerVelocidad() {
	var kmHora = parseInt(document.getElementById("number9").value);
	
	if (isNaN(kmHora) == true) {
		alert("teclee un número");
		return false;
	}
	
	var millasHora = kmHora * 0.621371;
	var nudos = kmHora * 0.539957;
	var metroSegundo = kmHora * 0.277778;
	var pieSegundo = kmHora * 0.911344;
//quitar decimales
	document.getElementById("etiqueta9").innerHTML = "Los kilómetros/hora " + kmHora + "<br>" +
		kmHora + " kilómetros/hora son " + millasHora.toFixed(2) + " millas / hora" + "<br>" + 
		kmHora + " kilómetros/hora son " + nudos.toFixed(2) + " nudos" + "<br>" +
		kmHora + " kilómetros/hora son " + metroSegundo.toFixed(2) + " metros/segundo" + "<br>" +
		kmHora + " kilómetros/hora son " + pieSegundo.toFixed(2) + " p/s" + "<br>";
}


function obtenerArea() {
	var kmCuadrado = parseInt(document.getElementById("number10").value);
	
	if (isNaN(kmCuadrado) == true) {
		alert("teclee un número");
		return false;
	}
	
	var acres = kmCuadrado * 247.105;
	var hectareas = kmCuadrado * 100;
	var millasCuadradas = kmCuadrado * 0.386102;
	
//quitar decimales
	document.getElementById("etiqueta10").innerHTML = "Los kilómetros cuadrados " + kmCuadrado + "<br>" +
		kmCuadrado + " kilómetros cuadrados son " + acres.toFixed(2) + " acres" + "<br>" + 
		kmCuadrado + " kilómetros cuadrados son " + hectareas.toFixed(2) + " hectáreas" + "<br>" +
		kmCuadrado + " kilómetros cuadrados son " + millasCuadradas.toFixed(2) + " millas Cuadradas" + "<br>"
}

