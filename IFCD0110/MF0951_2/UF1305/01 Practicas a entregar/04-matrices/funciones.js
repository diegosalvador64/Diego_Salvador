// JavaScript Document
//EJERCICIO 1
/*Crea una función que, introduciendo 3 valores separados por comas o por espacios en blanco en un campo de formulario, cree una matriz que almacene estos valores "Seat", "Audi", "Skoda" sin espacios en blanco. Mostrar la matriz como se muestra a continuación. Representación de la matríz: Grupo Volkswagen: Seat, Audi, Skoda.
*/
function crearGrupoCoches() {
	var coches= document.getElementById("text1").value;
	
	if (coches == "") {
		alert("teclee tres coches separados por comas");
		return false;
		}
	
	var cochesSin = coches.replace(/\"/gi, " ");
		
	var arrayCoches = cochesSin.split(",");
				
	//Tengo que tratar la variable text para cambiar la última coma por un punto y quitarle un undefined, que no sé por qué sale
	document.getElementById("etiqueta1").innerHTML = "<i><u>" + "Representación de la matriz " + "</u>" + ": Grupo Volkswagen: " + arrayCoches[0].trim() + ", " + arrayCoches[1].trim() + ", " + arrayCoches[2].trim() + "." + "</i>"; 
}
//EJERCICIO 2
/*A partir del array creado anteriormente, crear una función que permita introducir "Volkswagen", "Bentley", "Bugatti" al conjunto, y los sitúe detrás de los valores existentes sin espacios en blanco. Mostrar la matriz como se muestra a continuación. Representación de la matríz: Grupo Volkswagen: Seat, Audi, Skoda, Volkswagen, Bentley, Bugatti.*/
function incluirCoches() {
	var arrayCoches = ["Seat","Audi","Skoda"];
	
	var cochesEntrada= document.getElementById("text2").value;
	
	if (cochesEntrada == "") {
		alert("teclee tres coches separados por comas");
		return false;
		}
	
	var cochesSin = cochesEntrada.replace(/\"/gi, " ");
	
	var arrayCochesEntrada = cochesSin.split(",");
	
	var cochesTotal = arrayCoches.concat(arrayCochesEntrada); 
	
	document.getElementById("etiqueta2").innerHTML = "<i><u>" + "Representación de la matriz " + "</u>" + ": Grupo Volkswagen: " + cochesTotal[0].trim() + ", " + cochesTotal[1].trim() + ", " + cochesTotal[2].trim() + ", " + cochesTotal[3].trim() + ", " + cochesTotal[4].trim() + ", " + cochesTotal[5].trim() + "." + "</i>"; 
}
//EJERCICIO 3
/*A partir del array creado anteriormente, crear una función que permita introducir al comienzo de la matriz los valores "Ducati", "Lamborghini", "Porsche" sin espacios en blanco. Mostrar la matriz como se muestra a continuación.*/
function incluirCochesDelante() {
	var arrayCoches = ["Seat","Audi","Skoda","Volkswagen","Bentley","Bugatti"];
	
	var cochesEntrada= document.getElementById("text3").value;
	
	if (cochesEntrada == "") {
		alert("teclee tres coches separados por comas");
		return false;
		}
	
	var cochesSin = cochesEntrada.replace(/\"/gi, " ");
	
	var arrayCochesEntrada = cochesSin.split(",");
	
	var cochesTotal = arrayCochesEntrada.concat(arrayCoches); 
	
	var texto = " ";
	
	for (i in cochesTotal) {
		if (i < cochesTotal.length-1) {
			texto += cochesTotal[i].trim() + ", ";
		} else {
			texto += cochesTotal[i].trim() + ".";
		}	
	}
	
	document.getElementById("etiqueta3").innerHTML = "<i><u>" + "Representación de la matriz " + "</u>" + ": Grupo Volkswagen: " + texto + "</i>"; 
	
}
//EJERCICIO 4
/*A partir del array creado anteriormente, crear una función que introduzca entre los valores del conjunto "Seat" y "Audi" los valores "Scania" y "MAN" sin espacios en blanco. */
function incluirCochesenMedio() {
	var arrayCoches = ["Ducati", "Lamborghini", "Porsche" ,"Seat","Audi","Skoda","Volkswagen","Bentley","Bugatti"];
	
	var cochesEntrada= document.getElementById("text4").value;
	
	if (cochesEntrada == "") {
		alert("teclee dos coches separados por comas");
		return false;
		}
	
	var cochesSin = cochesEntrada.replace(/\"/gi, " ");
	
	var arrayCochesEntrada = cochesSin.split(",");
		
	arrayCoches.splice(4, 0, arrayCochesEntrada[0], arrayCochesEntrada[1]);
	
	var texto = " ";
	
	for (i in arrayCoches) {
		if (i < arrayCoches.length-1) {
			texto += arrayCoches[i].trim() + ", ";
		} else {
			texto += arrayCoches[i].trim() + ".";
		}	
	}
	
	document.getElementById("etiqueta4").innerHTML = "<i><u>" + "Representación de la matriz " + "</u>" + ": Grupo Volkswagen: " + texto + "</i>";  
}

//EJERCICIO 5
/*Crea una función que, introduciendo los valores numéricos 8,7,2,5,4,3,6,1,0,9, construya un array y muestre la matriz con los valores ordenados ascendentes, descendentes, aleatorios y la longitud total del array. Mostar la matriz debajo del campo del formulario según se muestra a continuación. Representación de la matríz: Matriz original: 8,7,2,5,4,3,6,1,0,9. Ascendente: 0,1,2,3,4,5,6,7,8,9. Descendente: 9,8,7,6,5,4,3,2,1,0. Aleatorio: 1,9,2,7,3,6,4,5,0,8. Longitud: 10  */
function construirMatrizNumeros() {
	
	var numero= document.getElementById("text5").value;
		
	if (numero == "") {
		alert("teclee números separados por coma");
		return false;
		}
	
	var arrayNumero = numero.split(",");
	
	var textOriginal = " ";
	
	for (i in arrayNumero) {
		textOriginal += arrayNumero[i];
		if (i < (arrayNumero.length-1)) {
			textOriginal += ",";
			} else {textOriginal += ".";}
		}
	
	arrayNumero.sort();
	
	var textSortAsc = " ";
	
	for (i in arrayNumero) {
		textSortAsc += arrayNumero[i];
		if (i < (arrayNumero.length-1)) {
			textSortAsc += ",";
			} else {textSortAsc += ".";}
		}
	
	arrayNumero.reverse();
	
	var textSortDesc = " ";
	
	for (i in arrayNumero) {
		textSortDesc += arrayNumero[i];
		if (i < (arrayNumero.length-1)) {
			textSortDesc += ",";
			} else {textSortDesc += ".";}
		}
	
	arrayNumero.sort(function() {return Math.random() - 0.5});
	
	var textSortRandom = " ";
	
	for (i in arrayNumero) {
		textSortRandom += arrayNumero[i];
		if (i < (arrayNumero.length-1)) {
			textSortRandom += ",";
			} else {textSortRandom += ".";}
		}
	
	document.getElementById("etiqueta5").innerHTML = "<i><u>" + "Representación de la matriz" + "</u>" +  ": " + "Matriz original: " + textOriginal + " Ascendente: " + textSortAsc + " Descendente: " + textSortDesc + 
	" Random: " + textSortRandom +" Longitud: " + arrayNumero.length + "</i>"; 
	
}