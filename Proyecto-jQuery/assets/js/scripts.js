$(document).ready(function () {
	// Slider
	if (window.location.href.indexOf("index") > -1) {
		$(".bxslider").bxSlider({
			mode: "fade",
			captions: true,
			slideWidth: 1200,
			auto: true,
		});

		// Posts
		var posts = [
			{
				title: "Titulo 1 por JSON",
				date:
					"Publicado el día " +
					moment().date() +
					" de " +
					moment().format("MMMM") +
					" del " +
					moment().format("YYYY"),
				content:
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat bcaecati labore quia quidem facilis debitis voluptatem alias eveniet quasi! Sunt saepe nostrum nam delectus quis veritatis, eos eveniet laboriosam dolore fuga fugit veniam assumenda nimi nulla nihil sapiente ea ullam id ut doloribus.",
			},
			{
				title: "Titulo 2 por JSON",
				date:
					"Publicado el día " +
					moment().date() +
					" de " +
					moment().format("MMMM") +
					" del " +
					moment().format("YYYY"),
				content:
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat bcaecati labore quia quidem facilis debitis voluptatem alias eveniet quasi! Sunt saepe nostrum nam delectus quis veritatis, eos eveniet laboriosam dolore fuga fugit veniam assumenda nimi nulla nihil sapiente ea ullam id ut doloribus.",
			},
			{
				title: "Titulo 3 por JSON",
				date:
					"Publicado el día " +
					moment().date() +
					" de " +
					moment().format("MMMM") +
					" del " +
					moment().format("YYYY"),
				content:
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat bcaecati labore quia quidem facilis debitis voluptatem alias eveniet quasi! Sunt saepe nostrum nam delectus quis veritatis, eos eveniet laboriosam dolore fuga fugit veniam assumenda nimi nulla nihil sapiente ea ullam id ut doloribus.",
			},
			{
				title: "Titulo 4 por JSON",
				date:
					"Publicado el día " +
					moment().date() +
					" de " +
					moment().format("MMMM") +
					" del " +
					moment().format("YYYY"),
				content:
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat bcaecati labore quia quidem facilis debitis voluptatem alias eveniet quasi! Sunt saepe nostrum nam delectus quis veritatis, eos eveniet laboriosam dolore fuga fugit veniam assumenda nimi nulla nihil sapiente ea ullam id ut doloribus.",
			},
			{
				title: "Titulo 5 por JSON",
				date:
					"Publicado el día " +
					moment().date() +
					" de " +
					moment().format("MMMM") +
					" del " +
					moment().format("YYYY"),
				content:
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat bcaecati labore quia quidem facilis debitis voluptatem alias eveniet quasi! Sunt saepe nostrum nam delectus quis veritatis, eos eveniet laboriosam dolore fuga fugit veniam assumenda nimi nulla nihil sapiente ea ullam id ut doloribus.",
			},
		];
		posts.forEach((item, index) => {
			var post = `<article class="post">
        <h2>${item.title}</h2>
        <span class="date">${item.date}</span>
        <p>
            ${item.content}
        </p>
        <a href="" class="btn-more">Leer más</a>
    </article>`;
			$("#posts").append(post);
		});
	}
	// Cambio de tema del sitio
	var template = $("#template");
	var cssUrl;

	$("#toRed").click(function () {
		localStorage.clear();
		cssUrl = localStorage.setItem("css", "assets/css/red.css");
		// template.attr("href", "assets/css/red.css");
		template.attr("href", localStorage.getItem("css"));
	});
	$("#toGreen").click(function () {
		localStorage.clear();
		cssUrl = localStorage.setItem("css", "assets/css/green.css");
		// template.attr("href", "assets/css/green.css");
		template.attr("href", localStorage.getItem("css"));
	});
	$("#toBlue").click(function () {
		localStorage.clear();
		cssUrl = localStorage.setItem("css", "assets/css/blue.css");
		// template.attr("href", "assets/css/blue.css");
		template.attr("href", localStorage.getItem("css"));
	});

	template.attr("href", localStorage.getItem("css"));

	// Scroll up de la página
	$(".goUp").click(function (e) {
		e.preventDefault();

		$("html, body").animate(
			{
				scrollTop: 0,
			},
			500
		);
		return false;
	});

	// Login
	$("#loginForm").submit(function (e) {
		e.preventDefault();
		var formName = $("#formName").val();
		localStorage.setItem("username", formName);
		location.reload();
	});

	var cerrarSesion = $("#cerrarSesion");
	cerrarSesion.hide();

	var formName = localStorage.getItem("username");

	if (typeof formName == "string") {
		$("#about p").html("<br><strong>Bienvenido, " + formName + "</strong>");
		$("#login").hide();
		cerrarSesion.show();
		cerrarSesion.click(function () {
			localStorage.clear();
			location.reload();
		});
	}

	// Accordeon
	if (window.location.href.indexOf("about") > -1) {
		$("#acordeon").accordion({
			collapsible: true,
		});
	}

	// Reloj
	if (window.location.href.indexOf("reloj") > -1) {
		setInterval(() => {
			var reloj = moment().format("hh:mm:ss");
			$("#reloj").html(reloj);
		}, 1000);
	}

	// Validar formulario
	if (window.location.href.indexOf("contact") > -1) {
		$("form input[name='date']").datepicker({
			dateFormat: "dd/mm/yy",
		});

		$("#contactForm").validate({});
	}
});
