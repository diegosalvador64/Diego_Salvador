// JavaScript Document
/*Ejercicio 1:
Crear una función que, al introducir el número de DNI compruebe si la letra introducida es correcta. La fórmula para comprobar la letra es el resto de la división entre 23 del número del DNI. (numero % 23)*/ 
function comprobarNIF() {
	var nifUsuario = document.getElementById("text1").value;
	
	if (nifUsuario == "") {
		alert("teclee el NIF");
		return false;
		}
	
	var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
	
	var numero = parseInt(nifUsuario.substr(0,nifUsuario.length-1))%23; //Para extraer los números del NIF y dividir entre 23 y ver el resto. Es el algoritmo usado por la policía, usar el resto de una división por 23
	var letra  = nifUsuario.substr(nifUsuario.length-1,1).toUpperCase(); //Para extraer la letra del NIF, y cambiarla a mayúscula
	
	var texto;
	
	if (letras[numero] == letra) {
		texto = "La letra es correcta"; 
	} else {texto = "No coincide la letra";}
	
	document.getElementById("etiqueta1").innerHTML = "<em><strong>" + texto.toUpperCase() + "</strong></em>";
}
/*Ejercicio 2: 
Crear una función que muestre el signo del zodiaco según la fecha de nacimiento introducida por el usuario. 
El resultado debe de mostrar un texto y una imagen del correspondiente signo del zodiaco.*/
function signoZodiaco() {
	var fecha = new Date(document.getElementById("date2").value);
	
	var dia = fecha.getDate();
	var mes = fecha.getMonth()+1;
	
	var signo;
	var imagen;
	//Aries (Fecha: Del 21 de marzo al 20 de abril)
	if ((dia >= 21 && mes == 3) || (dia <= 20 && mes == 4)) {
		signo = "Aries";
		imagen = "img/aries.jpg";}
	  else if ((dia >= 21 && mes == 4) || (dia <= 20 && mes == 5)) {
				signo = "Tauro";
				imagen = "img/tauro.jpg";}
		else if ((dia >= 21 && mes == 5) || (dia <= 21 && mes == 6)) {
				 signo = "Géminis";
				 imagen = "img/geminis.jpg";}
		  else if ((dia >= 22 && mes == 6) || (dia <= 22 && mes == 7)) {
				  signo = "Cáncer";
				  imagen = "img/cancer.jpg";}
		    else if ((dia >= 23 && mes == 7) || (dia <= 23 && mes == 8)) {
				   signo = "Leo";
				   imagen = "img/leo.jpg";}
		     else if ((dia >= 24 && mes == 8) || (dia <= 23 && mes == 9)) {
				    signo = "Virgo";
				    imagen = "img/virgo.jpg";}
		      else if ((dia >= 24 && mes == 9) || (dia <= 22 && mes == 10)) {
				     signo = "Libra";
				     imagen = "img/libra.jpg";}
		       else if ((dia >= 23 && mes == 10) || (dia <= 22 && mes == 11)) {
				      signo = "Escorpio";
				      imagen = "img/escorpio.jpg";}
		        else if ((dia >= 23 && mes == 11) || (dia <= 21 && mes == 12)) {
				        signo = "Sagitario";
				        imagen = "img/sagitario.jpg";}
		         else if ((dia >= 22 && mes == 12) || (dia <= 19 && mes == 1)) {
				         signo = "Capricornio";
				         imagen = "img/capricornio.jpg";}
		          else if ((dia >= 20 && mes == 1) || (dia <= 19 && mes == 2)) {
				         signo = "Acuario";
				         imagen = "img/acuario.jpg";}
		           else if ((dia >= 20 && mes == 2) || (dia <= 20 && mes == 3)) {
				          signo = "Piscis";
				          imagen = "img/piscis.jpg";}
	
	var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
	
	document.getElementById("etiqueta2").innerHTML = 'Naciste un ' + dia + ' de ' + meses[fecha.getMonth()] + '<br><br>' + '<strong>Eres ' + signo + '</strong>' + '<br>' + '<img src=' + '"' + imagen + '"' + ' style="width:100px; heigth:100px">';
}
