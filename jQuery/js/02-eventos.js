$(function () {
	// Eventos

	var caja = $("#caja");

	//* MouseOver y mouseOut

	/* caja.mouseover(function () {
		$(this).css("background-color", "blue");
	});
	caja.mouseout(function () {
		$(this).css("background-color", "green");
	}); */

	//* Hover
	caja.hover(
		function () {
			//* over
			$(this).css("background-color", "blue");
		},
		function () {
			//* out
			$(this).css("background-color", "green");
		}
	);

	//* Click, Doble click

	//? click
	caja.click(function () {
		$(this).css("border", "5px solid orange");
	});

	//? doble click
	caja.dblclick(function () {
		$(this).css("border", "5px solid black");
	});

	//* Focus y Blur
	var datos = $("#datos");
	var input = $("#nombre");
	//? Focus
	input.focus(function () {
		$(this).css("border", "2px solid green");
	});

	//? Blur
	input.blur(function () {
		$(this).css("border", "1px solid gray");

		// Incrusto el valor del input en el div #datos y lo hago visible
		datos.text($(this).val()).show();
	});

	//* Mousedown y Mouseup

	//? Mousedown
	datos.mousedown(function () {
		$(this).css("border-color", "green");
	});

	//? Mouseup
	datos.mouseup(function () {
		$(this).css("border-color", "gray");
	});

	//* Mousemove
	$(document).mousemove(function (e) {
		// values: e.clientX, e.clientY, e.pageX, e.pageY
		$("body").css("cursor", "none");
		var sigueme = $("#sigueme")
			.css("left", e.clientX)
			.css("top", e.clientY);
	});
});
