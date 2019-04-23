// JavaScript Document
var usuario1 = {user:"juan", password:"1234", pin: 147}; 
var usuario2 = {user:"pedro", password:"4321", pin: 258}; 
var usuario3 = {user:"jose", password:"1324", pin: 369};

// Open and close sidebar
function abrirForm() {
  document.getElementById('id01').style.display='block';
}
 
function cerrarForm() {
  document.getElementById('id01').style.display='none';
}

function mostrarPassword () {
  var campo = document.getElementById('password');
  if (campo.type === "password") {
    campo.type = "text";
  } else {
    campo.type = "password";
  }
}

function funCookies() {
	
var verCookie = document.cookie;
var buscar = verCookie.search("nombre");
/*	alert(buscar);*/
if (buscar != -1) {
	alert ("Bienvenido de nuevo a tu tienda de confianza");
} else {
	
var nombre = "nombre";
var web = "Logo Jeans";
var caduca = "expires";
var fecha = new Date();
var fechaUTC = fecha.toDateString();
var horaUTC = "12:00:00";
var cookie = nombre + "=" + web + "; " + caduca + "=" + fechaUTC + " " +  horaUTC + " UTC; ";
//var crearCookie = "nombre=Gourmet au Catering; expires=Tue, 09 Abr 2019 12:00:00 UTC;";	

//AÑADIR COOKIE
var crearCookie = cookie;
document.cookie = crearCookie;
alert ("Bienvenido a Logo Jeans");
}

}	

function mostrarCampoPin() {
	//var user = document.getElementById('usuario').value;
	var pin = document.getElementById('pin').style.display;
	var label = document.getElementById('mensajesPin').style.display;
	//alert(pin);
	if (pin == "none"){
		document.getElementById('pin').style.display = "block";
		document.getElementById('password').style.display = "none";
		document.getElementById('contrasenya').innerHTML = "<b>PIN</b>";
		//alert("PIN visible");
	} else {
		document.getElementById('pin').style.display ="none";
		document.getElementById('password').style.display = "block";
		document.getElementById('contrasenya').innerHTML = "<b>Contraseña</b>";
		//alert("PIN no visible");
	}
	if (label == "none"){
		document.getElementById('mensajesPin').style.display = "block";
		document.getElementById('mensajesPass').style.display = "none";
		alert("Label visible");
	} else {
		document.getElementById('mensajesPin').style.display = "none";
		document.getElementById('mensajesPass').style.display = "block";
		//(alert("Label no visible");
	}
}
/*  --------------------------------------------------------- */
// USUARIO
/*  --------------------------------------------------------- */
function comporbarCampoUser(){
 var user = document.getElementById('usuario').value; 
	//alert(user + espacios);
	
	// SI EL CAMPO ES VACIO O NULO (required)
	if (user === "" || user === "null") {
		//alert ("el campo no puede ser nulo");
		document.getElementById('mensajesUser').innerHTML = 
			"el campo no puede ser nulo";
		document.getElementById('mensajesUser').style.color = "tomato";
	// SI EL CAMPO ESTÁ RELLENO CON UN ESPACIO (required)
	} else if (user === " ") {
		//alert ("el campo no puede tener un espacio en blanco");
		document.getElementById('mensajesUser').innerHTML = 
			"el campo no puede tener un espacio en blanco";
		document.getElementById('mensajesUser').style.color = "tomato";
		//SI EL CAMPO ESTÁ RELLENO LLAMA A LA FUNCIÓN COMPROBAR USUARIO
	} else {
		alert ("el campo está relleno");
		limpiarUser();
	}
}

function limpiarUser() {	
	var user = document.getElementById('usuario').value;
	
	var espacios = user.search(/\s/i);
	alert (espacios);
	var numeros = user.search(/[0-9]/g);
	alert (numeros);
	var caracteres = user.search(/[^A-Za-z0-9]/i);
	alert (caracteres);
	
	if (espacios != -1) {
document.getElementById('mensajesUser').innerHTML = 
	"el usuario contine espacios en blanco";
document.getElementById('mensajesUser').style.color = "tomato";
	} else if (numeros != -1) {
document.getElementById('mensajesUser').innerHTML = 
	"el usuario contiene números";
document.getElementById('mensajesUser').style.color = "tomato";
	} else if (caracteres != -1) {
document.getElementById('mensajesUser').innerHTML = 
	"el usuario contiene caracteres especiales";
document.getElementById('mensajesUser').style.color = "tomato";
	} else {
        alert ("usuario limpio");
		comprobarUser();
	}
}

