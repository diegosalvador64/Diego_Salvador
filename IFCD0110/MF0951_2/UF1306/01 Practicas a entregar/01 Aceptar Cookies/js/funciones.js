// JavaScript Document
//Crear una cookie del documento
/*function setCookie(cname,cvalue,exdays) {
	  var d = new Date();
	  d.setTime(d.getTime() + (exdays*24*60*60*1000));
	  var expires = "expires=" + d.toGMTString();
	  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";	
	}
//Obtener la cookie
	function getCookie(cname) {
	  var name = cname + "=";
	  var decodedCookie = decodeURIComponent(document.cookie);
	  var ca = decodedCookie.split(';');
	  for(var i = 0; i < ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == ' ') {
		  c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
		  return c.substring(name.length, c.length);
		}
	  }
	  return "";
	}
//Chequear la cookie
	function checkCookie() {
	var user=getCookie("username");
	if (user != "") {
		alert("Bienvenido " + user);
	  } else {
		 user = prompt("Por favor, teclee su nombre: ","");
		 if (user != "" && user != null) {
		   setCookie("username", user, 1);
		 }
	  }
	document.getElementById("contenedor-cookies").style.display="none";
	}
//
/*document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";*/

function checkCookie() {
	
var verCookie = document.cookie;
var buscar = verCookie.search("nombre");
	
if (buscar != -1) { //si existe la cookie buscando por la clave, informamos que ya existe la cookie
	alert("Bienvenido de nuevo a Gourmet au Catering");
} else { //creamos la cookie
		var nombre = "nombre";
		var web = "Gourmet au Catering";
		var caduca = "expires";
        var fecha = new Date();
        var fechaUTC = fecha.toDateString(); //para las fechas, si queremos calcular la fecha a la que se quiere expirar la cookie usamos los métodos de fecha: sumar 1 al dia, a la hora, etc
		var horaUTC = "12:00:00";
		var cookie = nombre + "=" + web + "; " + caduca + "=" + fechaUTC + " " + horaUTC + " UTC;";
		//document.cookie = "nombre=Gourmet au Catering;expires=Tue, 09 Abr 2019 12:00:00 UTC;"; //para eliminar una cookie poner una fecha posterior a la de ahora mismo
        var crearCookie = cookie;
		document.cookie = crearCookie;
        alert("Bienvenido a Gourmet de Catering");
 		}
	//document.getElementById("contenedor-cookies").style.display="none";
}

