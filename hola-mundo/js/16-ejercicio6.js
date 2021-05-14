"use_strict";

/*
UN PROGRAMA QUE NOS DIGA SI UN NUMERO ES PAR O IMPAR.
1. PROMPT
2. TIENE QUE COMPROBAR QUE SI UN NUMERO INGRESADO NO ES VALIDO VUELVA A PEDIRLO
*/

do {
	var num = parseInt(prompt("Ingrese un numero: ", 0));
} while (isNaN(num));

if (num % 2 == 0) {
	document.write("<p>" + num + " es par.</p>");
} else {
	document.write("<p>" + num + " es impar.</p>");
}
