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
// prueba indexOf: localiza la primera ocurrencia de una cadena de caracteres
 function pruebaindexOf() {
		var nombre = prompt('Teclee una frase');
	 	var caracter = prompt('Teclee un carácter o palabra para localizarla en la frase anterior');
	 	var numeroPosicion = nombre.indexOf(caracter); //porque la máquina cuenta desde cero
		window.alert('La primera posición de la palabra ' + caracter + ' en la frase ' + nombre + ' es:' + numeroPosicion);	
	 }
// prueba indexOf: localiza la primera ocurrencia de una cadena de caracteres
 function pruebalastIndexOf() {
		var nombre = prompt('Teclee una frase');
	 	var caracter = prompt('Teclee un carácter o palabra para localizarla en la frase anterior');
	 	var numeroPosicion = nombre.lastIndexOf(caracter); //porque la máquina cuenta desde cero
		window.alert('La última posición de la palabra ' + caracter + ' en la frase ' + nombre + ' es:' + numeroPosicion);	
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
	 	var exp = new RegExp(palabra2, 'gi');
	    var metodo = palabra1.match(exp);
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
		var frase = prompt('Introduce correo electrónico ');	
	 	var busqueda = frase.search(/@/);
	 	var punto = frase.search(/\./);
	 	if (busqueda === -1) {
			alert("No has escrito el caracter @");					 
			} else if (punto === -1) {
				alert("No has escrito el caracter .");
			} else {alert("El carácter \"@\" ha sido encontrado en la posicion: " + busqueda + " El carácter \".\" ha sido encontrado en la posicion " + punto);}
	 	 
	 }
// prueba slice:  extrae partes de una cadena y devuelve las partes extraídas en una nueva cadena. La diferencia con substring es que slice admite números negativos porque se puede empezar por la derecha y por la izquierda: 0123456789 y 9876543210
 function pruebaslice() {
		var frase = prompt('Introduce correo electrónico: ');	
	 	var busqueda = frase.search(/@/); //busca el caracter @ a través de las "/"
	 	var punto = frase.search(/\./); //busca el punto (representado por \.)
	 	var usuario = frase.slice(0, busqueda);
	 	var dominio = frase.slice(busqueda +1, punto);
	 	var extension = frase.slice(punto +1);
	 	window.alert('Tu correo es : ' + frase + '\n' + 
					 'Tu usuario es: ' + usuario + '\n' +
					 'El dominio es: ' + dominio + '\n' +
					 'La extensión es: ' + extension);
	 }
// prueba split
 function pruebasplit() {
		var palabra1 = prompt('Teclee una frase: ');	
	 	var palabra2 = prompt('Voy a crear un array con un caracter que delimite: ');
	 	var metodo = palabra1.split(palabra2);
	 	window.alert('He reemplazado la primera frase ' + palabra1 + ' por ' + metodo); 
	 }
// prueba substring:  extrae partes de una cadena y devuelve las partes extraídas en una nueva cadena.
 function pruebasubstring() {
		var frase = prompt('Introduce correo electrónico: ');	
	 	var busqueda = frase.search(/@/); //busca el caracter @ a través de las "/"
	 	var punto = frase.search(/\./); //busca el punto (representado por \.)
	 	var usuario = frase.substring(0, busqueda);
	 	var dominio = frase.substring(busqueda +1, punto);
	 	var extension = frase.substring(punto +1);
	 	window.alert('Tu correo es : ' + frase + '\n' + 
					 'Tu usuario es: ' + usuario + '\n' +
					 'El dominio es: ' + dominio + '\n' +
					 'La extensión es: ' + extension);
	 }
// prueba substr:  extrae partes de una cadena y devuelve las partes extraídas en una nueva cadena.
 function pruebasubstr() {
		var frase = prompt('Introduce una frase: ');	
	 	var busqueda = frase.length; 
	 	var numero = prompt('Introduce un número entre 0 y : ' + busqueda);	
	 	var resultado = frase.substr(0, numero);
	 	window.alert('Tu cadena recortada es: ' + resultado);
	 
	 }
// prueba startsWith:  método determina si una cadena comienza con los caracteres de una cadena especificada. Determina true o false
 function pruebastartsWith() {
		var palabra1 = prompt('Introduce una frase: ');	
	 	var palabra2 = prompt('Introduce un palabra ');	
	 	var resultado = palabra1.startsWith(palabra2);
	 	if (resultado == false) {
			window.alert('¡La frase NO comienza con la palabra ' + palabra2 + '!');
		} else {
			window.alert('¡La frase COMIENZA con la palabra ' + palabra2 + '!');
		}	 
	 }
// prueba trim:  elimina los espacios en blanco de ambos lados de una cadena.
 function + {
		var palabra1 = prompt('Introduce una frase con espacios por delante y por detrás:');	
	 	var resultado = palabra1.trim();
	 	window.alert('La frase sin espacios queda : ' + resultado);
	 }