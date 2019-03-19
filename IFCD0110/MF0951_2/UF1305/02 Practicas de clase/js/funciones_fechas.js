// JavaScript Document
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
