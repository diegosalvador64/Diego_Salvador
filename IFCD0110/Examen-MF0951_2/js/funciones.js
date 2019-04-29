// JavaScript Document
/*Ejercicio 1: 
Crear una función que, al pulsar en un botón de formulario muestre el nombre y el propietario del navegador web que está utilizando el usuario. El mensaje debe de mostrarse en un cuadro de alerta del navegador.*/
function mostrarNavegador() {
			
	//Motor Navegador
	var motorNombre = window.navigator.appName;
	if (motorNombre === "Netscape") {motorNombre = "JavaScript";}
	
	var navegador, agenteUsuario = navigator.userAgent;
	
	if (agenteUsuario.indexOf("Firefox") > -1) 
		{navegador = "Firefox";}
	else if (agenteUsuario.indexOf("Opera") > -1 || agenteUsuario.indexOf("OPR") > -1)
		{navegador = "Opera";}
	else if (agenteUsuario.indexOf("Trident") > -1 || agenteUsuario.indexOf("MSIE") > -1)
		{navegador = "I.Explorer";}
	else if (agenteUsuario.indexOf("Edge") > -1)
		{navegador = "Edge";}
	else if (agenteUsuario.indexOf("Chrome") > -1)
		{navegador = "Chrome";}
	else if (agenteUsuario.indexOf("Safari") > -1)
		{navegador = "Safari";}
	else {navegador = "Desconocido";}
		
	//Propietario Navegador: se rellena con el siguiente algoritmo a partir de los datos de userAgent anteriormente extraido
	var propietario = " ";
	
	if (agenteUsuario.indexOf("Firefox") > -1) 
		{propietario = "Fundación Mozilla";}
	else if (agenteUsuario.indexOf("Opera") > -1 || agenteUsuario.indexOf("OPR") > -1)
		{propietario = "Opera Software";}
	else if (agenteUsuario.indexOf("Trident") > -1 || agenteUsuario.indexOf("MSIE") > -1)
		{propietario = "Microsoft Corporation";}
	else if (agenteUsuario.indexOf("Edge") > -1)
		{propietario = "Microsoft Corporation";}
	else if (agenteUsuario.indexOf("Chrome") > -1)
		{propietario = "Google, Inc.";}
	else if (agenteUsuario.indexOf("Safari") > -1)
		{propietario = "Apple Computer, Inc.";}
	else {propietario = "Desconocido";}
	
		
	//Agente Usuario: con éste podemos sacar casi toda la información
	var agenteUsuario = window.navigator.userAgent;
	
	alert("El nombre del navegador es " + navegador + "\n" + "El propietario del navegador web es " + propietario);
	
		
}

/*Ejercicio 2: 
Crear una función que, introduciendo una fecha en un campo de formulario, muestre el día de la semana y el mes con texto. El día del mes y el año deben de estar en formato numérico. La fecha debe de tener este formato “miércoles, 21 noviembre, 2018”.*/

function calcularFecha() {
	
	var fecha = new Date(document.getElementById("date2").value);
	
	var dias = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
	var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
	
	var mes       = fecha.getMonth();
	var dia       = fecha.getDate();
	var diaSemana = fecha.getDay();
	var anio      = fecha.getFullYear();
					
	document.getElementById("etiqueta2").innerHTML = "<strong>" + dias[diaSemana] + ", " + dia + " de " +   meses[mes] + ", " + anio + "</strong>";	
}
	
/*Ejercicio 3: 
Crear una función que, introduciendo 3 frutas separadas por comas en un campo de formulario, muestre los datos introducidos en una lista desordenada de HTML. Mostrar la lista debajo del campo de formulario.

• Peras
• anzanas
• Uvas.*/

