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
//Función validar donde discrimina si debe valida el formulario o si debe valida el PIN, en función de si éste viene o no relleno.
function validar() {
	var pinx = document.forms["miFormulario"]["pin1"].value;
	
	if (pinx == "") {
		var formulario = validarFormulario();
	} 
	else {
		var pin = validarPin();
	}
}
//Para comprobar si el usuario y contraseña es correcta//
function validarFormulario() {
	
	document.getElementById("mensaje").style.display = "none";
	
	var usuario = document.forms["miFormulario"]["usuario"].value;
	var pw = document.forms["miFormulario"]["password"].value;
	
	//Comprobar que los campos usuario y contraseña estén rellenos
  	if (usuario == "") {
    	alert("El usuario debe estar relleno");
    	return false;}
	else if (pw == "") {
		alert("La contraseña debe estar rellena");
    	return false;}
	
	//Comprobar que no hay espacios en blanco en una cadena con la RegExp(/\s/)
	//El método test busca una cadena para el carácter dado, en este caso, espacios:
	
	var espacios = new RegExp(/\s/);
	
	if(espacios.test(usuario)){
			alert('No se permiten espacios en el usuario');
			return false;
		}
   
	if(espacios.test(pw)){
			alert('No se permiten espacios en la contraseña');
			return false;
		}
   	
	//Comprobar que usuario y contrseña son válidas, accediendo a las objetos usuario1, usuario2, usuario3:
	var usuario1 = {user:"juan", password:"1234", pin: 147}; 
	var usuario2 = {user:"pedro", password:"4321", pin: 258}; 
	var usuario3 = {user:"jose", password:"1324", pin: 369};
		
	if  (usuario == usuario1.user && pw == usuario1.password) {alert("¡Bienvenido a la web!");}
	else if	(usuario == usuario2.user && pw == usuario2.password) {alert("¡Bienvenido a la web!");} 
	else if	(usuario == usuario3.user && pw == usuario3.password) {alert("¡Bienvenido a la web!");} 
	else	{
		document.getElementById("mensaje").style.display = "block";
		document.getElementById("mensaje").innerHTML = 'Usuario o contraseña incorrecta';
		return false;
		}
		  		
	}
//Comprobar campo numérico mientras escribo un texto. Se entra en esta función al teclear (evento onkeyUp)
 function Solo_Numerico(variable){
	 Numer=parseInt(variable);
        if (isNaN(Numer)){
            return "";
        }
        return Numer;
    }
    function ValNumero(Control){
		Control.value=Solo_Numerico(Control.value);
    }
//Para recordar la contraseña: Introduzca el PIN//
function recordarContrasena() {
	document.getElementById("pin1").style.display = "block";
	
	}

function validarPin() {
	
	
	var pinx = document.forms["miFormulario"]["pin1"].value;
		
	//Comprobar que el pin es válido para que muestre usuario y contraseña:
	var usuario1 = {user:"juan", password:"1234", pin: 147}; 
	var usuario2 = {user:"pedro", password:"4321", pin: 258}; 
	var usuario3 = {user:"jose", password:"1324", pin: 369};
	
		
	if  (pinx == usuario1.pin) {
		document.forms["miFormulario"]["usuario"].value = usuario1.user;
		document.forms["miFormulario"]["password"].value = usuario1.password;
		document.forms["miFormulario"]["mensaje"].style.display = "none";
		document.forms["miFormulario"]["pin1"].value = "";
		}
	else if	(pinx == usuario2.pin) {
		document.forms["miFormulario"]["usuario"].value = usuario2.user;
		document.forms["miFormulario"]["password"].value = usuario2.password;
		document.forms["miFormulario"]["mensaje"].style.display = "none";
		document.forms["miFormulario"]["pin1"].value = "";
		} 
	else if	(pinx == usuario3.pin) {
		document.forms["miFormulario"]["usuario"].value = usuario3.user;
		document.forms["miFormulario"]["password"].value = usuario3.password;
		document.forms["miFormulario"]["mensaje"].style.display = "none";
		document.forms["miFormulario"]["pin1"].value = "";
		} 
	else	{
		document.getElementById("mensaje").style.display = "block";
		document.forms["miFormulario"]["mensaje"].value = 'PIN INCORRECTO';
		}
		  		
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