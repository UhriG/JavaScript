"use_strict";

/*
Programa que pida dos numeros y que nos diga cual es el mayor, el menor y si son iguales
*/

var num1 = parseInt(prompt("Ingrese el primer numero:", 0));
var num2 = parseInt(prompt("Ingrese el segundo numero: ", 0));

while (num1 <= 0 || num2 <= 0 || isNaN(num1) || isNaN(num2)) {
	num1 = parseInt(prompt("Ingrese el primer numero:", 0));
	num2 = parseInt(prompt("Ingrese el segundo numero: ", 0));
}

if (num1 > num2) {
	console.log(`${num1} es mayor`);
} else if (num2 > num1) {
	console.log(`${num2} es mayor`);
} else if (num1 == num2) {
	console.log("Los numeros son iguales");
} else {
	console.log("Ingrese un numero valido");
}
