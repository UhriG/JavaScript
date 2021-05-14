"use strict";

//Uso de operadores y datos

// Operadores
var num1 = 7;
var num2 = 13;
var suma = num1 + num2;
var resta = num1 - num2;
var multiplicacion = num1 * num2;
var division = num1 / num2;

console.log("Suma: " + suma);
console.log("Resta: " + resta);
console.log("Multiplicacion: " + multiplicacion);
console.log("Division: " + division);

// Tipos de datos
var numero_entero = 44;
var cadena_de_text = "Texto";
var verdadero_falso = true; //true-false-0-1
var numeroFalso = "9.4";

Number(numeroFalso); //Convierte a numero la cadena de texto

console.log(Number(numeroFalso) + 12);

console.log(parseInt(numeroFalso) + 12);

console.log(parseFloat(numeroFalso) + 12);

console.log(String(numero_entero) + 56);

//Como saber de que tipo es cada variable con typeof

console.log(typeof numeroFalso);
console.log(typeof numero_entero);
console.log(typeof verdadero_falso);
