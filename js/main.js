function agregaPosteo() {
//escribe aca el codigo
	var containerPosteos = document.getElementById("contenedor-posteos");
	var nombreFF = document.getElementById("nombre").value;
	var contenidoFF = document.getElementById("cajaposteos").value;

	//* Creacion de elementos en HTML
	var nuevoPost = document.createElement("div"); //* Creando elementos en html

	var contenedorNombre = document.createElement("strong"); //* creando los elementos que guardaremos en el div creado
	var contenedorPost = document.createElement("p");
	var separacion = document.createElement("hr");

	//* Creando boton de like
	var parrafCorazon = document.createElement("p"); //* creando elemento para el corazon
	var i = document.createElement("i");

	parrafCorazon.appendChild(i) //* asignandole i a parrafCorazon

	//* Dandole Atributos al like
	parrafCorazon.setAttribute("class", "corazon"); //* Dandole clase corazon al parrafo
		i.setAttribute("class", "fa fa-heart");	//* Asignandole el icono
		i.setAttribute("arial-hidden", "true");

	//* Transformando el nombre a nodo texto
	var nodoNombre = document.createTextNode(nombreFF + " escribió:");
	var nodoPosteo = document.createTextNode(contenidoFF);

	//* Asignandole padres a los nodos creados
	contenedorNombre.appendChild(nodoNombre);
	contenedorPost.appendChild(nodoPosteo);

	//* Asignando padres a nombre y contenido
	nuevoPost.appendChild(contenedorNombre);
	nuevoPost.appendChild(contenedorPost);
	nuevoPost.appendChild(parrafCorazon);
	nuevoPost.appendChild(separacion);

	//*Creando la funcion click al boton
	i.addEventListener("click", function(){
		i.classList.toggle("rojo");
	});

	//*Dandole atributos al contenedor-posteos
	nuevoPost.setAttribute("class", "posteo");
	containerPosteos.appendChild(nuevoPost);

	//*Para resetear los campos y dejarlos en blanco
	documentElementById("nombre").value = "";
	documentElementById("cajaposteos").value = "";
}