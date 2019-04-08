// JavaScript Document
//Crear una cookie del documento
function setCookie(cname,cvalue,exdays) {
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
var h = document.cookie;
alert("La Cookie es: " + document.cookie);






