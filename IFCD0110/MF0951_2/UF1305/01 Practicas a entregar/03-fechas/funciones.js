// JavaScript Document
//EJERCICIO 3
/*Crear una función que tras introducir una fecha de nacimiento en un campo de formulario calcule la edad. Calcular también, cuántos, días, horas, minutos ha vivido esa persona a partir de su fecha de nacimiento. Mostrar el resultado en forma de lista desordenada debajo del campo de formulario.*/
function calcularEdad() {
	var fecha = new Date(document.getElementById("date1").value);
	
	var fechaActual = new Date();
	var anoUsuario = fecha.getFullYear();
	var edad = (fechaActual.getFullYear() - anoUsuario);
	
	var edadMilisegundos = fechaActual - fecha;
	var edadMinutos = (edadMilisegundos / 1000) / 60;
	var edadHoras = edadMinutos / 60;
	var edadDias = edadHoras / 24;
			
	document.getElementById("etiqueta1").innerHTML = "<ul>" + "<li>" + "Edad del sujeto: " + edad + "</li>" +
		"<li>" + "Minutos vividos: " + edadMinutos.toFixed(0) + "</li>" +
		"<li>" + "Horas vividas: " + edadHoras.toFixed(0) + "</li>" +
		"<li>" + "Días vividos: " + edadDias.toFixed(0) + "</li>" + "</ul>";
	}
/*Crear una función que recoja el valor de 3 campos de formulario, día, mes y año, y forme una fecha con ellos (formato fecha). Muestra la fecha debajo del campo de formulario en formato "dd/mm/aaaa" junto a la hora, minutos y segundos actuales del sistema en formato "hh/mm/ss". Mostrar el resultado con saltos de línea.*/
function formarFecha() {
	var dia = document.getElementById("number2").value;
	var mes = document.getElementById("number3").value;
	var ano = document.getElementById("number4").value;
	
	var fechaUsuario =  mes + "-" + dia + "-" + ano;
	var fechaFormateada = new Date(fechaUsuario);
	
	var fechaSistema = new Date();
	
	document.getElementById("etiqueta2").innerHTML = "Fecha: " + "<br>" + fechaFormateada.getDate() + "/" + 
		(fechaFormateada.getMonth() +1) + "/" + fechaFormateada.getFullYear() + "<br>" + 
		fechaSistema.getHours() + "/" + fechaSistema.getMinutes() + "/" + fechaSistema.getSeconds();
	}


