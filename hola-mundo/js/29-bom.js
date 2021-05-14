"use strict";

// BOM - Browser Object Model

//Medidas actuales de la ventana del navegador
console.log(window.innerHeight);
console.log(window.innerWidth);

// Medidas del tamaño de la pantalla
console.log(screen.width);
console.log(screen.height);

// URL actual
console.log(window.location.href);

// Redirigir a otra url
function redirect(url) {
	window.location.href = url;
}
// redirect("https://google.com");

// Abre una ventana nueva con la url indicada y con el tamaño indicado
function abrirVentana(url) {
	window.open(url, "", "width=400,height=600");
}
//abrirVentana("https://google.com");
