"use strict";

// Timers de JavaScript

// Load: espera a que cargue toda la pagina completa para ejectur el código javascript
window.addEventListener("load", () => {
	function intervalo() {
		// setInterval: se va a ejecutar siempre cada tantos segundos
		var tiempo = setInterval(function () {
			console.log("setInterval ejecutado");

			var h1 = document.getElementsByTagName("h1");
			if (h1[0].style.color == "green") {
				h1[0].style.color = "red";
			} else {
				h1[0].style.color = "green";
			}
		}, 500);

		return tiempo;
	}

	var tiempo = intervalo();

	// Boton para parar setInterval
	var stop = document.querySelector("#stop");
	stop.addEventListener("click", function () {
		clearInterval(tiempo);
	});

	// Boton para iniciar setInterval
	var start = document.querySelector("#start");

	start.addEventListener("click", function () {
		tiempo = intervalo();
	});

	// Set timeOut: se va a ejectur una sola vez después del tiempo asignado
	var tiempo2 = setTimeout(function () {
		console.log("setTimeout ejecutado");

		var h1 = document.getElementsByTagName("h1");
		h1[0].style.color = "green";
	}, 3000);
});