function comprobarUser() {
	var user = document.getElementById('usuario').value;
	// Quitar espacios en blanco por delante y por detrás
	var quitarEspacios = user.trim();
 	user = quitarEspacios;
	//alert (user);
	// SI EL USUARIO EXISTE O NO
/*if ((user === usuario1.user) || (user === usuario2.user) || (user === usuario3.user)) {}*/
	if (user === usuario1.user) {
		//alert ("usuario encontrado en usuario1");
		document.getElementById('mensajesUser').innerHTML = 
			"usuario encontrado en usuario1";
		document.getElementById('mensajesUser').style.color = "green";
	} else if (user === usuario2.user){
		//alert ("usuario encontrado en usuario2");
		document.getElementById('mensajesUser').innerHTML = 
			"usuario encontrado en usuario2";
		document.getElementById('mensajesUser').style.color = "green";
	} else if (user === usuario3.user){
		//alert ("usuario encontrado en usuario3");
		document.getElementById('mensajesUser').innerHTML = 
			"usuario encontrado en usuario3";
		document.getElementById('mensajesUser').style.color = "green";
	} else  {
		//alert ("usuario no encontrado");
		document.getElementById('mensajesUser').innerHTML = "Usuario no encontrado";
		document.getElementById('mensajesUser').style.color = "tomato";
	}
}
/*  --------------------------------------------------------- */
//CONTRASEÑA
/*  --------------------------------------------------------- */
function comporbarCampoPass(){
 var pass = document.getElementById('password').value; 
	//alert(pass);
	
	// SI EL CAMPO ES VACIO O NULO (required)
	if (pass === "" || pass === "null") {
		//alert ("el campo no puede ser nulo");
		document.getElementById('mensajesPass').innerHTML = 
			"el campo no puede ser nulo";
		document.getElementById('mensajesPass').style.color = "tomato";
	// SI EL CAMPO ESTÁ RELLENO CON UN ESPACIO (required)
	} else if (pass === " ") {
		//alert ("el campo no puede tener un espacio en blanco");
		document.getElementById('mensajesPass').innerHTML = 
			"el campo no puede tener un espacio en blanco";
		document.getElementById('mensajesPass').style.color = "tomato";
		//SI EL CAMPO ESTÁ RELLENO LLAMA A LA FUNCIÓN COMPROBAR USUARIO
	} else {
		alert ("el campo está relleno");
		limpiarPass();
	}
}

function limpiarPass() {	
	var pass = document.getElementById('password').value;
	
	var espacios = pass.search(/\s/i);
	//alert (espacios);
	var letras = pass.search(/[A-Z]/g);
	//alert (numeros);
	var caracteres = pass.search(/[^A-Za-z0-9]/i);
	//alert (caracteres);
	var longitud = pass.length;
	//alert (longitud);
	
	
	if (espacios != -1) {
document.getElementById('mensajesPass').innerHTML = 
	"la contraseña contine espacios en blanco";
document.getElementById('mensajesPass').style.color = "tomato";
	} else if (letras != -1) {
document.getElementById('mensajesPass').innerHTML = 
	"la contraseña contiene letras";
document.getElementById('mensajesPass').style.color = "tomato";
	} else if (caracteres != -1) {
document.getElementById('mensajesPass').innerHTML = 
	"la contraseña contiene caracteres especiales";
document.getElementById('mensajesPass').style.color = "tomato";
	} else if ((longitud <= 3) || (longitud >= 5)) {
document.getElementById('mensajesPass').innerHTML = 
	"la contraseña debe tener más o menos caracteres";
document.getElementById('mensajesPass').style.color = "tomato";
	} else {
        alert ("contraseña limpia");
		comprobarPass();
	}
}

function comprobarPass() {
	var pass = document.getElementById('password').value;
	// Quitar espacios en blanco por delante y por detrás
	//alert (user);

// SI LA CONTRASEÑA EXISTE O NO
/*if ((user === usuario1.user) || (user === usuario2.user) || (user === usuario3.user)) {}*/
	if (pass === usuario1.password) {
		//alert ("usuario encontrado en usuario1");
	document.getElementById('mensajesPass').innerHTML = 
		"contraseña encontrada en usuario1";
		document.getElementById('mensajesPass').style.color = "green";
	} else if (pass === usuario2.password){
		//alert ("usuario encontrado en usuario2");
	document.getElementById('mensajesPass').innerHTML = 
		"contraseña encontrada en usuario2";
		document.getElementById('mensajesPass').style.color = "green";
	} else if (pass === usuario3.password){
		//alert ("usuario encontrado en usuario3");
	document.getElementById('mensajesPass').innerHTML = 
		"contraseña encontrada en usuario3";
		document.getElementById('mensajesPass').style.color = "green";
	} else  {
		//alert ("usuario no encontrado");
	document.getElementById('mensajesPass').innerHTML = 
		"contraseña no encontrada";
	document.getElementById('mensajesPass').style.color = "tomato";
	}
}

