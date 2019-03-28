// JavaScript Document
//EJERCICIO 3
/*Crea una función que, introduciendo 3 valores separados por comas o por espacios en blanco en un campo de formulario, cree una matriz que almacene estos valores "Seat", "Audi", "Skoda" sin espacios en blanco. Mostrar la matriz como se muestra a continuación. Representación de la matríz: Grupo Volkswagen: Seat, Audi, Skoda.
*/
function crearGrupoCoches() {
	var coches= document.getElementById("text1").value;
	
	if (coches == "") {
		alert("teclee tres coches separados por comas");
		return false;
		}
	
	var arrayCoches = coches.split(",");
	
	var text;
	for (i in arrayCoches) {
		text += " " + arrayCoches[i] + ",";
	     }
	
	//Tengo que tratar la variable text para cambiar la última coma por un punto y quitarle un undefined, que no sé por qué sale
	document.getElementById("etiqueta1").innerHTML = "<i><u>" + "Representación de la matriz: " + "</u>" + "Grupo Volkswagen " + text + "</i>"; 
}
//EJERCICIO ÚLTIMO
/*Crea una función que, introduciendo los valores numéricos 8,7,2,5,4,3,6,1,0,9, construya un array y muestre la matriz con los valores ordenados ascendentes, descendentes, aleatorios y la longitud total del array. Mostar la matriz debajo del campo del formulario según se muestra a continuación. */
function ejemploComparativa() {
	var numero= document.getElementById("number5").value;
	
	if (numero == "") {
		alert("teclee tres números separados por coma");
		return false;
			}
	
	var arrayNumero = numero.split(",");
	var numeroMayor = 0;
	var numeroMenor = 0;
	var suma = 0;
	
		
	numeroMayor = parseInt(arrayNumero[0]);
	numeroMenor = parseInt(arrayNumero[0]);
	
	for (i in arrayNumero) {
		suma += parseInt(arrayNumero[i]);
		if (parseInt(arrayNumero[i]) > numeroMayor) {
			numeroMayor = parseInt(arrayNumero[i]);
		} 
		
		if (numeroMenor > parseInt(arrayNumero[i])) {
			numeroMenor = parseInt(arrayNumero[i]);
		}  
	}
			
	document.getElementById("etiqueta5").innerHTML = "<ul>" + 
		"<li>" + "El número mayor es: " + numeroMayor + "</li>" +
		"<li>" + "El número menor es: " + numeroMenor + "</li>" +
		"<li>" + "La suma de los tres números es: " + suma + "</li>" +
		"</ul>";
	
	}