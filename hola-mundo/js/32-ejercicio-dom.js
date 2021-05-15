"use strict";

window.addEventListener("load", function () {
	var formulario = document.querySelector("#form");
	var datos_box = document.querySelector(".dashed");
	datos_box.style.display = "none";
	formulario.addEventListener("submit", function () {
		var nombre = document.querySelector("#nombre").value;
		var apellidos = document.querySelector("#apellidos").value;
		var edad = parseInt(document.querySelector("#edad").value);

		if (nombre.trim() == null || nombre.trim().length == 0) {
			alert("El nombre no es válido");
			return false;
		}

		if (apellidos.trim() == null || apellidos.trim().length == 0) {
			alert("El apellido no es válido");
			return false;
		}

		if (edad == null || edad <= 0 || isNaN(edad)) {
			alert("La edad no es válida");
			return false;
		}

		/*
		var pNombre = document.createElement("p");
		var pApellidos = document.createElement("p");
		var pEdad = document.createElement("p");

		 pNombre.append("Nombre: ", nombre);
		pApellidos.append("Apellidos: ", apellidos);
		pEdad.append("Edad: ", edad); 
        
        datos_box.append(pNombre, pApellidos, pEdad);*/

		var datos = [nombre, apellidos, edad];

		for (var i in datos) {
			var info = document.createElement("p");
			info.append(datos[i]);
			datos_box.append(info);
		}

		datos_box.style.display = "block";
	});
});
