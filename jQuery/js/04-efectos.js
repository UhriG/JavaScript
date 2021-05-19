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
		caja.slideToggle("slow", function () {
			console.log("Caja activada/desactivada");
		});
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

	//* Animaciones personalizadas con animate

	var animar = $("#animar");
	animar.click(function () {
		caja.animate({ marginLeft: "500px", borderRadius: "50%" }, "slow")
			.animate({ marginTop: "200px" }, "slow")
			.animate({ marginLeft: "0px" }, "slow")
			.animate({ marginTop: "10px", borderRadius: "0%" }, "slow");
	});
});
