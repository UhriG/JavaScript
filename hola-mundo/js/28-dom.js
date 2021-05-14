"use strict";

// DOM - Document Object Model

function changeTextColor(color) {
	caja.style.color = color;
}

// CONSEGUIR ELEMENTOS POR ID

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

// CONSEGUIR ELEMENTOS POR ETIQUETA HTML
// Esto me genera un array con todos los elementos con etiqueta div de mi html
var todosLosDivs = document.getElementsByTagName("div");
todosLosDivs[1].innerHTML = "Soy el segundo DIV y me modificaron por JS";

var valor;
var seccion = document.querySelector("#miSeccion");
var hr = document.createElement("hr");

for (valor in todosLosDivs) {
	if (todosLosDivs[valor].textContent) {
		var parrafo = document.createElement("p");
		var texto = document.createTextNode(todosLosDivs[valor].textContent);
		parrafo.append(texto);
		seccion.append(parrafo);
	}
}
seccion.append(hr);
for (let i = 0; i < todosLosDivs.length; i++) {
	todosLosDivs[i].style.margin = "10px 0px";
	todosLosDivs[i].style.backgroundColor = "blue";
	todosLosDivs[i].style.color = "#fff";
}

// CONSEGUIR ELEMENTOS POR CLASE
var divsRojos = document.getElementsByClassName("rojo");

for (var div in divsRojos) {
	if (divsRojos[div].className == "rojo") {
		divsRojos[div].style.background = "red";
	}
}

var divsAmarillos = document.getElementsByClassName("amarillo");
divsAmarillos[0].style.background = "yellow";
divsAmarillos[0].style.color = "black";
console.log(caja);
