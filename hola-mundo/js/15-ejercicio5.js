"use_strict";

/*
MOSTRAR TODOS LOS NUMEROS DIVISORES DE UN NUMERO INGRESADOS POR EL USUARIO
*/

var num = parseInt(prompt("Ingrese un numero: ", 0));

document.write("<h2>Numeros divisores de " + num + "</h2>");

for (var i = 0; i <= num; i++) {
	if (num % i == 0) {
		document.write(i + " es divisor de " + num + "<br>");
	}
}
