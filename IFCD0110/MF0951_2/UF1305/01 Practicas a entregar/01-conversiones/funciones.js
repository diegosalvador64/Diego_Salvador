// JavaScript Document
//EJERCICIO 2
function obtenerlitros() {
var litros = parseInt(document.getElementById("number1").value);
	
var decilitros = litros / 10;
var centilitros = litros / 100;
var mililitros = litros / 1000;

var decalitros = litros * 10;
var hectolitros = litros * 100;
var kilolitros = litros * 1000;
	
document.getElementById("etiqueta1").innerHTML = "Número de litros "+ litros + "<br>" +
	litros + " litros son " + decilitros + " decilitros" + "<br>" +
	litros + " litros son " + centilitros + " centilitros" + "<br>" +
	litros + " litros son " + mililitros + " mililitros" + "<br>" +
	litros + " litros son " + decalitros + " decalitros" + "<br>" +
	litros + " litros son " + hectolitros + " hectolitros" + "<br>" +
	litros + " litros son " + kilolitros + " kilolitros" + "<br>";
	
}

function obtenerlongitud() {
	var kilometros = parseInt(document.getElementById("number2").value);
	
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
	
	var horas = dias * 24;
	var minutos = horas * 60;
	var segundos = minutos * 60;

	document.getElementById("etiqueta3").innerHTML = "Los días son " + dias + "<br>" +
		dias + " días son " + horas + " horas" + "<br>" +
		dias + " días son " + minutos + " minutos" + "<br>" +
		dias + " dias son " + segundos + " segundos" + "<br>";
	}
function obtenerTemperatura() {
	var temperatura = parseInt(document.getElementById("number4").value);
	
	var farenheit = ((temperatura * 1.8) + 32);
	var kelvin = temperatura + 273.15;
	
	document.getElementById("etiqueta4").innerHTML = "Temperatura grados centígrados: " + temperatura + "<br>" +
		temperatura + " grados centígrados son " + farenheit + " grados Farenheit" + "<br>" +
		temperatura + " grados centígrados son " + kelvin + " grados Kelvin" + "<br>"
	}

function obtenerPeso() {
	var toneladas = parseInt(document.getElementById("number5").value);
	
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
	
	var piedras = kilos * 0.1575;
	var libras = kilos * 2.2046;
	var onzas = kilos * 35.274;
	var quilates = kilos * 5000;

	document.getElementById("etiqueta6").innerHTML = "Los Kilogramos " + kilos + "<br>" +
		kilos + " kilogramos son " + piedras + " piedras" + "<br>" +
		kilos + " kilogramos son " + libras + " libras" + "<br>" +
		kilos + " kilogramos son " + quilates + " quilates" + "<br>" +
		kilos + " kilogramos son " + onzas + " onzas" + "<br>";	
}

function obtenerDistancia() {
	var kilometros = parseInt(document.getElementById("number7").value);
	
	var millas = kilometros * 0.621371;
	var yardas = kilometros * 1093.61;
	var pies = kilometros * 3280.84;
	var pulgadas = kilometros * 39370.1;

	document.getElementById("etiqueta7").innerHTML = "Los Kilómetros " + kilometros + "<br>" +
		kilometros + " kilómetros son " + millas + " millas" + "<br>" +
		kilometros + " kilómetros son " + yardas + " yardas" + "<br>" +
		kilometros + " kilómetros son " + pies + " pies" + "<br>" +
		kilometros + " kilómetros son " + pulgadas + " pulgadas" + "<br>";	
}

function obtenerMoneda() {
	var euros = parseInt(document.getElementById("number8").value);
	
	var dolares = euros * 1.13;
	var libras = euros * 0.88;
	var yenes = euros * 128.27;
	var yuanes = euros * 7.85;

	document.getElementById("etiqueta8").innerHTML = "Los euros " + euros + "<br>" +
		euros + " euros son " + dolares + " dólares" + "<br>" + //poner el simbolito de la moneda
		euros + " euros son " + libras + " libras" + "<br>" +
		euros + " euros son " + yenes + " yenes" + "<br>" +
		euros + " euros son " + yuanes + " yuanes" + "<br>";	
}
function obtenerVelocidad() {
	var kmHora = parseInt(document.getElementById("number9").value);
	
	var millasHora = kmHora * 0.621371;
	var nudos = kmHora * 0.539957;
	var metroSegundo = kmHora * 0.277778;
	var pieSegundo = kmHora * 0.911344;
//quitar decimales
	document.getElementById("etiqueta9").innerHTML = "Los kilómetros/hora " + kmHora + "<br>" +
		kmHora + " kilómetros/hora son " + millasHora + " millas / hora" + "<br>" + 
		kmHora + " kilómetros/hora son " + nudos + " nudos" + "<br>" +
		kmHora + " kilómetros/hora son " + metroSegundo + " metros/segundo" + "<br>" +
		kmHora + " kilómetros/hora son " + pieSegundo + " p/s" + "<br>";
}


function obtenerArea() {
	var kmCuadrado = parseInt(document.getElementById("number10").value);
	
	var acres = kmCuadrado * 247.105;
	var hectareas = kmCuadrado * 100;
	var millasCuadradas = kmCuadrado * 0.386102;
	
//quitar decimales
	document.getElementById("etiqueta10").innerHTML = "Los kilómetros cuadrados " + kmCuadrado + "<br>" +
		kmCuadrado + " kilómetros cuadrados son " + acres + " acres" + "<br>" + 
		kmCuadrado + " kilómetros cuadrados son " + hectareas + " hectáreas" + "<br>" +
		kmCuadrado + " kilómetros cuadrados son " + millasCuadradas + " millas Cuadradas" + "<br>";		
}

