// JavaScript Document
// Obtener el modal
function tratarModal(a) { //ojo, que le he metido un parámetro "a" si utilizo los id
		var b = a-1;
		var modal = document.getElementById('miModal' + a);
		
		/*var imgSRC = document.getElementsByTagName("img")[a].src;*///para tratarla a partir de la etiqueta img. Así me evitaría tantos id, aunque es necesario identificar la imagen con su id
		/*var imgSRC = document.getElementsByTagName("img")[a].alt;*/
		//también se puede hacer con function nombre(this)
	
		// Obtener la imagen e insertarla en el modal - Usar el texto que aparece en "alt" como captura
		var img = document.getElementById('miImagen' + a);
		var modalImg = document.getElementById("img" + a); 
		var captionText = document.getElementById("captura" + a);
	    										
		img.onclick = function() {
			modal.style.display = "block";
			modalImg.src = this.src;
			captionText.innerHTML = this.alt;
						
			}

		// Guardar el elemento <span> que cierra el modal
			
			var span = document.getElementsByClassName("cerrar")[b];

		// Cuando el usuario clica en el aspa del <span>, se cierra el modal
			span.onclick = function() { 
			modal.style.display = "none";
					}
}