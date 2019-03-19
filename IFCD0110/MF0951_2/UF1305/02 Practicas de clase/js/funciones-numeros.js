//Función cerrar
function cerrar(){
  //cerrar el primer contenedor	
  var dots = document.getElementById("contenedor");
  
  if (dots.style.display === "none") {
    dots.style.display = "block";

  } else {
    dots.style.display = "none";

  }
  //cerrar el segundo contenedor	
  var dots2 = document.getElementById("contenedor2");
  
  if (dots2.style.display === "none") {
    dots2.style.display = "block";
  } else {
    dots2.style.display = "none";
  }
}


//Método isFinite()
function esFinito() {
    var res = "";
    res = res + "¿El número 123 es finito? " + "<strong>" + Number.isFinite(123) + "</strong><br>";
    res = res + "¿El número  -1.23 es finito? " + "<strong>" + Number.isFinite(-1.23) + "</strong><br>";
    res = res + "¿El número  5-2 es finito? " + "<strong>" + Number.isFinite(5-2) + "</strong><br>";
    res = res + "¿El número  0 es finito? " + "<strong>" + Number.isFinite(0)+ "</strong><br>";
	res = res + "¿El número  1.23 es finito? " + "<strong>" + Number.isFinite(1.23)  + "</strong><br>";
    res = res + "¿El número  \"123\" es finito? " + "<strong>" + Number.isFinite('123') + "</strong><br>";
    res = res + "¿El número  \"Hello\" es finito? " + "<strong>" + Number.isFinite('Hello') + "</strong><br>";
    res = res + "¿El número  \"2005/12/12\" es finito? " + "<strong>" + Number.isFinite('2005/12/12')  + "</strong><br>";
    res = res + "¿El número \"0 / 0\" es finito? " + "<strong>" + Number.isFinite(0/0) + "</strong><br>";
	res = res + "¿El número \"100\" - 10 es finito? " + "<strong>" + Number.isFinite("100"-10) + "</strong><br>";
   
document.getElementById("demo2").innerHTML = res;
  
document.getElementById("demo1").innerHTML = 
"<p>El método Number.isFinite() determina si un valor es un número finito. Este método devuelve verdadero si el valor del número es equivale a un número finito, de lo contrario, devuelve falso.</p>" +
"<p>El método Number.isFinite() es diferente a la función global isFinite(). La función global isFinite() convierte el valor probado en un número, y a continuación, lo pone a prueba. El método Number.isFinite() no convierte los valores a un número, y no devolverá verdadero si el valor no es de tipo Number. Ambas funciones al ejecutarse devuelven un valor booleano, true (verdadero) o false (falso).</p>";
	
document.getElementById("contenedor").style.display = "block"; //para mostrar el texto, que estaba originariamente en modo display: "none";
}

//Método isInteger()
function esEntero() {
    var res = "";
    res = res +  "Es entero 123: " + "<strong>" + Number.isInteger(123) + "</strong><br>";
    res = res + "Es entero -1.23: " + "<strong>" + Number.isInteger(-1.23) + "</strong><br>";
    res = res + "Es entero 5-2: " + "<strong>" + Number.isInteger(5-2) + "</strong><br>";
    res = res + "Es entero 0: " + "<strong>" + Number.isInteger(0)+ "</strong><br>";
	res = res + "Es entero 1.23: " + "<strong>" + Number.isInteger(1.23)  + "</strong><br>";
    res = res + "Es entero \"123\": " + "<strong>" + Number.isInteger('123') + "</strong><br>";
    res = res + "Es entero \"Hello\": " + "<strong>" + Number.isInteger('Hello') + "</strong><br>";
    res = res + "Es entero \"2005/12/12\": " + "<strong>" + Number.isInteger('2005/12/12')  + "</strong><br>";
    res = res + "Es entero \"0 / 0\": " + "<strong>" + Number.isInteger(0/0) + "</strong><br>";
	res = res + "Es entero \"10\" + 20: " + "<strong>" + Number.isInteger("10"*20) + "</strong><br>";
	
	document.getElementById("demo2").innerHTML = res;
	document.getElementById("demo1").innerHTML = 	
"<p>El método Number.isInteger() determina si un valor es un número entero. Este método devuelve verdadero si el valor del número es equivale a un número entero, de lo contrario, devuelve falso.</p>" +
"<p>El método Number.isInteger() es diferente a la función global Number(). La función global Number() convierte el argumento objeto a un número que representa el valor del objeto. El método Number.isInteger() no convierte los valores a un número, y no devolverá verdadero si el valor no es de tipo Number. El método Number.isInteger() devuelve un valor booleano, true o false. Si el valor es NaN o infinito, devuelve false.</p>";
	
document.getElementById("contenedor").style.display = "block"; //para mostrar el texto, que estaba originariamente en modo display: "none";
}

