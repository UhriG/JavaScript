"use_strict";

/**
 * Hacer un programa que muestre todos los numeros entre dos numeros introducidos por el usuario
 */

/*MI METODO */

var num1 = parseInt(prompt("Introduce un numero:", 0));

var num2 = parseInt(prompt("Introduce otro numero:", 0));

var mayor, menor;

if (num1 > num2) {
	mayor = num1;
	menor = num2;
} else if (num1 < num2) {
	mayor = num2;
	menor = num1;
} else {
	console.log("Los numeros ingresados son iguales, reinicie el programa");
}

document.write(
	"<h2>Del " + menor + " al " + mayor + " estan los siguientes numeros:</h2>"
);

for (var i = menor; i <= mayor; i++) {
	document.write(i + "<br>");
}
