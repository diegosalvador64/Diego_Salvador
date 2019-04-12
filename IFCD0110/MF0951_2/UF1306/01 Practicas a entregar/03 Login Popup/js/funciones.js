// JavaScript Document


//cierra con el aspa y en cerrar.
function cerrar(){
	document.getElementById("miModal").style.display="none";
	document.getElementById("pin1").style.display = "none";
	document.getElementById("mensaje").style.display="none";
	document.getElementById("miFormulario").reset();
	}

//Abrir formulario
function abrir(){
	document.getElementById("miModal").style.display="block";
	document.getElementById("pin1").style.display = "none";
	document.getElementById("mensaje").style.display="none";
	document.getElementById("miFormulario").reset();
}
//Para comprobar si el usuario y contraseña es correcta//
function validarFormulario() {
			
	var pin = document.getElementById("pin1").value;
		
	var usuario1 = {user:"juan", password:"1234", pin: 147}; 
	var usuario2 = {user:"pedro", password:"4321", pin: 258}; 
	var usuario3 = {user:"jose", password:"1324", pin: 369};
	
	var usuario = document.forms["miFormulario"]["usuario"].value;
	var pw = document.forms["miFormulario"]["password"].value;
	
  	if (usuario == "") {
    	alert("El usuario debe estar relleno");
    	return false;}
	else if (pw == "") {
		alert("La contraseña debe estar rellena");
    	return false;}
	else return true;
	
	 /*switch(true) {
		  case (usuario.length == 0 || pw.length == 0):
		  alert("Teclee usuario y contraseña");
	      break;
         case (pin == " "):
			 	alert("usuario de referencia " + usuario1.user);
			 	alert("pw de referencia " + usuario1.password);
			 	alert("usuario tecleado " + usuario);
			 	alert("pw tecleado " + pw);
			  	if (usuario1.user == usuario && usuario1.password == pw) { 
				alert("Bienvenido " + usuario);
				alert("paso por pin blanco usuario1");
					return true;}
				else if (usuario2.user == usuario && usuario2.password == pw) { 
				 alert("Bienvenido " + usuario);
				 alert("paso por pin blanco usuario2");
					return true;}
				else if (usuario3.user == usuario && usuario3.password == pw) { 
				 alert("Bienvenido " + usuario);
				 alert("paso por pin blanco usuario3");
					return true;}
				else {
					document.getElementById("mensaje").style.display="block";
					document.getElementById("mensaje").innerHTML = "Usuario o contraseña incorrecta";
					return false;
					}
        		break;
        case (pin !== " "):
             if (usuario1.pin == pin && usuario1.user == usuario) { 
				alert("paso por pin relleno usuario1")
			   document.getElementById("password").innerHTML = usuario1.password;
			 	return true;}
				else if (usuario2.pin == pin && usuario2.user == usuario) {
				alert("paso por pin relleno usuario1")
			   document.getElementById("password").innerHTML = usuario2.password;
				return true;}
				else if (usuario3.pin == pin && usuario3.user == usuario) { 
				alert("paso por pin relleno usuario1");
				document.getElementById("password").innerHTML = usuario3.password;
				return true;}
			  else {
				document.getElementById("mensaje").style.display="block";
			  	document.getElementById("mensaje").innerHTML = "Usuario o PIN incorrecto";
			  	return false}
	  
        break;
		
        default:
            alert("default");
        break;
    }*/
	
	}

//Para recordar la contraseña: Introduzca el PIN//
function recordarContrasena() {
	document.getElementById("pin1").style.display = "block";
	
	}

function checkCookie() {
	
var verCookie = document.cookie;
var buscar = verCookie.search("nombre");
var usuario = document.getElementById("usuario").value;
	
if (buscar != -1) { //si existe la cookie buscando por la clave, informamos que ya existe la cookie
	alert("El usuario es " + usuario);
} else { //creamos la cookie
		var nombre = "nombre";
		var caduca = "expires";
        var fecha = new Date();
        var fechaUTC = fecha.toDateString(); //para las fechas, si queremos calcular la fecha a la que se quiere expirar la cookie usamos los métodos de fecha: sumar 1 al dia, a la hora, etc
		var horaUTC = "12:00:00";
		var cookie = nombre + "=" + usuario + "; " + caduca + "=" + fechaUTC + " " + horaUTC + " UTC;";
		//document.cookie = "nombre=Gourmet au Catering;expires=Tue, 09 Abr 2019 12:00:00 UTC;"; //para eliminar una cookie poner una fecha posterior a la de ahora mismo
        var crearCookie = cookie;
		document.cookie = crearCookie;
        alert("Este sitio utiliza cookies");
 		}
	//document.getElementById("contenedor-cookies").style.display="none";
}