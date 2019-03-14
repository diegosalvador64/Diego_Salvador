 //JavaScript Document
 // prueba Length
 function pruebaLength() {
		var nombre = prompt('Teclee su nombre');
		var metodo = nombre.length;
		window.alert('la longitud de tu nombre es ' + metodo);	
	}

// prueba charAt
 function pruebacharAt() {
		var nombre = prompt('Teclee su nombre');
	 	var longitud = nombre.length;
	 	var numero = prompt('Teclee un número entre 1 y ' + longitud);
	 	var numeroPosicion = nombre.charAt(numero-1); //porque la máquina cuenta desde cero
		window.alert('La letra de la posición ' + numero + ' es: ' + numeroPosicion);	
	}
// prueba charCodeAt
 function pruebacharCodeAt() {
		var nombre = prompt('Teclee su nombre');
		var metodo = nombre.charCodeAt(3);
		window.alert('El carácter unicode de la cuarta posición de su nombre es ' + metodo);	
	}
// prueba fromcharCodeAt
 function pruebafromCharCode() {
		var nombre = prompt('Teclee un número del 32 al 126');
	 	var entero = parseInt(nombre);
	 	var metodo = String.fromCharCode(entero);
	 	window.alert('El carácter correspondiente a ' + entero + ' es ' + metodo);	
	}
// prueba toUpperCase
 function pruebatoUpperCase() {
		var nombre = prompt('Teclee su nombre y apellidos en minúsculas: ');
	 	var metodo = nombre.toUpperCase();
		window.alert('Se ha transformado su nombre a mayúsculas ' + metodo);	
	}
// prueba toLowerCase
 function pruebatoLowerCase() {
		var nombre = prompt('Teclee su nombre y apellidos en mayúsculas: ');
	 	var metodo = nombre.toLowerCase();
		window.alert('Se ha transformado su nombre a minúsculas ' + metodo);	
	}
// prueba toLowerCase
 function pruebatoLowerCase() {
		var nombre = prompt('Teclee su nombre y apellidos en mayúsculas: ');
	 	var metodo = nombre.toLowerCase();
		window.alert('Se ha transformado su nombre a minúsculas ' + metodo);	
	}
// prueba concat
 function pruebaconcat() {
		var nombre = prompt('Teclee su nombre y apellidos: ');
	 	var metodo = "¿Es este realmente su nombre?: ";
	 	var concatenacion = metodo.concat(nombre);
		window.alert(concatenacion);	
	}

// prueba endsWith
 function pruebaendsWith() {
		var nombre = prompt('Teclee su nombre y apellidos: ');
	 	var metodo = nombre.endsWith("Salvador");
		window.alert('¿Es verdad que su segundo apellido es Salvador? ' + metodo);	
	}
// prueba includes
 function pruebaincludes() {
		var nombre = prompt('Teclee su nombre y apellidos: ');
	 	var metodo = nombre.includes("Salvador");
		window.alert('¿Es verdad que Salvador está incluido en su nombre? ' + metodo);	
	}
// prueba indexOf No me sale
 function pruebaindexOf() {
		var nombre = prompt('Teclee su nombre');
	 	var longitud = nombre.length;
	 	var numero = prompt('Teclee un número entre 1 y ' + longitud);
	 	var numeroPosicion = nombre.indexOf(nombre); //porque la máquina cuenta desde cero
		window.alert('La posición de la palabra ' + nombre + ' es: ' + numeroPosicion);	
	 }
// prueba localeCompare
 function pruebalocaleCompare() {
		var palabra1 = prompt('Teclee una primera palabra: ');
	 	var palabra2 = prompt('Teclee una segunda palabra: ');
	 	var metodo = palabra1.localeCompare(palabra2);
	 	var metodo2;
	 	if (metodo == 0) {
			metodo2 = "Son iguales";
		}  else {
			metodo2 = "Son diferentes";
		}  
	 	window.alert('¿Son iguales las dos cadenas tecleadas? ' + metodo2);
	 	
	}
// prueba match
 function pruebamatch() {
		var palabra1 = prompt('Teclee una frase: ');
	 	var palabra2 = prompt('Teclee una pequeña cadena de caracteres: ');
	 	var metodo = palabra1.match(palabra2);
	 	window.alert('Existe la palabra ' + metodo); 	
	}
// prueba repeat
 function pruebarepeat() {
		var palabra1 = prompt('Teclee una palabra: ');
	 	var numero = prompt('Teclee el número de veces que quiero repetir la palabra: ');
	 	var entero = parseInt(numero);
	 	var metodo = palabra1.repeat(entero);
	 	window.alert('He repetido la palabra ' + entero + ' veces ' + metodo); 
	 }
// prueba replace
 function pruebareplace() {
		var palabra1 = prompt('Teclee una frase: ');	
	 	var palabra2 = prompt('Voy a sustituir el texto anterior por este de ahora: ');
	 	var metodo = palabra1.replace(palabra1, palabra2);
	 	window.alert('He reemplazado la primera frase ' + palabra1 + ' por ' + metodo); 
	 }
// prueba search
 function pruebasearch() {
		var palabra1 = prompt('Teclee una frase: ');	
	 	var palabra2 = prompt('Voy a sustituir el texto anterior por este de ahora: ');
	 	var metodo = palabra1.replace(palabra1, palabra2);
	 	window.alert('He reemplazado la primera frase ' + palabra1 + ' por ' + metodo); 
	 }
// prueba slice
 function pruebaslice() {
		var frase = prompt('Introduce correo electrónico: ');	
	 	var busqueda = frase.search(/@/);
	 	var punto = frase.search(/\./);
	 	var metodo = palabra1.replace(palabra1, palabra2);
	 	window.alert('He reemplazado la primera frase ' + palabra1 + ' por ' + metodo); 
	 }
