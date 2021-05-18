// Abreviacion de $(document).ready()
$(function () {
	// Selector de ID
	var rojo = $("#rojo")
		.css("color", "red")
		.css("fontSize", "17px")
		.css("fontWeight", "bold");

	var verde = $("#verde")
		.css("color", "green")
		.css("fontSize", "19px")
		.css("fontWeight", "bold");

	var azul = $("#azul")
		.css("color", "blue")
		.css("fontSize", "21px")
		.css("fontWeight", "bold");

	// Selectores de clase
	var caja = $(".caja")
		.css("float", "left")
		.css("border", "1px solid black")
		.css("margin", "10px")
		.css("width", "150px")
		.css("height", "150px");

	caja.click(function () {
		// This hace referencia a la caja misma
		$(this).toggleClass("caja3");
	});

	// Selector de etiqueta
	$("button").click(function () {
		/* if (caja.hasClass("caja2")) {
			caja.removeClass("caja2");
		} else {
			caja.addClass("caja2");
		} */
		caja.toggleClass("caja2"); // Hace lo mismo que arriba, agrega o quita una clase
	});
	$("p").click(function () {
		$(this).fadeOut();
	});

	// Selector de atributo
	$('[href = "https://google.com"]').css("color", "red");
	$('[title = "Twitter"]').css("color", "blue");
});
