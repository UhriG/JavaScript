$(document).ready(function () {
	// Slider
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

	// Cambio de tema del sitio
	var template = $("#template");

	$("#toRed").click(function () {
		template.attr("href", "assets/css/red.css");
	});
	$("#toGreen").click(function () {
		template.attr("href", "assets/css/green.css");
	});
	$("#toBlue").click(function () {
		template.attr("href", "assets/css/blue.css");
	});

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
});
