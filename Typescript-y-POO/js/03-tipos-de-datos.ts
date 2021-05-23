/*Tipos de datos */

// String
let cadena: string = "Cristian Uhrig";

// Number
let edad: number = 28;

// Boolean
let true_false: boolean = true;

// Any
let sin_tipo: any = "hola";
sin_tipo = 12; // Puede ser string, numero o lo que sea y no va a dar error

// Arrays
let lenguajes: Array<string> = ["JS", "Java", "C++", "PHP"];

let edades: number[] = [28, 23, 27, 29];

// Multiples tipos de datos
let usuario: string | number = "Cristian";
usuario = 123; // Puedo cambiar a un numero porque ahora mi variable usuario acepta tanto strings como numeros

// Tipo de dato custom
type alfanumerico = string | number;
let username: alfanumerico = "Uhrig123";
username = 123;
