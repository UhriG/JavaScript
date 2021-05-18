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

			// Cuando termina la petición anterior llamo a la funcion getUsuario para empezar una peticion nueva
			return getUsuario();
		})
		.then((response) => response.json())
		.then((data) => {
			var usuario = data;
			listarUsuario(usuario.data);
		});

	function getUsuarios() {
		return fetch("https://jsonplaceholder.typicode.com/users");
	}

	function getUsuario() {
		return fetch("https://reqres.in/api/users/2");
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
		document.querySelector(".usuario").append(nombre, avatar);
	}
});
