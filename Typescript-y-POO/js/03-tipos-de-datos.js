"use strict";
/*Tipos de datos */
// String
var cadena = "Cristian Uhrig";
// Number
var edad = 28;
// Boolean
var true_false = true;
// Any
var sin_tipo = "hola";
sin_tipo = 12; // Puede ser string, numero o lo que sea y no va a dar error
// Arrays
var lenguajes = ["JS", "Java", "C++", "PHP"];
var edades = [28, 23, 27, 29];
// Multiples tipos de datos
var usuario = "Cristian";
usuario = 123; // Puedo cambiar a un numero porque ahora mi variable usuario acepta tanto strings como numeros
var username = "Uhrig123";
username = 123;
/*LET vs VAR */
// var scope global
// let scope de bloque
var n1 = 10;
var n2 = 12;
if (n1 == 10) {
    var n1_1 = 44;
    var n2 = 55;
    console.log(n1_1, n2); // 44 y 55
}
console.log(n1, n2); //10 y 55