function meterFrutas() {
	var frutas= document.getElementById("textfield1").value;
	
	if (frutas == "") {
		alert("teclee tres frutas separadas por comas");
		return false;
		}
	
	var frutasSin = frutas.replace(/\"/gi, " ");
		
	var arrayFrutas = frutasSin.split(",");
	
	var texto = "";
	
	texto +="<ul>";
	
	for (i in arrayFrutas) {
		texto += "<li><strong>" + arrayFrutas[i].trim() + "</strong></li>";
	}
	
	texto+="</ul>"
	document.getElementById("etiqueta3").innerHTML = texto; 
}
	
/*Ejercicio 4: 
Crea una función que, introduciendo en un campo de formulario una fecha, capture la hora, minutos y segundos del sistema, y muestre la fecha introducida junto a la hora del sistema en este formato: “Has iniciado sesión el día 13/11/2018 a las 15:30:25”.*/

function sesionFecha() {
	var fechaUsuario  =  new Date(document.getElementById("date3").value);
		
	var fechaSistema = new Date();
	
	document.getElementById("etiqueta4").innerHTML = "\"" + "<strong>" + fechaUsuario.getDate() + "/" + (fechaUsuario.getMonth() +1) + "/" + fechaUsuario.getFullYear() + " Has iniciado sesión el día " +  fechaSistema.getDate() + "/" + (fechaSistema.getMonth() +1) + "/" + fechaSistema.getFullYear() +  
		" a las " +  fechaSistema.getHours() + ":" + fechaSistema.getMinutes() + ":" + fechaSistema.getSeconds() + "\"" + "</strong>";	
}

/*Ejercicio 5: 

Crea una función que, introduciendo un precio en un campo de formulario, calcule el precio final, aplicándole un descuento del 20%, y sumándole los impuestos 21% IVA. Mostrar el precio con el símbolo del Euro y con dos decimales. Utiliza una etiqueta de párrafo debajo del campo de formulario, para mostrar el precio desglosado como en el ejemplo.

Subtotal	25.95 €
Descuento 20%  	5.19 €
IVA 21 % = 	4.35 €
Total	25.11 €*/

function calcularPrecioProducto() {
	var precioInicial = parseInt(document.getElementById("number1").value);
	
	if (isNaN(precioInicial) == true) {
		alert("teclee un número");
		return false;
	}
	//lo he calculado restando primero el descuento y sobre este valor calculando el IVA.
	var descuento = (precioInicial * 20) / 100;
	var precioDescuento = precioInicial - descuento;
	var impuesto = (precioDescuento * 21) / 100;
	var precioFinal = precioDescuento + impuesto;
			
	document.getElementById("etiqueta5").innerHTML = "<p><strong>" +
		"Subtotal      : " + "    " + precioInicial.toFixed(2) + "€" + "<br>" +
		"Descuento 20% : " + "    " + descuento.toFixed(2) + "€" +  "<br>" +
		"IVA 21%       : " + "    " + impuesto.toFixed(2) + "€" + "<br>" +
		"Total         : " + "    " + precioFinal.toFixed(2) + "€" +
		"</strong></p>";
	}

/*Ejercicio 6: 
Crear una función que, introduciendo la fecha de nacimiento de una persona en un campo de formulario, le diga el signo del zodiaco y le muestre una imagen del signo encima del texto. La imagen y el texto deben de estar alineadas al centro.

Signos zodiacales

Acuario (Enero 20 – Febrero 18) 
Piscis (Febrero 19 – Marzo 20)
Aries (Marzo 21 –Abril 19)
Tauro (Abril 20 – Mayo 20)
Géminis (Mayo 21 – Junio 20)
Cáncer (Junio 21 – Julio 22)
Leo (Julio 23–Agosto 22)
Virgo (Agosto 23 – Septiembre 22) 
Libra (Septiembre 23 – Octubre 22)
Escorpio (Octubre 23 – Noviembre 21)
Sagitario (Noviembre 22 – Diciembre 21) 
Capricornio (Diciembre 22 – Enero 19)
*/

function signoZodiaco() {
	var fecha = new Date(document.getElementById("date4").value);
	
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
	
	document.getElementById("etiqueta6").innerHTML = '<p style="text-align:center"><strong>Eres ' + signo + '</strong>' + '<br>' + '<img src=' + '"' + imagen + '"' + ' style="width:100px; heigth:100px"></p>';
}

/*Crear una función que, introduciendo un número del 1 al 10 en un campo de formulario, muestre la tabla de multiplicar de ese número. Muestra el resultado de la tabla de multiplicar en forma de listado hacia abajo como se muestra en el ejemplo. Mostrar mensaje en rojo si no se introduce un número comprendido entre 1 y 10.

Tabla del 8 
 
8 x 1 = 8
8 x 2 = 16
8 x 3 = 24
8 x 4 = 32
8 x 5 = 40
8 x 6 = 48
8 x 7 = 56
8 x 8 = 64
8 x 9 = 72
8 x 10 = 80*/

function tablaMultiplicar() {
	var numero= parseInt(document.getElementById("number2").value);
	
	if (isNaN(numero) == true) {
		alert("teclee un número");
		return false;
			}
	if (numero < 0 || numero > 10) {
		document.getElementById("etiqueta7").style.color = "red";
		document.getElementById("etiqueta7").innerHTML = "Debe introducir un valor entre 0 y 10";
		return false;
	} 
	
	var producto = 0;
	var i = 0;
	var resultado = "<p><strong>" + "Tabla del " + numero + "</strong></p>" + '<ul style="list-style-type:none;"><strong>';
	
	for (i=1; i<= 10; i++) {
		producto = numero * i;
		resultado += "<li>" + numero + " x " + i + " = " + producto + "</li>";
	}
	resultado += "</strong></ul>";
	
	document.getElementById("etiqueta7").innerHTML = resultado;
}

/*Ejercicio 8:
Crear una función que, al introducir una fecha de nacimiento a partir de año 2000, compruebe a que categoría deportiva de fútbol pertenece. Utiliza una etiqueta de párrafo debajo del campo de formulario, para mostrar la categoría. Mostrar mensaje en rojo si no se introduce una fecha correcta. 
Selecciones españolas de fútbol:
 
Prebenjamín = 7,8 años. 
Benjamín = 9,10 años. 
Alevín = 11,12 años.
Infantil= 13,14 años.
Cadete = 15,16 años. 
Juvenil = 17,18,19 años.
Sénior = Absoluta.*/

function calcularCategoriaDeportiva() {
	var fecha = new Date(document.getElementById("date5").value);
	
	var fechaActual = new Date();
	var anoUsuario = fecha.getFullYear();
	var edad = (fechaActual.getFullYear() - anoUsuario);
	
	var resultado = " ";
	
	switch (edad) {
		case 7:
		case 8:
		   resultado = "Categoría Prebenjamín";
		   break;
		case 9:
		case 10:
		   resultado = "Categoría Benjamín";
		   break;
		case 11:
		case 12:
		   resultado = "Categoría Alevín";
		   break;
		case 13:
		case 14:
		   resultado = "Categoría Infantil";
		   break;
		case 15:
		case 16:
		   resultado = "Categoría Cadete";
		   break;
		case 17:
		case 18:
		case 19:
		   resultado = "Categoría Juvenil";
		   break;
		default: 
		   break;
	}
		if (edad > 19) {
			resultado = "Eres muy mayor para jugar al fútbol con nosotros";
			document.getElementById("etiqueta8").style.color = "red";
			document.getElementById("etiqueta8").innerHTML = resultado;
			return;
		}
		if (edad < 7) {
			resultado = "Eres muy enano para jugar al fútbol con nosotros";
			document.getElementById("etiqueta8").style.color = "red";
			document.getElementById("etiqueta8").innerHTML = resultado;
			return;
		}	
	document.getElementById("etiqueta8").style.color = "black";
	document.getElementById("etiqueta8").innerHTML = "<strong>Tienes " + edad + " años" + "<br>" + resultado + "</strong>";
}

/*Ejercicio 9: 
Crea una función que, al pulsar en un botón de formulario muestre los datos almacenados en una variable y los represente en una tabla html creada con JavaScript.

var car = {nombre:"Juan", apellido:" Fernández ", telefono: “654789452”, email: “jfernandez@gmail.com”, fecha:”02/07/1968”, edad:”50 años”};

Nombre	Apellidos	Teléfono	Email	Fecha	Edad
Juan	Fernández	654789452	jfernandez@gmail.com	02/07/1968	50 años*/

function datosUsuario() {
	
	var car = {nombre:"Juan", 
			   apellido:" Fernández ", 
			   telefono:"654789452", 
			   email:"jfernandez@gmail.com", 
			   fecha:"02/07/1968", 
			   edad:"50 años"};

	
 /* <tr>
    <td>Jill</td>
    <td>Smith</td> 
    <td>50</td>
  </tr> */
	
	var resultado = '<table><tr><th>Nombre</th><th>Apellidos</th><th>Teléfono</th><th>Email</th>' + 
	"<th>Fecha</th><th>Edad</th></tr>" +
	"<tr><td>" + car.nombre + "</td>" +
	"<td>" + car.apellido + "</td>" +
	"<td>" + car.telefono + "</td>" +
	"<td>" + car.email + "</td>" +	
	"<td>" + car.fecha + "</td>" +
	"<td>" + car.edad + "</td></tr>" +
	"</table>";
	
	document.getElementById("etiqueta9").style.width = "40%"; 
	document.getElementById("etiqueta9").style.border = "1px solid black";
	document.getElementById("etiqueta9").style.textAlign = "center";
	document.getElementById("etiqueta9").innerHTML = resultado;
}

/*Ejercicio 10:
Crea una función que, al pulsar en un botón de formulario muestre un mensaje emergente de alerta para informar al usuario que debe de aceptar la política de cookies del sitio web.  El mensaje debe de estar situado en la parte inferior de la web, ocupando todo el ancho de la página, de forma fija. Tendrá un botón de aceptar que al pulsar cerrará el mensaje, y una x para cerrar el mensaje.

Texto a utilizar:  
“Según el apartado 2 del artículo 22 de la LSSI le informamos que utilizamos cookies propias y de terceros para mejorar nuestros servicios y mostrarle publicidad relacionada con sus preferencias mediante el análisis de sus hábitos de navegación. Tras aceptar o cerrar el mensaje, entendemos que acepta nuestra Política de Cookies”.*/

