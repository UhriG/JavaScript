"use_Strict";
// Funciones anonimas
// Es una funcion que no tiene nombre

var pelicula = function (nombre) {
	return "La pelicula es " + nombre;
};

console.log(pelicula("Die hard"));

function sumame(num1, num2, sumaYmuestra, sumaPorDos) {
	var sumar = num1 + num2;

	sumaYmuestra(sumar);
	sumaPorDos(sumar);

	return sumar;
}

sumame(
	10,
	5,
	function (dato) {
		console.log("La suma es: ", dato);
	},
	(dato) => {
		console.log("La suma por dos es: ", dato * 2);
	}
);