//Método isNaN()
function noEsNumero() {
	 var res = "";
    res = res + "¿No es un número 123? " + "<strong>" +isNaN(123) + "</strong><br>";
    res = res + "¿No es un número -1.23? " + "<strong>" + isNaN(-1.23) + "</strong><br>";
    res = res + "¿No es un número 5-2? " + "<strong>" + isNaN(5-2) + "</strong><br>";
    res = res + "¿No es un número 0? " + "<strong>" + isNaN(0)+ "</strong><br>";
	res = res + "¿No es un número 1.23?: " + "<strong>" + isNaN(1.23)  + "</strong><br>";
    res = res + "¿No es un número \"123+5\"? " + "<strong>" +isNaN("123+5") + "</strong><br>";
    res = res + "¿No es un número \"Hello\"? " + "<strong>" + isNaN('Hello') + "</strong><br>";
    res = res + "¿No es un número \"2005/12/12\"? " + "<strong>" + isNaN('2005/12/12')  + "</strong><br>";
    res = res + "¿No es un número \"10\" * 20? " + "<strong>" + isNaN("10"*20) + "</strong><br>";
	
	document.getElementById("demo2").innerHTML = res;
	document.getElementById("demo1").innerHTML = 

"<p>El método Number.isNaN() determina si un valor es NaN (No-A-Number). Este método devuelve verdadero si el valor no es equivale a un número, de lo contrario, devuelve falso.</p>" +
"<p>El método Number.isNaN() es diferente a la función global isNaN(). La función global isNaN() convierte el valor probado en un número, y a continuación, lo pone a prueba. El método Number.isNaN() no convierte los valores a un número, y no devolverá verdadero si el valor no es de tipo Number. El valor NaN es considerado como un tipo de número.</p>";
	
document.getElementById("contenedor").style.display = "block"; //para mostrar el texto, que estaba originariamente en modo display: "none";
}

//Método toExponential(x)
function aExponencial() {
	var res = "";
	var num= 1234567890;

	res = res +  "El número " + num +  " en exponencial con 1 dígito es : " + "<strong>" + num.toExponential(1) + "</strong><br>";
	res = res +  "El número " + num +  " en exponencial con 2 dígitos es : " + "<strong>" + num.toExponential(2) + "</strong><br>";
	res = res +  "El número " + num +  " en exponencial con 3 dígitos es : " + "<strong>" + num.toExponential(3) + "</strong><br>";
	res = res +  "El número " + num +  " en exponencial con 4 dígitos es : " + "<strong>" + num.toExponential(4) + "</strong><br>";
	res = res +  "El número " + num +  " en exponencial con 5 dígitos es : " + "<strong>" + num.toExponential(5) + "</strong><br>";
	res = res +  "El número " + num +  " en exponencial con 6 dígitos es : " + "<strong>" + num.toExponential(6) + "</strong><br>";
	res = res +  "El número " + num +  " en exponencial con 7 dígitos es : " + "<strong>" + num.toExponential(7) + "</strong><br>";
	res = res +  "El número " + num +  " en exponencial con 8 dígitos es : " + "<strong>" + num.toExponential(8) + "</strong><br>";
	res = res +  "El número " + num +  " en exponencial con 9 dígitos es : " + "<strong>" + num.toExponential(9) + "</strong><br>";
	
    
	
	document.getElementById("demo2").innerHTML = res;
	document.getElementById("demo1").innerHTML = 
	"<p>El método number.toExponential(x) convierte un número en exponencial. Este método devuelve una cadena (string) que representa el objeto de tipo Number en notación exponencial.</p>" +
	"<p>Como opcional, se puede indicar dentro del paréntesis de la función toExponential() el número de dígitos que se utilizarán para representar el número en exponencial, los número van del 0 al 20." +
	"Si no se especifica nungún valor dentro del paréntesis se utilizaran por defecto tantos dígitos decimales como hagan falta para acomodar el número.</p>";
	
document.getElementById("contenedor").style.display = "block"; //para mostrar el texto, que estaba originariamente en modo display: "none";
}

