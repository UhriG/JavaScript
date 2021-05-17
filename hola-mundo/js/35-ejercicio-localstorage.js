"use strict";
window.addEventListener("load", () => {
	//Agregar pelicula al local storage
	var formulario = document.querySelector("#formulario");

	formulario.addEventListener("submit", () => {
		var tituloPelicula = document.querySelector("#titulo").value;
		if (tituloPelicula != "") {
			localStorage.setItem(tituloPelicula, tituloPelicula);
		}
	});

	// Mostrar peliculas en un listado
	var cajaPeliculas = document.querySelector("ul");

	for (const key in localStorage) {
		var li = document.createElement("li");
		if (typeof localStorage[key] == "string") {
			li.append(localStorage[key]);
			cajaPeliculas.append(li);
		}
	}

	// Borrar peliculas
	var formBorrar = document.querySelector("#formBorrar");
	formBorrar.addEventListener("submit", () => {
		var tituloBorrar = document.querySelector("#tituloBorrar").value;
		localStorage.removeItem(tituloBorrar);
	});
});
