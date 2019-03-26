// JavaScript Document
//Función cerrar
/*function cerrar(){
  var dots = document.getElementById("contenedor");
  
  if (dots.style.display === "none") {
    dots.style.display = "block";

  } else {
    dots.style.display = "none";
  }
}*/
	
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
// Método new Date()
function nuevaFecha(){
	var fecha = new Date();
	alert("la fecha es :" + "\n" + fecha);
}
// Método getFullYear()
function ejemplogetFullYear() {
	var d = new Date();
	var anio = d.getFullYear();
	alert("El año actual es : " + anio);
}
// Método getMonth()
function ejemplogetMonth() {
	var d = new Date();
	var mes = d.getMonth();
	var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
	var numeroMes = mes + 1;
	alert("El mes actual es : " + numeroMes + "\n" + "Su nombre es " + meses[d.getMonth()]);
}
// Método getDate()
function ejemplogetDate() {
	var d = new Date();
	var dia = d.getDate();
	alert("El día del mes actual es : " + dia);
}
// Método getHours()
function ejemplogetHours() {
	var d = new Date();
	var hora = d.getHours();
	alert("La hora actual es : " + hora);
}
// Método getMinutes()
function ejemplogetMinutes() {
	var d = new Date();
	var hora = d.getHours();
	var minutos = d.getMinutes();
	alert("La hora y minutos actual es : " + hora + ":" + minutos);
}
// Método getSeconds()
function ejemplogetSeconds() {
	var d = new Date();
	var hora = d.getHours();
	var minutos = d.getMinutes();
	var segundos = d.getSeconds(); 
	alert("La hora, minutos y segundos actuales es : " + hora + ":" + minutos + ":" + segundos);
}
// Método getMilliseconds()
function ejemplogetMilliseconds() {
	var d = new Date();
	var hora = d.getHours();
	var minutos = d.getMinutes();
	var segundos = d.getSeconds();
	var milisegundos = d.getMilliseconds(); 
	alert("La hora, minutos, segundos y milisegundos : " + hora + ":" + minutos + ":" + segundos + ":" + milisegundos);
}
// Método getTime()
function ejemplogetTime() {
	var d = new Date();
	var milisegundos = d.getTime(); 
	alert("Los milisegundos transcurridos dese 01-01-1970 son : " + milisegundos);
}
// Método getDay()
function ejemplogetDay() {
	var d = new Date();
	var dias = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"]
	alert("Hoy es : " + dias[d.getDay()]);
}
//calcular la edad de una persona 
//recibe la fecha como un string en formato español 
//devuelve un entero con la edad. Devuelve false en caso de que la fecha sea incorrecta o mayor que el dia actual 
function calcularEdad(){ 
    var fecha = prompt("Escribe la fecha de su nacimiento en formato dd/mm/aaaa: ");
	calcular_edad(fecha);
	alert("Tengo " + edad + " años")
}
function calcular_edad(fecha) {                                            
//calcular la edad de una persona 
//recibe la fecha como un string en formato español 
//devuelve un entero con la edad. Devuelve false en caso de que la fecha sea incorrecta o mayor que el dia actual 
   	//calculo la fecha de hoy 
   	hoy=new Date(); 
   	//alert(hoy) 

   	//calculo la fecha que recibo 
   	//La descompongo en un array 
   	var array_fecha = fecha.split("/"); 
	//si el array no tiene tres partes, la fecha es incorrecta 
   	if (array_fecha.length!=3) 
      	return false 

   	//compruebo que los ano, mes, dia son correctos 
   	var ano; 
   	ano = parseInt(array_fecha[2]); 
	if (isNaN(ano)) 
      	return false 

   	var mes; 
   	mes = parseInt(array_fecha[1]); 
	if (isNaN(mes)) 
      	return false 

   	var dia; 
   	dia = parseInt(array_fecha[0]);
	if (isNaN(dia)) 
      	return false 


   	//si el año de la fecha que recibo solo tiene 2 cifras hay que cambiarlo a 4 
   	if (ano<=99) 
      	ano +=1900 

   	//resto los años de las dos fechas 
   	edad=hoy.getFullYear()- ano - 1; //-1 porque no se si ha cumplido años ya este año 
	
   	//si resto los meses y me da menor que 0 entonces no ha cumplido años. Si da mayor si ha cumplido 
   	if (hoy.getMonth() + 1 - mes < 0) //+ 1 porque los meses empiezan en 0 
      	return edad 
   	if (hoy.getMonth() + 1 - mes > 0) 
      	return edad+1 

   	//entonces es que eran iguales. miro los dias 
   	//si resto los dias y me da menor que 0 entonces no ha cumplido años. Si da mayor o igual si ha cumplido 
	alert("hoy.getUTCDate()" + hoy.getUTCDate());
	alert("Día de hoy " + dia);
   	if (hoy.getUTCDate() - dia >= 0) 
      	return edad + 1 

   	return edad 
}