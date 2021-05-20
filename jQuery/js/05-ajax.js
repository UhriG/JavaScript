$(document).ready(function () {
	// Load
	//$("#datos").load("https://reqres.in/api/users");

	//*GET y POST

	//? GET
	$.get("https://reqres.in/api/users", { page: 2 }, function (response) {
		response.data.forEach((element) => {
			$("#datos").append(
				"<p>" + element.first_name + " " + element.last_name + "</p>"
			);
		});
	});

	//? POST

	/* $("#registrar").submit(function (e) {
		e.preventDefault();

		var usuario = {
			name: $("input[name='nombre']").val(),
			age: $("input[name='edad']").val(),
		};

		$.post($(this).attr("action"), usuario, function (response) {
			console.log(response);
		}).done(function () {
			console.log("Usuario añadido");
		});

		return false;
	}); */

	//? $.ajax
	$("#registrar").submit(function (e) {
		e.preventDefault();

		var usuario = {
			name: $("input[name='nombre']").val(),
			age: $("input[name='edad']").val(),
		};

		$.ajax({
			type: "post",
			url: $(this).attr("action"),
			data: usuario,
			beforeSend: function () {
				console.log("Enviando usuario...");
			},
			success: function (response) {
				console.log(response);
				$("#msg")
					.fadeIn()
					.addClass("msg-success")
					.html("Usuario registrado con éxito");
				setTimeout(() => {
					$("#msg").fadeOut();
				}, 3000);
			},
			error: function () {
				$("#msg")
					.fadeIn()
					.addClass("msg-error")
					.html("Ha ocurrido un error");
				setTimeout(() => {
					$("#msg").fadeOut();
				}, 3000);
				console.log("Ha ocurrido un error");
			},
			timeout: 1000,
		});

		$("input[name='nombre']").val(" ");
		$("input[name='edad']").val(" ");

		return false;
	});
});
