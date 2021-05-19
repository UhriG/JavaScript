$(function () {
	$("#addBtn").removeAttr("disabled");
	loadLinks();
	$("#addBtn").click(function () {
		var link = $("#link");
		$("ul").prepend("<li><a href='" + link.val() + "'></a></li>");
		loadLinks();
		link.val(" ");
	});
});

function loadLinks() {
	$("a").each(function (index) {
		var enlace = $(this).attr("href");
		$(this).attr("target", "_BLANK");
		$(this).text(enlace);
	});
}
