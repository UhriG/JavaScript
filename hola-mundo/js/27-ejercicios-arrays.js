"use_strict";

/**
 * Hacer un programa que:
   1- Pida 6 numeros por pantalla y los meda en un array
   2- Tiene que mostrar todos los elementos del array en el cuerpo de la página y en la consola.
   3- Mostrar el array ordenado.
   4- Invertir su orden y mostrarlo.
   5- Mostrar cuantos elementos tiene el array.
   6- Hacer una busqueda de un valor introducido por el usuario y que nos diga si está en el array y su posicion.
 */

var numeros = new Array();

for (let i = 0; i < 6; i++) {
	numeros.push(parseInt(prompt("Ingrese un numero", 0)));
}
console.log(numeros);

numeros.forEach((element) => {
	document.write("<p>" + element + "</p>");
});

console.log(numeros.sort());
console.log(numeros.reverse());
console.log(numeros.length);

var buscar = parseInt(prompt("Ingrese un numero a buscar"));

var busqueda = numeros.find((numero) => numero == buscar);
var busquedaIndex = numeros.findIndex((numero) => numero == buscar);

console.log(busqueda);
console.log(busquedaIndex);