//Método toFixed(x)
function aFijar() {
	 var res = "";
	 var num= 5.1234567890; 
	res = res +  "El número " + num +  " con 0 decimales es : " + "<strong>" + num.toFixed(0) + "</strong><br>";
    res = res +  "El número " + num +  " con 1 decimales es : " + "<strong>" + num.toFixed(1) + "</strong><br>";
	res = res +  "El número " + num +  " con 2 decimales es : " + "<strong>" + num.toFixed(2) + "</strong><br>";
	res = res +  "El número " + num +  " con 3 decimales es : " + "<strong>" + num.toFixed(3) + "</strong><br>";
	res = res +  "El número " + num +  " con 4 decimales es : " + "<strong>" + num.toFixed(4) + "</strong><br>";
	res = res +  "El número " + num +  " con 5 decimales es : " + "<strong>" + num.toFixed(5) + "</strong><br>";
	res = res +  "El número " + num +  " con 6 decimales es : " + "<strong>" + num.toFixed(6) + "</strong><br>";
	res = res +  "El número " + num +  " con 7 decimales es : " + "<strong>" + num.toFixed(7) + "</strong><br>";
	res = res +  "El número " + num +  " con 8 decimales es : " + "<strong>" + num.toFixed(8) + "</strong><br>";
	res = res +  "El número " + num +  " con 9 decimales es : " + "<strong>" + num.toFixed(9) + "</strong><br>";
	
	document.getElementById("demo2").innerHTML = res;
	document.getElementById("demo1").innerHTML = 	
	"<p>El método number.toFixed () devuelve una cadena, que representa un número, con el número exacto de decimales. Dentro del paréntesis se indica el número de dígitos que se utilizarán para representar los decimales.</p>" +
	"Si el número deseado de decimales es más alto que el número real, la función toFixed(), añadirá ceros para crear la longitud deseada decimal. Si el valor de los decimales es 0 o se deja en blanco, se mostrará sólo la parte entera del número. Si el número de decimales es mayor que 1e+21, este método, simplemente, llama a la función Number.prototype.toString() y devuelve una cadena en notación exponencial.</p>";

	document.getElementById("contenedor").style.display = "block"; //para mostrar el texto, que estaba originariamente en modo display: "none";
}

//Método .toPrecision(x)
function aPrecision() {
	var res = "";
	var num = 3.1234567890;   
	
    res = res + "El número " + num + " formateado con 1 es : " + "<strong>" + num.toPrecision(1) + "</strong><br>";
	res = res + "El número " + num + " formateado con 2 es : " + "<strong>" + num.toPrecision(2) + "</strong><br>";
	res = res + "El número " + num + " formateado con 3 es : " + "<strong>" + num.toPrecision(3) + "</strong><br>";
	res = res + "El número " + num + " formateado con 4 es : " + "<strong>" + num.toPrecision(4) + "</strong><br>";
	res = res + "El número " + num + " formateado con 5 es : " + "<strong>" + num.toPrecision(5) + "</strong><br>";
	res = res + "El número " + num + " formateado con 6 es : " + "<strong>" + num.toPrecision(6) + "</strong><br>";
	res = res + "El número " + num + " formateado con 7 es : " + "<strong>" + num.toPrecision(7) + "</strong><br>";
	res = res + "El número " + num + " formateado con 8 es : " + "<strong>" + num.toPrecision(8) + "</strong><br>";
	res = res + "El número " + num + " formateado con 9 es : " + "<strong>" + num.toPrecision(9) + "</strong><br>";
	
	document.getElementById("demo2").innerHTML = res;
	document.getElementById("demo1").innerHTML = 	
	"<p>El método number.toPrecision(precision) devuelve una cadena que representa un objeto Number según la precisión especificada. Dentro del paréntesis se indica el parámetro precisión, que es el número de dígitos que se utilizarán para representar el número.</p>" +
	"<p>Si el número de la precisión, es más alto que el número real, la función toPrecision(), añadirá ceros para crear la longitud deseada. Si el parámetro precision es omitido se mostrará el número tal cual. Si el parámetro precision es un valor no entero, el valor es redondeado al entero más cercano.</p>";

	document.getElementById("contenedor").style.display = "block"; //para mostrar el texto, que estaba originariamente en modo display: "none";
}
	

