// JavaScript Document
//Función Reloj
function reloj(){
	var fecha     = new Date();
	var anio      = fecha.getFullYear();
	var mes       = fecha.getMonth();
	var	numeroMes = mes +1; //ojo, que el mes viene en formato del 0-11,por eso le sumo 1
	var dia       = fecha.getDate();
	var hora      = fecha.getHours();
	var minuto    = fecha.getMinutes();
	var segundo   = fecha.getSeconds();
	var diaSemana = fecha.getDay();
	
	var dias = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
	var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
				
	document.getElementById("link1").innerHTML = "Año: " + anio;
	if (numeroMes<10) {
		numeroMes="0"+numeroMes;
	}
	document.getElementById("link2").innerHTML = "Mes: " + numeroMes;
	if (dia<10) {
		dia="0"+dia;
	}
	document.getElementById("link3").innerHTML = "Día: " + dia;
	if (hora<10) {
		hora="0"+hora;
	}
	document.getElementById("link4").innerHTML = "Horas: " + hora;
	if (minuto<10) {
		minuto="0"+minuto;
	}
	document.getElementById("link5").innerHTML = "Minutos: " + minuto;
	if (segundo<10) {
		segundo="0"+segundo;
	}
	document.getElementById("link6").innerHTML = "Segundos: " + segundo;
	
	document.getElementById("fechalarga").innerHTML = "Hoy es " + dias[diaSemana] + " " + dia + " de " +   meses[mes] + " de " + anio;
	
	setTimeout(reloj,1000); //actualiza la función reloj
}
//función new Array
function ejemplonewArray() {
	var color1 = prompt("Inserte un color: ");
	var color2 = prompt("Inserte otro color: ");
	var color3 = prompt("Inserte otro color más: ");
	
	var colores = ("\"" + color1 + "\"," + "\"" + color2 + "\"," + "\"" + color3 + "\"");
		
	var crearMatriz = new Array(color1,color2,color3);
	
	alert("Se han creado las variables:  " + "\n" +
		  "var color1 = " + color1 + "\n" +
		  "var color2 = " + color2 + "\n" +
		  "var color3 = " + color3 + "\n" +
		  "Se ha creado la matriz colores" + "\n" +
		  "var colores = " + "[" + colores + "];" + "\n" +
		  "La variable colores es de tipo: " + typeof(crearMatriz) + "\n" +
		  "la matriz contiene: " + crearMatriz.length) + "valores.";
}
//función join()
function ejemplojoin() {
	var color1 = prompt("Inserte un color: ");
	var color2 = prompt("Inserte otro color: ");
	var color3 = prompt("Inserte otro color más: ");
	
	var colores = ("\"" + color1 + "\"," + "\"" + color2 + "\"," + "\"" + color3 + "\"");
		
	var crearMatriz = new Array(color1,color2,color3);
	
	alert("Se han creado las variables:  " + "\n" +
		  "var color1 = " + color1 + "\n" +
		  "var color2 = " + color2 + "\n" +
		  "var color3 = " + color3 + "\n" +
		  "Se ha creado la matriz colores" + "\n" +
		  "var colores = " + "[" + colores + "];" + "\n" +
		  "La variable colores es de tipo: " + typeof(crearMatriz) + "\n" +
		  " La matriz contiene: " + crearMatriz.length + " valores. " +
		  "He separado los valores con '*' mediante el método join() " +
		  crearMatriz.join(" * "));
}
//función pop()
function ejemplopop() {
			
	var matriz = new Array("rojo","verde","azul","amarillo");
	
	alert("Tengo la matriz: " + matriz + "\n" + "Eliminamos la última posición usando el método pop()");
	
	var quitar = matriz.pop();
	
	alert("La matriz queda así usando el método pop() " + matriz + "\n" + "Se ha eliminado el elemento: " + quitar);
}
//función push()
function ejemplopush() {
			
	var matriz = new Array("rojo","verde","azul","amarillo");
	
	alert("Tengo la matriz: " + matriz + "\n" + "Añadimos un elemento usando el método push()");
	
	var nuevoColor = prompt("Añade otro color: ");
	
	matriz.push(nuevoColor);
		
	alert("La matriz queda así usando el método push(): " + matriz);
}
//función shift()
function ejemploshift() {
			
	var matriz = new Array("rojo","verde","azul","amarillo");
	
	alert("Tengo la matriz: " + matriz + "\n" + "Eliminamos la primera posición usando el método shift()");
	
	var quitar = matriz.shift();
	
	alert("La matriz queda así usando el método shift() " + matriz + "\n" + "Se ha eliminado el elemento: " + quitar);
}
//función unshift()
function ejemplounshift() {
			
	var matriz = new Array("rojo","verde","azul","amarillo");
	
	alert("Tengo la matriz: " + matriz + "\n" + "Añadimos un elemento al comienzo usando el método unshift()");
	
	var nuevoColor = prompt("Añade otro color: ");
	
	matriz.unshift(nuevoColor);
		
	alert("La matriz queda así usando el método unshift(): " + matriz);
}
//función sort()
function ejemplosort() {
			
	var matriz = new Array("rojo","verde","azul","amarillo");
	
	alert("Tengo la matriz: " + matriz + "\n" + "Ordenamos alfabéticamente usando el método sort()");
	
	matriz.sort();
		
	alert("La matriz queda así ordenando con el método sort(): " + matriz);
}
//propiedad length
function ejemplolength() {
			
	var matriz = new Array("rojo","verde","azul","amarillo");
	
	alert("Tengo la matriz: " + matriz + "\n" + "Añadimos un elemento al final usando la propiedad length");
	
	var nuevoColor = prompt("Añade otro color: ");
	
	matriz[matriz.length] = nuevoColor;
		
	alert("La matriz queda así usando la propiedad length: " + matriz);
}
//propiedad splice()
function ejemplosplice() {
			
	var matriz = new Array("rojo","verde","azul","amarillo");
	
	alert("Tengo la matriz: " + matriz + "\n" + "Añadimos un elementos en las posiciones deseadas usando splice()");
	
	var nuevoColor1 = prompt("Añade un color: ");
	var nuevoColor2 = prompt("Añade otro color: ");
	
	var longitud = matriz.length;
	
	var posicion = prompt("Elija un número del 0 al " + longitud + " para la posición donde quiere incluir los dos colores que ha tecleado");
	
	matriz.splice(posicion, 0, nuevoColor1, nuevoColor2);
		
	alert("La matriz queda así usando el método splice() con los parámetros introducidos: " + matriz);
}
//propiedad concat()
function ejemploconcat() {
			
	var matriz = new Array("rojo","verde","azul","amarillo");
	
	alert("Tengo la matriz: " + matriz + "\n" + "Concatenamos otros arrays con el método concat()" + "\n" + "Para ello creamos otro array con nuevos colores");
	
	var nuevoColor1 = prompt("Añade un color: ");
	var nuevoColor2 = prompt("Añade otro color: ");
	var nuevoColor3 = prompt("Añade otro color más: ");
	
	var nuevaMatriz = new Array(nuevoColor1,nuevoColor2,nuevoColor3);
	
	var resultado = matriz.concat(nuevaMatriz); 
	
	alert("La nueva matriz resultante y ordenada con sort() es: " + resultado.sort());
}
//función reverse()
function ejemploreverse() {
			
	var matriz = new Array("rojo","verde","azul","amarillo");
	var matrizAntigua = matriz.toString();//en Javascript: si var a = 10; var b = a; si se modifica el valor de a, también se modifica el valor de b. Debe ser un asunto de asignación de memoria. Si una variable se asigna a una segunda, si se modifica una se modifica la otra. Si convierto el array en string (con el método toString(), ya mantiene el valor anterior)
	
	var a = 10; //en este caso sí que mantiene el valor original de "a"; al guardarlo en una "const", que esa sí que no está afectada por los cambios en la variable "a".
	const b = a;
	a += 20;
	alert("La variable a es " + a + " la constante b es " + b)
	
	alert("Tengo la matriz: " + matriz + "\n" + "Con el método reverse() se invierte el orden ");
	
	matriz.reverse();
	
	alert("La matriz original era: " + matrizAntigua);
	alert("La matriz queda así con el método reverse(): " + matriz);
}
//función reduce()
function ejemploreduce() {
	
	var nuevoNum1 = prompt("Añade un número: ");
	var nuevoNum2 = prompt("Añade otro número: ");
	var nuevoNum3 = prompt("Añade otro número más: ");
	
	var numbers = [parseInt(nuevoNum1), parseInt(nuevoNum2), parseInt(nuevoNum3)];
	
	function sumar(total, num) {
  		return total + num;
	}
	
	var resultado = numbers.reduce(sumar);
	
	alert("Convertimos los números introducidos en un array: " + numbers + "\n" + "El resultado final del método reduce(): " + resultado) 
}
//función every()
function ejemploevery() {
	
	var num1 = prompt("Añade un número: ");
	var num2 = prompt("Añade otro número: ");
	var num3 = prompt("Añade otro número más: ");
	
	var matriz = new Array(parseInt(num1), parseInt(num2), parseInt(num3));
	
	function checkMayorEdad(edad) {
  			return edad >= 18;
	}
	
	var resultado = matriz.every(checkMayorEdad);
	
	var res;
	
	if (resultado == true) {
		res = "SI";
		alert(res + " pueden pasar. Ustedes son todos mayores de edad"); 
	} else {
		res = "NO";
		alert(res + " pueden pasar. Hay algún menor");
	}
}
//propiedad slice()
function ejemploslice() {
			
	var matriz = new Array("rojo","verde","azul","amarillo","negro");
	
	alert("Tengo la matriz: " + matriz + "\n" + " queremos quitar elementos utilizando el método slice()");
	
	var longitud = matriz.length;
	
	var posicion1 = prompt("Elija un número del 0 al " + longitud + " para la posición desde donde quiere quitar el color");
	var posicion2 = prompt("Elija un número del 0 al " + longitud + " para la posición hasta donde quiere quitar el color");
	
	var resultado = matriz.slice(parseInt(posicion1),parseInt(posicion2));
		
	alert("La matriz queda así usando el método slice() con los parámetros introducidos: " + resultado);
}
//propiedad fill()
function ejemplofill() {
			
	var matriz = new Array("rojo","verde","azul","amarillo");
	
	alert("Tengo la matriz: " + matriz + "\n" + "Voy a cambiar cada elemento de la matriz por lo que voy a escribir");
	
	var nuevoColor1 = prompt("Añade un color: ");
	
	var longitud = matriz.length;
	
	var posicion1 = prompt("Elija un número del 0 al " + longitud + " para la posición desde donde quiere cambiar el color");
	var posicion2 = prompt("Elija un número del 0 al " + longitud + " para la posición hasta donde quiere cambiar el color");
			
	matriz.fill(nuevoColor1, parseInt(posicion1), parseInt(posicion2));
		
	alert("La matriz queda así usando el método fill() con el nuevo valor introducido" + "\n" + "y los argumentos de inicio y fin: " + matriz);
}
//función prototype
function ejemploprototipo() {
	
	Array.prototype.misMayusculas = function() {
  		var i;
  		for (i = 0; i < this.length; i++) 
								{
		   	this[i] = this[i].toUpperCase();
  		}
	};
//primero pasa por myFunction; Y luego por el prototype; Lógico, pues primero debe pasar por la invocación a la función, que luego buscará. Como la función tiene dentro otra función, se irá a buscarla.
	function myFunction() {
		var color1 = prompt("Añade un color: ");
		var color2 = prompt("Añade otro color: ");
		var matriz = new Array(color1, color2);
		matriz.misMayusculas();
		alert("He convertido todos los colores a mayúsculas " + matriz);
	}
	
	myFunction();
		
}