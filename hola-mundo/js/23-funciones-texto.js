"use_strict";

// Transformacion de textos
var numero = 123;
var texto1 = "        Hola don pepito, hola don jose, pasó usted ya por casa?";
var texto2 = "Hola don josé";

var numeroATexto = numero.toString();
console.log(numeroATexto);
console.log(typeof numeroATexto);

var aMayusculas = texto1.toUpperCase();
var aMinusculas = texto1.toLowerCase();
console.log(aMayusculas);
console.log(aMinusculas);

//Calcular longitud de texto
var nombre = "Cristian Uhrig";
console.log(nombre.length);

// Concatenar texto
var textoTotal = texto1 + " " + texto2;
console.log(textoTotal);

var textoTotal2 = texto1.concat(" " + texto2);
console.log(textoTotal2);

/**
 * Busqueda de texto
 */

var busqueda = texto1.indexOf("don");
console.log(busqueda);

var busqueda2 = texto1.lastIndexOf("don");
console.log(busqueda2);

var busqueda3 = texto1.search("Hola");
console.log(busqueda3);

var busqueda4 = texto1.match(/don/g);
console.log(busqueda4);

var busqueda5 = texto1.substr(16, 10);
console.log(busqueda5);

var busqueda6 = texto1.charAt(12);
console.log(busqueda6);

var busqueda7 = texto1.startsWith("Hola");
console.log(busqueda7);

var busqueda8 = texto1.endsWith("jose");
console.log(busqueda8);

var busqueda9 = texto1.includes("pepito");
console.log(busqueda9);

//Cambio el primer texto por el segundo
var busqueda10 = texto1.replace("jose", "ramon");
console.log(busqueda10);

//Slice corta el string de cero al numero de caracter que le indico
var busqueda11 = texto1.slice(17);
console.log(busqueda11);

//Split me separa las palabras con un espacio y lo mete en un array
var busqueda12 = texto1.split(" ");
console.log(busqueda12);

//Trim recorta los espacios por delante y por detras del string
var busqueda13 = texto1.trim();
console.log(busqueda13);
