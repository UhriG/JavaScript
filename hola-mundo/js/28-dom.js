"use strict";

// DOM - Document Object Model

function changeTextColor(color) {
	caja.style.color = color;
}

// Guardo en la variable caja mi elemento con id "miCaja"
/* Metodo 1: */ // var caja = document.getElementById("miCaja");
/* Metodo 2: 
    Se seleccionan los elementos como con CSS, # para ID, . para clases, directo para etiquetas
*/ var caja = document.querySelector("#miCaja");

// Modifico su valor interno con innerHTML
caja.innerHTML = "Texto modificado por JavaScript";

// Le doy estilos en linea con .style y el estilo a modificar
caja.style.background = "green";
caja.style.padding = "10px 20px";
changeTextColor("white");
caja.style.textTransform = "uppercase";

// Le agrego una clase a mi caja
caja.className = "texto texto2";

console.log(caja);
