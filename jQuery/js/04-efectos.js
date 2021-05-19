$(function () {
	//* show, hide y toggle
	var mostrar = $("#show");
	var ocultar = $("#hide");
	var showHide = $("#showHide");
	var caja = $("#caja");

	ocultar.hide();

	mostrar.click(function (e) {
		e.preventDefault();
		caja.show("normal");
		$(this).hide();
		ocultar.show();
	});

	ocultar.click(function (e) {
		e.preventDefault();
		caja.hide("slow");
		$(this).hide();
		mostrar.show();
	});

	showHide.click(function (e) {
		e.preventDefault();
		// caja.toggle("fast");
		caja.slideToggle();
	});

	//* fadeIn y fadeOut
	var fadeIn = $("#fadeIn");
	var fadeOut = $("#fadeOut");

	fadeOut.hide();

	fadeIn.click(function () {
		caja.fadeIn("fast");
		$(this).hide();
		fadeOut.fadeIn();
	});

	fadeOut.click(function () {
		caja.fadeOut("slow");
		$(this).hide();
		fadeIn.fadeIn();
	});
});
