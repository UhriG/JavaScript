"use_strict";

/*
MOSTRAR TODOS LOS NUMEROS IMPARES ENTRE DOS NUMEROS INGRESADOS POR EL USUARIO
*/

var num1 = parseInt(prompt("Ingrese el primer numero: ", 0));

var num2 = parseInt(prompt("Ingrese el segundo numero: ", 0));

document.write("<h2>Numeros impares entre " + num1 + " y " + num2 + "</h2>");

for (var i = num1; i <= num2; i++) {
	if (i % 2 != 0) {
		document.write(i + "<br/>");
	}
}