//Método .toString(x)
function aCadena() {
	var res = "";
	var num = 1234;
	
	res = res + "El número " + num + " convertido a cadena sin base " + "<strong>" + 
	num.toString() + "</strong>" + " de tipo " + typeof(num.toString()) + "<br>";
	res = res + "El número " + num + " convertido a cadena en base 2 es " + "<strong>" +
	num.toString(2) + "</strong> (binario) <br>";
	res = res + "El número " + num + " convertido a cadena en base 3 es " + "<strong>" + 
	num.toString(3) + "</strong> (ternario) <br>";
	res = res + "El número " + num + " convertido a cadena en base 5 es " + "<strong>" + 
	num.toString(5) + "</strong> (quinario) <br>";
	res = res + "El número " + num + " convertido a cadena en base 8 es " + "<strong>" + 
	num.toString(8) + "</strong> (octal) <br>";
	res = res + "El número " + num + " convertido a cadena en base 10 es " + "<strong>" + 
	num.toString(10) + "</strong> (decimal) <br>";
	res = res + "El número " + num + " convertido a cadena en base 12 es " + "<strong>" + 
	num.toString(12) + "</strong> (duodecimal) <br>";
	res = res + "El número " + num + " convertido a cadena en base 16 es " + "<strong>" + 
	num.toString(16) + "</strong> (hexadecimal) <br>";
	res = res + "El número " + num + " convertido a cadena en base 32 es " + "<strong>" + 
	num.toString(32) + "</strong> (base32) <br>";
	res = res + "El número " + num + " convertido a cadena en base 36 es " + "<strong>" + 
	num.toString(36) + "</strong> (base32) <br>";

	document.getElementById("demo2").innerHTML = res; 
	document.getElementById("demo1").innerHTML = 	
	"<p>El método number.toString(base) convierte un número en una cadena, usando diferentes bases. Dentro del paréntesis se indica el parámetro base, que es la base de representación numérica de dígitos que se utilizará para representar el número.</p>" +
	"<p>Como opcional, se puede indicar qué base utilizar para representar un valor numérico. Debe ser un número entero entre 2 y 36. Si no se especifica la base, JavaScript asume la base predefinida, que es 10, formato decimal. </p>" +
	"<p>Por ejemplo, el método number.toString() representa un número en base 2 como binario, en base 8 como Octal y en base 16 como hexadecimal.</p>";

	document.getElementById("contenedor").style.display = "block"; //para mostrar el texto, que estaba originariamente en modo display: "none";
}

//Método valueOf()
function valorDe() {
    var res = "";
	var num = 15;
	var num1 = "15";
	var num2 = (15 === 15);
    var num3 = [15];
	var num4 = {edad: 15};
	var num5 = num.toString(16) ;
	var num6 = new Date("2018-11-15").getDate();
	
	res = res + "El número " + num + " su valor primitivo es " + "<strong>" + 
	num.valueOf() + "</strong>" + " y es de tipo " + typeof(num) + ".<br>";
	res = res + "El número " + "\"" + 15 + "\"" + " su valor primitivo es " + "<strong>" + 
	num1.valueOf() + "</strong>" + " y es de tipo " + typeof(num1) + ".<br>";
	res = res + "El número " + "(15 == 15)" + " su valor primitivo es " + "<strong>" + 
	num2.valueOf() + "</strong>" + " y es de tipo " + typeof(num2) + ".<br>";
	res = res + "El número " + "[15]" + " su valor primitivo es " + "<strong>" + 
	num3.valueOf() + "</strong>" + " y es de tipo " + typeof(num3) + ".<br>";
	res = res + "El número " + "{edad: 15}" + " su valor primitivo es " + "<strong>" + 
	num4.edad.valueOf() + "</strong>" + " y es de tipo " + typeof(num4) + ".<br>";
	res = res + "El número "  + "hexadecimal 15" +  " su valor primitivo es " + "<strong>" + 
	num5.valueOf() + "</strong>" + " y es de tipo " + typeof(num5) + ".<br>";
	res = res + "El número " + "2018-11-15" + " su valor primitivo es " + "<strong>" + 
	num6.valueOf() + "</strong>" + " y es de tipo " + typeof(num6) + ".<br>";
	
	document.getElementById("demo2").innerHTML = res; 
	document.getElementById("demo1").innerHTML = 	
	"<p>El método number.valueOf() devuelve el valor primitivo de una variable. Dentro del paréntesis no se indica parámetro alguno, Por delante del método se escribe el nombre del dato a evaluar. Puede ser, variable, objeto, array, string, number o función.</p>" +
	"<p>Este método no cambia el valor original, sólo devuelve el valor simple de un número. Si un objeto no tiene un valor, valueOf devuelve el objeto en sí.</p>";

	document.getElementById("contenedor").style.display = "block"; //para mostrar el texto, que estaba originariamente en modo display: "none";
}

