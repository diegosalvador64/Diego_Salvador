// JavaScript Document


//cierra con el aspa y en cerrar.
function cerrar(){
	document.getElementById("miModal").style.display="none";
}

//Abrir formulario
function abrir(){
	document.getElementById("miModal").style.display="block";
}
//Para comprobar si el usuario y contraseña es correcta//
function validarFormulario() {
	var usuario = document.getElementById("usuario").value;
	var pw = document.getElementById("password").value;
		
	var usuario1 = {user:"juan", password:"1234", pin: 147}; 
	var usuario2 = {user:"pedro", password:"4321", pin: 258}; 
	var usuario3 = {user:"jose", password:"1324", pin: 369};
	
	if (usuario1.user == usuario && usuario1.password == pw) { 
	 alert("Bienvenido " + usuario);}
	else if (usuario2.user == usuario && usuario2.password == pw) { 
	 alert("Bienvenido " + usuario);}
	else if (usuario3.user == usuario && usuario3.password == pw) { 
	 alert("Bienvenido " + usuario);}
	else {
		alert("Usuario o contraseña erróneos");}	
	}

//Para recordar la contraseña: Introduzca el PIN//
function recordarContrasena() {
	var usuario = document.getElementById("usuario").value;
	var pw = document.getElementById("password").value;
		
	var usuario1 = {user:"juan", password:"1234", pin: 147}; 
	var usuario2 = {user:"pedro", password:"4321", pin: 258}; 
	var usuario3 = {user:"jose", password:"1324", pin: 369};
	
	if (usuario1.user == usuario && usuario1.password == pw) { 
	 alert("Bienvenido " + usuario);}
	else if (usuario2.user == usuario && usuario2.password == pw) { 
	 alert("Bienvenido " + usuario);}
	else if (usuario3.user == usuario && usuario3.password == pw) { 
	 alert("Bienvenido " + usuario);}
	else {
		alert("Usuario o contraseña erróneos");}	
	}