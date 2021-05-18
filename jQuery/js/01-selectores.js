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
		.css("padding", "10px")
		.css("width", "250px")
		.css("minHeight", "150px")
		.css("height", "auto");

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

	// Varios
	$("p, a").addClass("mt");

	//Find y parent

	// Find, recorre el dom buscando el elemento indicado
	var find = $("#caja").find(".resaltado");
	console.log(find);

	// Parent, va al elemento padre las veces que se repita la funcion, se puede usar con un find para encontrar un elemento
	var parent = $("#elemento2").parent().parent().find(".resaltado");
	console.log(parent);
});
