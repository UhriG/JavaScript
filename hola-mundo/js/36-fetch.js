"use strict";
window.addEventListener("load", () => {
	// Fetch (ajax) y peticiones a servicios/api rest
	var usuarios = [];

	getUsuarios()
		// capturamos los datos y lo convertimos a json (objeto javascript)
		.then((response) => response.json())
		// luego en la variable data ya tenemos toda la informacion y la guardamos en usuarios
		.then((data) => {
			usuarios = data;
			listarUsuarios(usuarios);
			return getInfo();
		})
		.then((data) => {
			document.querySelector("#profesor").innerHTML = data;
			// Cuando termina la petición anterior llamo a la funcion getUsuario para empezar una peticion nueva
			return getUsuario();
		})
		.then((response) => response.json())
		.then((data) => {
			var usuario = data;
			listarUsuario(usuario.data);
		})
		.catch((error) => {
			console.log("Error en las peticiones - " + error);
		});

	function getUsuarios() {
		return fetch("https://jsonplaceholder.typicode.com/users");
	}

	function getUsuario() {
		return fetch("https://reqres.in/api/users/2");
	}

	function getInfo() {
		var profesor = {
			nombre: "Victor",
			apellido: "Robles",
			url: "https://victorroblesweb.com",
		};
		return new Promise((resolve, reject) => {
			var profesorString = JSON.stringify(profesor);

			setTimeout(function () {
				if (typeof profesorString != "string" || profesorString == "")
					return reject("error 1");

				return resolve(profesorString);
			}, 3000);
		});
	}

	function listarUsuarios(usuarios) {
		usuarios.map((user, i) => {
			let nombre = document.createElement("li");
			nombre.append(user.name);
			document.querySelector("ol").append(nombre);
		});
	}

	function listarUsuario(usuario) {
		console.log(usuario);
		let nombre = document.createElement("p");
		let avatar = document.createElement("img");
		avatar.src = usuario.avatar;
		avatar.style.width = "150px";
		nombre.append(usuario.first_name + " " + usuario.last_name);
		document.querySelector("#usuario").append(nombre, avatar);
	}
});
