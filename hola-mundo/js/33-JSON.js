"use strict";

// JSON: Javascript object notation

window.addEventListener("load", () => {
	var pelicula = {
		titulo: "Batman",
		year: 1992,
		pais: "USA",
	};

	var peliculas = [
		{
			titulo: "Matrix",
			year: 2006,
			pais: "USA",
		},
		{
			titulo: "Spiderman",
			year: 2002,
			pais: "USA",
		},
	];

	var ul = document.querySelector("ul");

	for (const key in peliculas) {
		var li = document.createElement("li");
		li.append(peliculas[key].titulo + " - " + peliculas[key].year);
		ul.append(li);
	}
});
