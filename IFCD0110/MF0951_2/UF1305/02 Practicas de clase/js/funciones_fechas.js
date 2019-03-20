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