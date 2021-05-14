"use_strict";
/*Parametros REST y SPREAD */

/**
 * Parametro REST:
 * Al poner el tercer parametro con 3 puntos adelante, ej: ...resto_de_frutas
 * Cuando invoco a la función pasandole más parametros de los que debería, se va a crear un array en mi parametro rest con todos esos valores restantes
 */
function listadoFrutas(fruta1, fruta2, ...resto_de_frutas) {
	console.log("fruta 1: " + fruta1 + " Fruta 2: " + fruta2);
	console.log("Resto de frutas: " + resto_de_frutas);
}

listadoFrutas("naranja", "manzana", "Sandia", "Pera", "Melon", "Coco");

/**SPREAD */
var frutas = ["Naranja", "Manzana"];
listadoFrutas(...frutas, "Sandia", "Pera", "Melon", "Coco");
