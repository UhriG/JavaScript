"use_strict";

// Arrays-Arreglos

var nombres = [
	"Cristian Uhrig",
	"Laura Regert",
	"Alejandro Laurin",
	"Tatiana Jerez",
];

var lenguajes = new Array("PHP", "JS", "Java", "Python");

console.log(nombres);
console.log(lenguajes);
console.log(nombres[0]);

// Cuantos elementos tienen un array?
console.log(nombres.length);
/* 
var elemento = parseInt(prompt("Que elemento del array desea", 0));

if (elemento >= nombres.length) {
	alert("Introduce un numero válido");
} else {
	alert(nombres[elemento]);
} */

document.write("<h1>Lenguajes de programación</h1>");
document.write("<ul>");

/* for (let i = 0; i < lenguajes.length; i++) {
	const element = lenguajes[i];

	document.write("<li>" + element + "</li>");
} 

lenguajes.forEach((element, index, data) => {
	//console.log(data);
	document.write("<li>" + index + " - " + element + "</li>");
});

*/

for (let i in lenguajes) {
	document.write("<li>" + lenguajes[i] + "</li>");
}

document.write("</ul>");

// Busquedas

var precios = [10, 20, 40, 50, 12, 80];
var busqueda1 = precios.some((precio) => precio >= 100);

console.log(busqueda1);

//Comprueba que exista
var busqueda = lenguajes.find((lenguaje) => lenguaje == "PHP");

console.log(busqueda);

// Me devuelve el indice de lo que busco
var busqueda2 = lenguajes.findIndex((lenguaje) => lenguaje == "Java");

console.log(busqueda2);
