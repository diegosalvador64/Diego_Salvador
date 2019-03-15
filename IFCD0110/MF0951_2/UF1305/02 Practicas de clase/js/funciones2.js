

//Método isFinite()
function esFinito() {
   
	var res = "";
	res = res + "¿El número 123 es finito? " + "<strong>" + Number.isFinite(123) + "</strong><br>";	
	res = res + "¿El número -1.23 es finito? " + "<strong>" + Number.isFinite(-1.23) + "</strong><br>";
	res = res + "¿El número 5-2 es finito? " + "<strong>" + Number.isFinite(5-2) + "</strong><br>";
	res = res + "¿El número 0 es finito? " + "<strong>" + Number.isFinite(0) + "</strong><br>";
	res = res + "¿El número 1.23 es finito? " + "<strong>" + Number.isFinite(1.23) + "</strong><br>";
	res = res + "¿El número \"123\" es finito? " + "<strong>" + Number.isFinite('123') + "</strong><br>";
	res = res + "¿El número \"Hello\" es finito? " + "<strong>" + Number.isFinite('Hello') + "</strong><br>";
	res = res + "¿El número \"2005/12/12\" es finito? " + "<strong>" + Number.isFinite('2005/12/12') + "</strong><br>";
	res = res + "¿El número \"0 / 0\" es finito? " + "<strong>" + Number.isFinite(0/0) + "</strong><br>";
	res = res + "¿El número \"100\" - 10 es finito? " + "<strong>" + Number.isFinite("100"-10) + "</strong><br>";
	
	document.getElementById("demo2").innerHTML = res;

	document.getElementById("demo1").innerHTML = 
	"<p>El método Number.isFinite() determina si un valor es un número finito. Este método devuelve verdadero si el valor del número es equivale a un número finito, de lo contrario, devuelve falso.</p>" +
	"<p>El método Number.isFinite() es diferente a la función global isFinite(). La función global isFinite() convierte el valor probado en un número, y a continuación, lo pone a prueba. El método Number.isFinite() no convierte los valores a un número, y no devolverá verdadero si el valor no es de tipo Number. Ambas funciones al ejecutarse devuelven un valor booleano, true (verdadero) o false (falso).</p>";
}

//Método isInteger()
function esEntero() {
	var res = "";
	res = res + "¿El número 123 es entero? " + "<strong>" + Number.isInteger(123) + "</strong><br>";	
	res = res + "¿El número -1.23 es entero? " + "<strong>" + Number.isInteger(-1.23) + "</strong><br>";
	res = res + "¿El número 5-2 es entero? " + "<strong>" + Number.isInteger(5-2) + "</strong><br>";
	res = res + "¿El número 0 es entero? " + "<strong>" + Number.isInteger(0) + "</strong><br>";
	res = res + "¿El número 1.23 es entero? " + "<strong>" + Number.isInteger(1.23) + "</strong><br>";
	res = res + "¿El número \"123\" es entero? " + "<strong>" + Number.isInteger('123') + "</strong><br>";
	res = res + "¿El número \"Hello\" es entero? " + "<strong>" + Number.isInteger('Hello') + "</strong><br>";
	res = res + "¿El número \"2005/12/12\" es entero? " + "<strong>" + Number.isInteger('2005/12/12') + "</strong><br>";
	res = res + "¿El número \"0 / 0\" es entero? " + "<strong>" + Number.isInteger(0/0) + "</strong><br>";
	res = res + "¿El número \"100\"* 10 es entero? " + "<strong>" + Number.isInteger("100"*10) + "</strong><br>";
	
	document.getElementById("demo2").innerHTML = res;
	document.getElementById("demo1").innerHTML = 	
"<p>El método Number.isInteger() determina si un valor es un número entero. Este método devuelve verdadero si el valor del número es equivale a un número entero, de lo contrario, devuelve falso.</p>" +
"<p>El método Number.isInteger() es diferente a la función global Number(). La función global Number() convierte el argumento objeto a un número que representa el valor del objeto. El método Number.isInteger() no convierte los valores a un número, y no devolverá verdadero si el valor no es de tipo Number. El método Number.isInteger() devuelve un valor booleano, true o false. Si el valor es NaN o infinito, devuelve false.</p>";
}

