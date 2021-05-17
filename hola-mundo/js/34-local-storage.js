"use strict";

window.addEventListener("load", () => {
	// Localstorage

	//Comprobar disponibilidad del localstorage en el navegador
	if (typeof Storage !== undefined) {
		console.log("localstorage disponible");
	} else {
		console.log("localstorage no disponible");
	}

	// Guardar datos en localstorage
	localStorage.setItem("titulo", "Curso de JS");

	// Recuperar elemento
	var caja = document.querySelector(".local");
	caja.append(localStorage.getItem("titulo"));

	// Guardar objetos
	var usuario = {
		nombre: "Cristian",
		edad: 28,
		email: "cristianuhrig@gmail.com",
	};
	/* El localstorage solo admite strings y enteros, entonces para guardar un objeto JSON, debemos convertir dicho objeto a un string, eso lo podemos lograr con la función stringify */
	localStorage.setItem("usuario", JSON.stringify(usuario));

	// Recuperar objeto
	/*Con JSON.parse convertimos un string a un objecto nuevamente */
	var userJS = JSON.parse(localStorage.getItem("usuario"));
	document.querySelector("ul").innerHTML = "<li>" + userJS.email + "</li>";

	// Borrar elementos del Localstorage
	localStorage.removeItem("usuario");

	// Vaciar el Localstorage
	localStorage.clear();
});
