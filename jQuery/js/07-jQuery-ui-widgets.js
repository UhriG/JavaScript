$(document).ready(function () {
	//* Tooltip
	$("a").tooltip();

	//* Dialog
	$("#popUp").hide();
	$("#activarPopUp").click(function () {
		$("#popUp").dialog();
	});

	//* Datepicker
	$("#calendario").datepicker();

	//* Tabs
	$("#tabs").tabs();
});