//Método isNaN()
function noEsNumero() {

	var res = "";
	
	res = res + "¿123 es 'No número'? " + "<strong>" + isNaN(123) + "</strong><br>";	
	res = res + "¿-1.23 es 'No número'? " + "<strong>" + isNaN(-1.23) + "</strong><br>";
	res = res + "¿5-2 es 'No número'? " + "<strong>" + isNaN(5-2) + "</strong><br>";
	res = res + "¿0 es 'No número'? " + "<strong>" + isNaN(0) + "</strong><br>";
	res = res + "¿1.23 es 'No número'? " + "<strong>" + isNaN(1.23) + "</strong><br>";
	res = res + "¿\"123\" es 'No número'? " + "<strong>" + isNaN('123') + "</strong><br>";
	res = res + "¿\"Hello\" es 'No número'? " + "<strong>" + isNaN("Hello") + "</strong><br>";
	res = res + "¿\"2005/12/12\" es 'No número'? " + "<strong>" + isNaN('2005/12/12') + "</strong><br>";
	res = res + "¿\"0 / 0\" es 'No número'? " + "<strong>" + isNaN(0/0) + "</strong><br>";
	res = res + "¿\"100\" * 10 es 'No número'? " + "<strong>" + isNaN("100"*10) + "</strong><br>";
	res = res + "¿\"123+5\" es 'No número'? " + "<strong>" + isNaN("123+5") + "</strong><br>";
	
	document.getElementById("demo2").innerHTML = res;
	document.getElementById("demo1").innerHTML = 

"<p>El método Number.isNaN() determina si un valor es NaN (No-A-Number). Este método devuelve verdadero si el valor no es equivale a un número, de lo contrario, devuelve falso.</p>" +
"<p>El método Number.isNaN() es diferente a la función global isNaN(). La función global isNaN() convierte el valor probado en un número, y a continuación, lo pone a prueba. El método Number.isNaN() no convierte los valores a un número, y no devolverá verdadero si el valor no es de tipo Number. El valor NaN es considerado como un tipo de número.</p>";
}



//Método toExponential(x)
function aExponencial() {
	var res = "";
	
	document.getElementById("demo2").innerHTML = res;
	document.getElementById("demo1").innerHTML = 
	"<p>El método number.toExponential(x) convierte un número en exponencial. Este método devuelve una cadena (string) que representa el objeto de tipo Number en notación exponencial.</p>" +
	"<p>Como opcional, se puede indicar dentro del paréntesis de la función toExponential() el número de dígitos que se utilizarán para representar el número en exponencial, los número van del 0 al 20." +
	"Si no se especifica nungún valor dentro del paréntesis se utilizaran por defecto tantos dígitos decimales como hagan falta para acomodar el número.</p>";
}

//Método toFixed(x)
function aFijar() {
	 
	var res = "";
	
	document.getElementById("demo2").innerHTML = res;
	document.getElementById("demo1").innerHTML = 	
	"<p>El método number.toFixed () devuelve una cadena, que representa un número, con el número exacto de decimales. Dentro del paréntesis se indica el número de dígitos que se utilizarán para representar los decimales.</p>" +
	"Si el número deseado de decimales es más alto que el número real, la función toFixed(), añadirá ceros para crear la longitud deseada decimal. Si el valor de los decimales es 0 o se deja en blanco, se mostrará sólo la parte entera del número. Si el número de decimales es mayor que 1e+21, este método, simplemente, llama a la función Number.prototype.toString() y devuelve una cadena en notación exponencial.</p>";
}

//Método .toPrecision(x)
function aPrecision() {

	var res = "";
	document.getElementById("demo2").innerHTML = res;
	document.getElementById("demo1").innerHTML = 	
	"<p>El método number.toPrecision(precision) devuelve una cadena que representa un objeto Number según la precisión especificada. Dentro del paréntesis se indica el parámetro precisión, que es el número de dígitos que se utilizarán para representar el número.</p>" +
	"<p>Si el número de la precisión, es más alto que el número real, la función toPrecision(), añadirá ceros para crear la longitud deseada. Si el parámetro precision es omitido se mostrará el número tal cual. Si el parámetro precision es un valor no entero, el valor es redondeado al entero más cercano.</p>";
}
	

//Método .toString(x)
function aCadena() {

	var res = "";

	document.getElementById("demo2").innerHTML = res; 
	document.getElementById("demo1").innerHTML = 	
	"<p>El método number.toString(base) convierte un número en una cadena, usando diferentes bases. Dentro del paréntesis se indica el parámetro base, que es la base de representación numérica de dígitos que se utilizará para representar el número.</p>" +
	"<p>Como opcional, se puede indicar qué base utilizar para representar un valor numérico. Debe ser un número entero entre 2 y 36. Si no se especifica la base, JavaScript asume la base predefinida, que es 10, formato decimal. </p>" +
	"<p>Por ejemplo, el método number.toString() representa un número en base 2 como binario, en base 8 como Octal y en base 16 como hexadecimal.</p>";
}

//Método valueOf()
function valorDe() {

	var res = "";
	
	document.getElementById("demo2").innerHTML = res; 
	document.getElementById("demo1").innerHTML = 	
	"<p>El método number.valueOf() devuelve el valor primitivo de una variable. Dentro del paréntesis no se indica parámetro alguno, Por delante del método se escribe el nombre del dato a evaluar. Puede ser, variable, objeto, array, string, number o función.</p>" +
	"<p>Este método no cambia el valor original, sólo devuelve el valor simple de un número. Si un objeto no tiene un valor, valueOf devuelve el objeto en sí.</p>";
}

