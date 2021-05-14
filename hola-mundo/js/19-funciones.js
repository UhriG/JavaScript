"use_strict";

/**
 * FUNCIONES
 * UNA FUNCION ES UNA AGRUPACION REUTILIZABLE DE UN CONJUNTO DE INSTRUCCIONES
 */

//Defino la function
function calculadora() {
	return document.write("hola soy la calculadora");
}

//Invoco a la funcion
calculadora();

//Funcion con parametros
function calculadora2(num1, num2) {
	console.log("Suma: " + num1 + num2);
	console.log("Resta: " + (num1 - num2));
	console.log("Multiplicacion: " + num1 * num2);
	console.log("Division: " + num1 / num2);
	console.log("*************************");
}
//La invoco enviando los dos parametros
calculadora2(10, 2);

//Parametros opcionales
function calculadora3(num1, num2, mostrar = false) {
	if (mostrar === false) {
		console.log("No ingreso nada");
		console.log("*************************");
	} else {
		console.log("Suma: " + num1 + num2);
		console.log("Resta: " + (num1 - num2));
		console.log("Multiplicacion: " + num1 * num2);
		console.log("Division: " + num1 / num2);
		console.log("*************************");
	}
}
calculadora3(12, 3);
calculadora3(10, 5, true);
