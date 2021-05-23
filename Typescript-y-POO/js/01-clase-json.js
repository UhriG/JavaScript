"use strict";

window.addEventListener("load", function () {
	var bicicleta = {
		color: "red",
		modelo: "bmx",
		frenos: "disco",
		velocidadMax: "60km",
		cambiarColor: function (nuevoColor) {
			//bicicleta.color = nuevoColor;
			this.color = nuevoColor;
		},
	};
	bicicleta.cambiarColor("azul");
	console.log(bicicleta);
});