/*  --------------------------------------------------------- */
// PIN
/*  --------------------------------------------------------- */

function comprobarCampoPin(){
 var pin = document.getElementById('pin').value; 
	//alert(pass);
	
	// SI EL CAMPO ES VACIO O NULO (required)
	if (pin === "" || pin === "null") {
		//alert ("el campo no puede ser nulo");
		document.getElementById('mensajesPin').innerHTML = 
			"el campo no puede ser nulo";
		document.getElementById('mensajesPin').style.color = "tomato";
	// SI EL CAMPO ESTÁ RELLENO CON UN ESPACIO (required)
	} else if (pin === " ") {
		//alert ("el campo no puede tener un espacio en blanco");
		document.getElementById('mensajesPin').innerHTML = "el campo no puede tener un espacio en blanco";
		document.getElementById('mensajesPin').style.color = "tomato";
		//SI EL CAMPO ESTÁ RELLENO LLAMA A LA FUNCIÓN COMPROBAR USUARIO
	} else {
		alert ("el campo está relleno");
		limpiarPin();
	}
}

function limpiarPin() {	
	var pin = document.getElementById('pin').value;
	
	var espacios = pin.search(/\s/i);
	//alert (espacios);
	var letras = pin.search(/[A-Z]/g);
	//alert (numeros);
	var caracteres = pin.search(/[^A-Za-z0-9]/i);
	//alert (caracteres);
	var longitud = pin.length;
	//alert (longitud);
	
	
	if (espacios != -1) {
document.getElementById('mensajesPin').innerHTML = 
	"el pin contine espacios en blanco";
document.getElementById('mensajesPin').style.color = "tomato";
	} else if (letras != -1) {
document.getElementById('mensajesPin').innerHTML = 
	"el pin contiene letras";
document.getElementById('mensajesPin').style.color = "tomato";
	} else if (caracteres != -1) {
document.getElementById('mensajesPin').innerHTML = "el pin contiene caracteres especiales";
document.getElementById('mensajesPin').style.color = "tomato";
	} else if ((longitud <= 2) || (longitud >= 4)){
document.getElementById('mensajesPin').innerHTML = 
	"el pin debe tener más o menos caracteres";
document.getElementById('mensajesPin').style.color = "tomato";
	} else {
        alert ("contraseña limpio");
		comprobarPin();
	}
}

function comprobarPin() {
	var pin = document.getElementById('pin').value;
	//alert(pin);

// SI LA CONTRASEÑA EXISTE O NO
/*if ((user === usuario1.user) || (user === usuario2.user) || (user === usuario3.user)) {}*/
	if (pin == usuario1.pin) {
		//alert ("usuario encontrado en usuario1");
		document.getElementById('mensajesPin').innerHTML = 
			"pin encontrado en usuario1";
		document.getElementById('mensajesPin').style.color = "green";
	} else if (pin == usuario2.pin){
		//alert ("usuario encontrado en usuario2");
		document.getElementById('mensajesPin').innerHTML = 
			"pin encontrado en usuario2";
		document.getElementById('mensajesPin').style.color = "green";
	} else if (pin == usuario3.pin){
		//alert ("usuario encontrado en usuario3");
		document.getElementById('mensajesPin').innerHTML = 
			"pin encontrado en usuario3";
		document.getElementById('mensajesPin').style.color = "green";
	} else  {
		//alert ("usuario no encontrado");
		document.getElementById('mensajesPin').innerHTML = 
			"pin no encontrado";
		document.getElementById('mensajesPin').style.color = "tomato";
	}
}


function login() {
	var user = document.getElementById('usuario').value;
	var pass = document.getElementById('password').value; 
	var pim = document.getElementById('password').value; 
	
	document.getElementById('login').innerHTML = "bienvenido " + user;

	
	if ((user === true) && (pass === true)) {
	document.getElementById('login').innerHTML = "usuario y contraseña correcta";
	document.getElementById('login').style.color = "tomato";
	} else if ((user === true) && (pin === true)) {
	document.getElementById('login').innerHTML = "usuario y pin correcta";
	document.getElementById('login').style.color = "tomato";
	}
	//document.getElementById('form01').action = "/action_page.php";
	document.getElementById('form01').action = "ejercicio3.html";
}
