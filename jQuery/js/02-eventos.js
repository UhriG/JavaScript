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
});
