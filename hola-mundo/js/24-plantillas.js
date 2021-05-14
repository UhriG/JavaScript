"use_strict";

// Plantillas de texto

var nombre = prompt("Ingresa tu nombre");
var apellidos = prompt("Ingresa tu apellido");

/* var texto = "Mi nombre es " + nombre + " y mi apellido es " + apellidos; */

var texto = `
    <h3> Mi nombre es ${nombre}
    <br> Mi apellido es ${apellidos}</h3>
`;

document.write(texto);
