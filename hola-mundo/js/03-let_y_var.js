"use strict";

//Pruebas con Let y Var

//Prueba con Var
var numero = 40;
console.log(numero);

if (true) {
	var numero = 50;
	console.log(numero);
}

console.log(numero);

//Prueba con Let
let texto = "Curso JS";
console.log(texto); //Curso JS

if (true) {
	let texto = "Curso JS Master";
	console.log(texto); //Curso JS Master
}

console.log(texto); //Curso JS
