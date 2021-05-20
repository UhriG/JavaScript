$(document).ready(function () {
	var elemento = $(".elemento");

	//* Mover elemento por la página
	elemento.draggable();

	//* Redimensionar
	elemento.resizable();

	//* Seleccionar elementos de una lista
	//$(".lista-seleccionable").selectable();

	//* Ordenar elementos
	$(".lista-seleccionable").sortable({
		update: function (event, ui) {
			console.log("Cambio la lista");
		},
	});

	//* Drag and drop
	$("#movible").draggable();
	$("#area").droppable({
		drop: function () {
			console.log("me tiraron algo  (?");
		},
	});

	//* Efectos
	$("#mostrar").click(function () {
		// $(".caja-efectos").fadeToggle();
		// $(".caja-efectos").effect("explode");
		// $(".caja-efectos").toggle("explode");
		// $(".caja-efectos").toggle("blind");
		// $(".caja-efectos").toggle("slide");
		// $(".caja-efectos").toggle("drop");
		// $(".caja-efectos").toggle("fold");
		// $(".caja-efectos").toggle("puff");
		// $(".caja-efectos").toggle("scale");
		$(".caja-efectos").toggle("shake", 200);
	});
});
