"use strict";

// Eventos de JavaScript

// Load: espera a que cargue toda la pagina completa para ejectur el código javascript
window.addEventListener("load", () => {
	function cambiarColorBoton() {
		var bg = boton.style.backgroundColor;
		if (bg == "green") {
			boton.style.backgroundColor = "red";
		} else {
			boton.style.backgroundColor = "green";
		}

		boton.style.padding = "20px";
		boton.style.border = "3px solid black";
		return true;
	}

	var boton = document.querySelector("#boton");

	// Eventos del mouse

	// Click
	boton.addEventListener("click", function () {
		cambiarColorBoton();
	});

	// Mouse over
	boton.addEventListener("mouseover", function () {
		// this hace referencia en este caso al boton
		this.style.backgroundColor = "lightblue";
		this.style.color = "black";
	});

	// Mouse out
	boton.addEventListener("mouseout", function () {
		this.style.backgroundColor = "blue";
		this.style.color = "white";
	});

	// Eventos teclado
	var input = document.querySelector("#nombre");
	// Focus
	input.addEventListener("focus", function () {
		console.log("Focus: Haciendo focus en el input");
	});

	// Blur
	input.addEventListener("blur", function () {
		console.log("Blur: Saliste del input");
	});

	// Keydown
	input.addEventListener("keydown", function (event) {
		console.log(
			"Keydown: Estas presionando esta tecla: ",
			String.fromCharCode(event.keyCode)
		);
	});

	// Keypress
	input.addEventListener("keypress", function (event) {
		console.log(
			"Keypress: Tecla presionada: ",
			String.fromCharCode(event.keyCode)
		);
	});

	// Keyup
	input.addEventListener("keyup", function (event) {
		console.log(
			"Keyup: Tecla soltada: ",
			String.fromCharCode(event.keyCode)
		);
	});
});
