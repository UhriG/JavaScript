"use_strict";

/*
tabla de multiplicar de un numero introducido por pantalla
*/

var num = parseInt(prompt("Ingrese un numero: ", 0));

document.write("<h2>Tabla de multiplicar del: " + num + "</h2>");

for (var i = 1; i <= 10; i++) {
	document.write("<p>" + num + "x" + i + " = " + num * i + "</p>");
}

//TODAS LAS TABLAS
for (i = 1; i <= 10; i++) {
	document.write("<br><h2>Tabla del " + i + "</h2>");
	for (var j = 1; j <= 10; j++) {
		document.write("<p>" + i + "x" + j + " = " + j * i + "</p>");
	}
}
