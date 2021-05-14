"use_strict";

/**
 * Utilizando un bucle, mostrar la suma y la media de los numeros introducidos hasta introducir un numero negativo y ahi mostrar el resultado
 */

var suma = 0;
var contador = 0;
var num = parseInt(prompt("Ingrese un numero: ", 0));

do {
	num = parseInt(prompt("Ingrese un numero: ", 0));

	if (isNaN(num)) {
		num = 0;
	} else if (num >= 0) {
		suma += num;
		contador++;
	}
} while (num >= 0);

console.log("Promedio: " + suma / contador);
console.log("Suma: " + suma);
