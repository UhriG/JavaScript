"use_strict";

// Arrays multidimensionales

var categorias = ["Accion", "Terror", "Comedia"];
var peliculas = ["Zimbawe", "Die Hard", "La vida es bella", "Terminator"];
var cine = [categorias, peliculas];

console.log(cine[0][2]);

// Agrega un elemento al array
peliculas.push("Batman");
console.log(peliculas);

var elemento;

/* do {
	elemento = prompt("Ingrese una pelicula");
	peliculas.push(elemento);
} while (elemento != "finalizado"); */

var eliminar = peliculas.indexOf("finalizado");

if (eliminar > -1) {
	peliculas.splice(eliminar, 1);
}

console.log(peliculas);

// Elimina el último elemento del array
peliculas.pop();

// Join convierte todo el array a un string con los elementos separados por coma
var textoPelicula = peliculas.join();

console.log(textoPelicula);

var cadena = "texto1 - texto2 - texto3";

//Convertir string a array con el separador que le indique
var cadena_array = cadena.split(" - ");

console.log(cadena_array);

// Ordenar array
console.log(peliculas.sort());
console.log(peliculas.reverse());
