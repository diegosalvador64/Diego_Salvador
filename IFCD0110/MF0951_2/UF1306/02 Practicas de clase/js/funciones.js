// JavaScript Document
//Ancho y alto de la pantalla total
function tamanoVentana() {
	var w = window.innerWidth
		|| document.documentElement.clientWidth
		|| document.body.clientWidth;

	var h = window.innerHeight
		|| document.documentElement.clientHeight
		|| document.body.clientHeight;

	var x = document.getElementById("infoVentana");
	x.innerHTML = 
    "La anchura interior de la ventana del navegador (en píxeles) es: " + w + ". La altura interior de la ventana del navegador (en píxeles) es: " + h;	
}
//Ancho y alto de la pantalla total
function pantalla() {
	document.getElementById("divBom").innerHTML = 
    "La anchura de la pantalla total es: " + screen.width + ". La altura de la pantalla total es: " + screen.height;	
}
//Ancho y alto de la pantalla disponible
function pantallaDisponible() {
	document.getElementById("divBom").innerHTML = 
    "La anchura de la pantalla disponible es: " + screen.availWidth + ". La altura de la pantalla disponible es: " + screen.availHeight;	
}
//Profundidad de color y píxeles de la pantalla
function pantallaProfundidad() {
	document.getElementById("divBom").innerHTML = 
    "La profundidad de color de la pantalla es: " + screen.colorDepth + ". Los píxeles de la pantalla: " + screen.pixelDepth;	
}
//Devuelve el href (URL) de la página actual.
function urlPagina() {
	document.getElementById("infoPantalla").innerHTML = 
    "Devuelve el href (URL) de la página actual: " + window.location.href;	
}
//Devuelve el nombre de dominio del proveedor de alojamiento web.
function dominioPagina() {
	document.getElementById("infoPantalla").innerHTML = 
    "Devuelve el nombre de dominio del proveedor de alojamiento web: " + window.location.hostname;	
}
//Devuelve la ruta y el nombre de la página actual.
function rutaPagina() {
	document.getElementById("infoPantalla").innerHTML = 
    "Devuelve la ruta y el nombre de la página actual: " + window.location.pathname;	
}
//Devuelve el protocolo web utilizado (http: o https:).
function protocoloPagina() {
	document.getElementById("infoPantalla").innerHTML = 
    "Devuelve el protocolo web utilizado (http: o https:): " + window.location.protocol;	
}
//Carga un nuevo documento.
function cargarPagina() {
	window.location.assign("https://www.w3schools.com");
}
//Devuelve el puerto de conexión.
function puertoPagina() {
	document.getElementById("infoPantalla").innerHTML = "Devuelve el puerto de conexión. " + window.location.port;	
}
//El método history.back () carga la anterior URL en la lista del historial.
function irAtras() {
	window.history.back(); //si no ponemos parámetros entre paréntesis, irá de 1 en 1 página hacia atrás
}
//El método history.forward () carga la siguiente URL en la lista del historial.
function irAdelante() {
	window.history.forward();
}
//Muestra un cuadro de alerta y el usuario tendrá tendrá que hacer clic en "Aceptar" para continuar.
function alerta() {
	window.alert("¿Hola qué tal?");
}
//Muestra un cuadro de confirmación dónde el usuario tendrá que verificar o aceptar algo.
function confirmar() {
	window.confirm("¿Hola qué tal?");
}
//Muestra un cuadro de confirmación dónde el usuario tendrá que verificar o aceptar algo.
function introducir() {
	window.prompt("¿Hola qué tal?");
}
