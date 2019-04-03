// JavaScript Document
//Función que arroja la información del navegador
function infoNavegador() {
	var txt = " "; 
		
	//Motor Navegador
	var motorNombre = window.navigator.appName;
	if (motorNombre === "Netscape") {motorNombre = "JavaScript";}
	
	//Nombre Navegador
	var navegador = window.navigator.appCodeName;
	
	//Versión Navegador. Saca prácticamente la misma información que userAgent
	var versionNav = window.navigator.appVersion;
	
	//Propietario Navegador
	var propietario = "Google, Inc";
	
	//Lenguaje Navegador
	var lenguaje = window.navigator.language;
	
	//Sistema Operativo
	var sistemaOperativo = " "; //No es válido: hay que buscarlo en el userAgent, que se puede llamar una sola vez al comienzo, pero lo he hecho llamando al método cada vez que me ha hecho falta
	var sistOperNav = window.navigator.userAgent;
	
	if (sistOperNav.indexOf("Windows")) {sistemaOperativo = "Windows";}
	else if (sistOperNav.indexOf("Apple")) {sistemaOperativo = "Apple";}
	else if (sistOperNav.indexOf("Linux")) {sistemaOperativo = "Linux";}
	else if (sistOperNav.indexOf("iPhone")) {sistemaOperativo = "iPhone";}
	else if (sistOperNav.indexOf("iPod")) {sistemaOperativo = "iPod";}
	else if (sistOperNav.indexOf("iPad")) {sistemaOperativo = "iPad";}
	else if (sistOperNav.indexOf("Android")) {sistemaOperativo = "Android";}
	else {sistemaOperativo = "Desconocido";}
	
	//Plataforma: hay que utilizar userAgent, porque el método platform saca siempre WIN32, que no es real
	var plataforma = window.navigator.platform;
	var plataformaNav = window.navigator.userAgent;
	//Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.86 Safari/537.36
	if ((plataformaNav.indexOf("Chrome") > -1) || 
		(plataformaNav.indexOf("Edge") > -1)   ||
		(plataformaNav.indexOf("OPR") > -1)    ||
		(plataformaNav.indexOf("Firefox") > -1)) {
		var indice7 = plataformaNav.lastIndexOf("Win64");
		plataforma = plataformaNav.substr(indice7,5);
	//Mozilla/5.0 (Windows NT 10.0; WOW64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Version/5.1.7 Safari/534.57.2
	} else if ((plataformaNav.indexOf("Safari") > -1) || 
				(plataformaNav.indexOf("Trident") > -1)   ||
				(plataformaNav.indexOf("MSIE") > -1)) {
				var indice8 = plataformaNav.lastIndexOf("WOW64");
				plataforma = "Win64";
			}
		
	
	//Navegador Online: poner var para que la variable sea local y no global, aunque en este caso es la única variable con este nombre
	var navOnline = window.navigator.onLine;
	if (navOnline === true) {var navOnline = "Sí";}
	else if (navOnline === false)  {var navOnline = "No";}
	else if (navOnline === undefined)  {var navOnline = "Indefinido";}
	else {var navOnline = "Desconocido";}
	
	//Java Activado
	var javaActivo = window.navigator.javaEnabled();
	
	if (javaActivo === true) {javaActivo = "Sí";}
	else {javaActivo = "No";}
	
	//Cookies Activas
	var cookiesActivas = window.navigator.cookieEnabled;
	if (cookiesActivas === true) {cookiesActivas = "Sí";}
	else if (cookiesActivas === false) {cookiesActivas = "No";}
	else if (cookiesActivas === undefined) {cookiesActivas = "Indefinido";}
	else {cookiesActivas = "Desconocido";}
	
	//Plugins Activos
	var pluginsActivos = window.navigator.plugins.length; //en este caso para sacar el número de plugins con length
	
	//Agente Usuario: con éste podemos sacar casi toda la información
	var agenteUsuario = window.navigator.userAgent;
	
	txt += "<h3>Información Navegador</h3>";
	txt += "<p><b>Motor Navegador: </b>" + motorNombre + "</p>";
	txt += "<p><b>Nombre Navegador: </b>" + navegador + "</p>";
	txt += "<p><b>Versión Navegador: </b>" + versionNav + "</p>";
	txt += "<p><b>Propietario: </b>" + propietario + "</p>";
	txt += "<p><b>Lenguaje: </b>" + lenguaje + "</p>";
	txt += "<p><b>Sistema Operativo: </b>" + sistemaOperativo + "</p>";
	txt += "<p><b>Plataforma: </b>" + plataforma + "</p>";
	txt += "<p><b>Navegador Online: </b>" + navOnline + "</p>";
	txt += "<p><b>Java activo: </b>" + javaActivo + "</p>";
	txt += "<p><b>Cookies activas: </b>" + cookiesActivas + "</p>";
	txt += "<p><b>Plugins activos: </b>" + pluginsActivos + "</p>";
	txt += "<p><b>Agente usuario: </b>" + agenteUsuario + "</p>";
	
	document.getElementById("infoNav").innerHTML = txt;
		
}
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
    "Devuelve el href (URL) de la página actual: " + "<br>" + window.location.href;	
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
//El método Go () carga una URL específica de la lista del historial. Permite pegar saltos de varias páginas hacia atrás o hacia adelante. En este caso permite retroceder 2 páginas.
function irGo() {
	window.history.go(-2);
}
//Muestra un cuadro de alerta y el usuario tendrá tendrá que hacer clic en "Aceptar" para continuar.
function alerta() {
	window.alert("¿Hola qué tal andas?");
}
//Muestra un cuadro de confirmación dónde el usuario tendrá que verificar o aceptar algo.
function confirmar() {
	window.confirm("¿Hola qué tal andas?");
}
//Muestra un cuadro de confirmación dónde el usuario tendrá que verificar o aceptar algo.
function introducir() {
	window.prompt("¿Hola qué tal andas?");
}
//Estas funciones de setTimeout se pueden hacer también como está en el ejercicio C:\Users\mañanas\Documents\Diego_Salvador\IFCD0110\MF0951_2\UF1305\02 Practicas de clase/salida.html, con una llmada directa a una función que ejecute el método. Las funciones de parada se ejecutan directamente en el onClick parando la ejecución de la variable myVar.
function miTimeout() {
  alert('Hola');
}
//Estas funciones de setInterval se pueden hacer también como está en el ejercicio C:\Users\mañanas\Documents\Diego_Salvador\IFCD0110\MF0951_2\UF1305\02 Practicas de clase/salida.html, con una llmada directa a una función que ejecute el método. Las funciones de parada se ejecutan directamente en el onClick parando la ejecución de la variable myVar.
function miIntervaloTiempo() {
  alert('Hola');
}

//Estas funciones de setInterval se pueden hacer también de esta manera. Defino de manera global myVar2, que es la que arranca con el setInterval. Después, el clearInterval se refiere a la variable ejecutada para parar su ejecución, al ser una variable global.
	var myVar2;

	function pruebaInterval() {
	 
		myVar2 = setInterval(prueba, 3000);
	
		function prueba() {
			var d = new Date;
			alert(d.toLocaleTimeString());
	   			}
	}