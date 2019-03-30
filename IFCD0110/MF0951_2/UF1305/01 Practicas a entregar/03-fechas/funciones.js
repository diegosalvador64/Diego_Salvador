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

/*Crear una función que al introducir una fecha en un campo de formulario muestre la fecha en este formato: "Hoy es martes, 11 de Noviembre de 2018". */
function fechaLarga() {
	
	var fecha = new Date(document.getElementById("date3").value);
	
	var dias = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
	var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
	
	var mes       = fecha.getMonth();
	var dia       = fecha.getDate();
	var diaSemana = fecha.getDay();
	var anio      = fecha.getFullYear();
					
	document.getElementById("etiqueta3").innerHTML = "<strong>" + "\"Hoy es " + dias[diaSemana] + " " + dia + " de " +   meses[mes] + " de " + anio + "\"" + "</strong>";	
}
/*Crear una función que tras identificarse una persona con usuario y contraseña en un formulario de acceso, muestre un mensaje de bienvenida con el nombre de usuario y la frase: "Hola usuario, has iniciado sesión el día 13/11/2018 a las 15:30:25". Mostar el resultado debajo del campo de formulario.*/
function sesionUser() {
	var usuario  = document.getElementById("text4").value;
	var password = document.getElementById("password4").value;
	
	if (usuario === "diego") {
		if (password !== "alejandro") {
			alert("Contraseña no válida");
			return false;
		}
	} else {
			alert("Usuario inexistente");
			return false;
	}
	
	var fechaSistema = new Date();
	
	alert("¡Bienvenido " + usuario.toUpperCase() + "!" + "¡Me alegra de verte de nuevo por aquí!");
	
	document.getElementById("etiqueta4").innerHTML = "<strong>" + "\"Hola " + usuario.toUpperCase() + ", has iniciado sesión el día " +  fechaSistema.getDate() + "/" + (fechaSistema.getMonth() +1) + "/" + fechaSistema.getFullYear() +     " a las " +  fechaSistema.getHours() + ":" + fechaSistema.getMinutes() + ":" + fechaSistema.getSeconds() +
	"\"" + "</strong>";	
}
/*Crear una función que introduciendo la fecha de nacimiento en un campo de formulario calcule los días que faltan para su cumpleaños a partir de la fecha introducida. Si el cumpleaños ya ha pasado, mostrar los días que han transcurrido desde la su último cumpleaños y los días restantes que faltan para el siguiente cumpleaños, y si el cumpleaños no ha llegado aún, mostrar sólo los días restantes. */
function calcularDias() {
	
	var fecha = new Date(document.getElementById("date5").value);
	var fechaSistema = new Date();
	
	var fechaParaComparar = new Date((fecha.getMonth() +1) + "-" + fecha.getDate() + "-" + fechaSistema.getFullYear());
	
	var dias = 0;
	var text = "";
	
	if ((fechaSistema > fechaParaComparar) || (fechaSistema < fechaParaComparar)) {
		dias = Number((((((fechaSistema - fechaParaComparar) / 1000) / 60) / 60) / 24));
		}
	
	var diasDef; 
	
	switch (true) {
		case (dias > 0 && dias < 1):
		    diasDef = 0;
			break;
		case (dias > 0 && dias >= 1):
			diasDef = dias.toFixed(0)-1;
			break;
		case (dias < 0 && dias >= -1):
			diasDef = -1;
			break;
		case (dias < 0 && dias <= -1):
			diasDef = dias.toFixed(0)-1;
			break;
	} 
			
	switch (true) {
		case diasDef > 0:
			text = "Han pasado " + diasDef + " días desde mi cumpleaños";
			break;
		case diasDef < 0:
			text = "Quedan " + diasDef*(-1) + " días para tu cumpleaños";
			break;
		default:
			text = "FELICIDADES, HOY ES TU CUMPLEAÑOS";
	}
	
	document.getElementById("etiqueta5").innerHTML = "<strong>" + text + "</strong>";
}