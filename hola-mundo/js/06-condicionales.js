"use strict";
// Condicional IF
// Si A es igual a B entonces haz algo

var num1 = 15;
var num2 = 10;

if (num1 > num2) {
	console.log(num1 + " es mayor a " + num2);
} else {
	console.log(num2 + " es mayor a " + num1);
}

/*
    *OPERADORES RELACIONALES
    Mayor: >
    Menor: <
    Mayor o igual: >=
    Menor o igua: <=
    Distinto: !=
    Igual: ==
*/

var edad = 78;
var nombre = "Cristian";
if (edad >= 18) {
	console.log(nombre + " es mayor de edad");
	if (edad <= 33) {
		console.log("Es millenial");
	} else if (edad >= 70) {
		console.log("Boomer alert");
	}
} else {
	console.log(nombre + " es menor de edad");
}

/*
    *OPERADORES LOGICOS
    AND (y): &
    OR (o): ||
    NEGACIÓN: !
*/

//Negacion
var year = 2021;
if (year != 2021) {
	console.log("El año no es 2021");
}

// AND
if (year > 2000 && year < 2030) {
	console.log("Estamos entre el 2000 y el 2030");
}

// OR
if (year == 2011 || year == 2021) {
	console.log("El año termina en 1");
}