//Método Number()
function convertirNumero() {
  var x1 = true;
  var x2 = false;
  var x3 = new Date();
  var x4 = "999";
  var x5 = "999,888";
  var x6 = "777 555";

  var n = 
  "¿True es un número? " + Number(x1) + "<br>" + 
  "¿False es un número? " + Number(x2) + "<br>" + 
  "¿La fecha en milisegundos es un número? " + Number(x3) + "<br>" + 
  "¿\"999\" es un número? " + Number(x4) + "<br>" + 
  "¿\"999,888\" es un número? " + Number(x5) + "<br>" + 
  "¿\"777 555\" es un número? " + Number(x6);
	
  document.getElementById("demo4").innerHTML = n;
  document.getElementById("demo3").innerHTML = 	
   "<p>La función de Número () convierte el argumento objeto a un número que representa el valor del objeto. Si el valor no se puede convertir en un número válido, se devuelve NaN.</p>" + 
   "<p> Nota: Si el parámetro es un objeto Date, la función Number () devuelve el número de milisegundos desde la medianoche del 1 de enero de, 1970 UTC.</p>";
	
	document.getElementById("contenedor2").style.display = "block"; //para mostrar el texto, que estaba originariamente en modo display: "none";
	
}
//Método parseFloat()
function ejemploparseFloat() {
  var a = parseFloat("10") + "<br>";
  var b = parseFloat("10.00") + "<br>";
  var c = parseFloat("10.33") + "<br>";
  var d = parseFloat("34.45,66") + "<br>";
  var e = parseFloat("   60 56  ") + "<br>";
  var f = parseFloat("40 years") + "<br>";
  var g = parseFloat("He was 40") + "<br>";

  var n =    a 
  			+ b 
  			+ c 
  			+ d 
  			+ e 
  			+ f 
  			+ g;
	
  document.getElementById("demo4").innerHTML = n;
  document.getElementById("demo3").innerHTML = 	
   "<p>La función parseFloat () analiza una cadena y devuelve un número de coma flotante. Esta función determina si el primer carácter de la cadena especificada es un número. Si lo es, se analiza la cadena hasta que llega al final de la serie, y devuelve el número como un número, no como una cadena.</p>" +

   "<p>Nota: Sólo se devuelve el primer número de la cadena.</p>" + 

   "<p>Nota: se permiten espacios iniciales y finales.</p>" + 

   "<p>Nota: Si el primer carácter no puede ser convertido a un número, parseFloat () devuelve NaN.</p>";
	
	document.getElementById("contenedor2").style.display = "block"; //para mostrar el texto, que estaba originariamente en modo display: "none";

}
//Método parseInt()
function ejemploparseInt() {
  var a = parseInt("10") + "<br>";
  var b = parseInt("10.00") + "<br>";
  var c = parseInt("10.33") + "<br>";
  var d = parseInt("34 45 66") + "<br>";
  var e = parseInt("   60   ") + "<br>";
  var f = parseInt("40 years") + "<br>";
  var g = parseInt("He was 40") + "<br>";

  var h = parseInt("10", 10)+ "<br>";
  var i = parseInt("010")+ "<br>";
  var j = parseInt("10", 8)+ "<br>";
  var k = parseInt("0x10")+ "<br>";
  var l = parseInt("10", 16)+ "<br>";

  var n = a + b + c + d + e + f + g + h + i + j + k +l;
  document.getElementById("demo4").innerHTML = n;
   document.getElementById("demo3").innerHTML = 	
   "<p>La función parseInt () analiza una cadena y devuelve un entero. El parámetro radix se utiliza para especificar qué sistema de numeración a ser utilizado, por ejemplo, un radix de 16 (hexadecimal) indica que el número en la cadena debe ser analizada de un número hexadecimal a un número decimal.</p>" +
	   
   "<p>Si se omite el parámetro radix, JavaScript supone lo siguiente:" + 
   "<ul><li> Si la cadena comienza con \"0x\", la raíz es 16 (hexadecimal)</li><li>Si la cadena comienza con \"0\", la raíz es 8 (octal). Esta característica está en desuso</li><li>Si la cadena comienza con cualquier otro valor, la raíz es 10 (decimal).</li> </ul>" +

   "<p>Nota: Sólo se devuelve el primer número de la cadena.</p>" + 

   "<p>Nota: se permiten espacios iniciales y finales.</p>" + 

   "<p>Nota: Si el primer carácter no puede ser convertido a un número, parseInt () devuelve NaN.</p>" + 

   "<p>Las nuevas versiones de los navegadores darán parseInt ('010') como 8, porque las versiones anteriores de ECMAScript, (mayores de ECMAScript 5, utiliza la base octal (8) por defecto cuando la cadena comienza con '0' A partir de ECMAScript 5, el valor predeterminado es el radix decimal (10).</p>";
	
	document.getElementById("contenedor2").style.display = "block"; //para mostrar el texto, que estaba originariamente en modo display: "none";
}