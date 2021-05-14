"use_strict";

/*
tabla de multiplicar de un numero introducido por pantalla
*/

var num1 = parseInt(prompt("Ingrese un numero: ", 0));

var num2 = parseInt(prompt("Ingrese otro numero: ", 0));

while (isNaN(num1) || isNaN(num2)) {
	num1 = parseInt(prompt("Ingrese un numero: ", 0));

	num2 = parseInt(prompt("Ingrese otro numero: ", 0));
}

var suma = num1 + num2;
var resta = num1 - num2;
var multi = num1 * num2;
var divi = num1 / num2;

alert("La suma de " + num1 + " + " + num2 + " es igual a " + suma);
console.log("La suma de " + num1 + " + " + num2 + " es igual a " + suma);

alert("La resta de " + num1 + " - " + num2 + " es igual a " + resta);
console.log("La resta de " + num1 + " - " + num2 + " es igual a " + resta);

alert("La multi de " + num1 + " * " + num2 + " es igual a " + multi);
console.log("La multi de " + num1 + " * " + num2 + " es igual a " + multi);

alert("La divi de " + num1 + " / " + num2 + " es igual a " + divi);
console.log("La divi de " + num1 + " / " + num2 + " es igual a " + divi);
