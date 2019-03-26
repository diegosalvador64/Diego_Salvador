// JavaScript Document
//EJERCICIO 2

function calcularSueldo() {
	var sueldo = parseInt(document.getElementById("number1").value);
	
	if (isNaN(sueldo) == true) {
		alert("teclee un número");
		return false;
	}
	
	var sueldoMensualBruto = sueldo / 14;
	var seguridadSocial = (sueldoMensualBruto * 6.4) / 100;
	var irpf = (sueldoMensualBruto * 15) / 100;
	var sueldoMensualNeto = (sueldoMensualBruto - seguridadSocial - irpf);
	var retenciones = irpf + seguridadSocial;
		
	document.getElementById("etiqueta1").innerHTML = "Sueldo bruto anual: " + sueldo + "€" + "<br>" +
		"Sueldo Bruto mensual: " + sueldoMensualBruto.toFixed(2) + "€" +  "<br>" +
		"Retenciones: " + "<br>" +
		"- Seguridad Social: " + seguridadSocial.toFixed(2) + "€" +  "<br>" +
		"- IRPF: " + irpf.toFixed(2) + "€" + "<br>" +
		"Total retenciones: " + retenciones.toFixed(2) + "€" + "<br>" +  
		"Número de pagas: " + "14" + "€" + "<br>" +
		"Sueldo mensual neto: " + sueldoMensualNeto.toFixed(2) + "€";
	}

function calcularPrecioProducto() {
	var precioInicial = parseInt(document.getElementById("number2").value);
	
	if (isNaN(precioInicial) == true) {
		alert("teclee un número");
		return false;
	}
	//lo he calculado restando primero el descuento y sobre este valor calculando el IVA.
	var descuento = (precioInicial * 20) / 100;
	var precioDescuento = precioInicial - descuento;
	var impuesto = (precioDescuento * 21) / 100;
	var precioFinal = precioDescuento + impuesto;
			
	document.getElementById("etiqueta2").innerHTML = "Precio producto: " + precioInicial + "€" + "<br>" +
		"Con Descuento 20%: " + precioDescuento.toFixed(2) + "€" +  "<br>" +
		"IVA: +" + impuesto.toFixed() + "€" + "<br>" +
		"Precio final: " + precioFinal.toFixed(2) + "€";
	}

function calcularTiempoDescarga() {
	var pesoArchivo= parseInt(document.getElementById("number3").value);
	
	if (isNaN(pesoArchivo) == true) {
		alert("teclee un número");
		return false;
			}
	
	//multiplico el peso archivo que está en Megabytes (1 byte = 8 bit) y lo divido por 10, porque 10 mbps (Megabit por segundo). Como este resultado vendrá en segunod, lo divido por 60 para transformarlo a minutos
	var tiempo = ((pesoArchivo * 8) / 10) / 60; 
				
	document.getElementById("etiqueta3").innerHTML = "Peso Archivo: " + pesoArchivo + " Megabytes" + "<br>" +
		"Tiempo en minutos: " + tiempo.toFixed(2);
	}

//Crear una función que muestre la frase entre comillas, mayúsculas, minúsculas, al revés y con la palabra "Cita:" al comienzo de la frase
function introducirFrase() {
	var frase= document.getElementById("number4").value;
	
	if (frase == " ") {
		alert("teclee una frase");
		return false;
			}
	var arrayFrase = frase.split(" ");
	
	document.getElementById("etiqueta4").innerHTML = "Frase: " + arrayFrase + "<br>" +
		"\"Cita\" entre comillas" + frase + "<br>" +
		"\"Cita\" en mayúsculas" + frase.toUpperCase() + "<br>" +
		"\"Cita\" en minúsculas" + frase.toLowerCase() + "<br>";
	
	//Y convertir con toString de nuevo a string desde array; reverse para el revés: no sé si esto funciona igual con arrays y con cadenas. Convierto primero a arrays, le meto la función reverse() y luego lo convierto a string de nuevo
	}

