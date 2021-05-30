"use strict";
// Agarro los parametros que paso por la consola, empezando por el indice 1 en vez del 0
var params = process.argv.slice(2);

var n1 = parseFloat(params[0]);
var n2 = parseFloat(params[1]);

var plantilla = `
    Suma: ${n1 + n2}
    Resta: ${n1 - n2}
    Multiplicación: ${n1 * n2}
    División: ${n1 / n2}
    
`;
console.log(plantilla);

console.log("Hola mundo con NodeJS");

/*
    Para ejecutar esto desde NodeJS tengo que abrir la consola, entrar a esta ruta 
    e ingresar: node calculadora.js 10 2 (10 y 2 son los parametros que envío, podrían ser otros numeros)
*/
