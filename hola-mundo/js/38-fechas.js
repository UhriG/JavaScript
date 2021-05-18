"use strict";

window.addEventListener("load", function () {
	var fecha = new Date();

	var year = fecha.getFullYear();
	var mes = fecha.getMonth(); // va del 0 (enero) al 11 (diciembre)
	var dia = fecha.getDate();
	var hora = fecha.getHours();
	var minutos = fecha.getMinutes();
	var segundos = fecha.getSeconds();

	var textoHora = `
        El año es: ${year}
        El mes es: ${mes + 1} 
        El día es: ${dia}
        La hora es: ${hora}hs con ${minutos} minutos y ${segundos} segundos 
    `;
	console.log(textoHora);
	console.log(fecha);
});
