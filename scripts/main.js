/ * Triplist Scripts */

$(document).ready(function() {

	$("#login").click(function() {
		$("html, body").animate({
			scrollTop: $("#email").offset().top
		}, 2000);
		$("#email").effect("highlight", {}, 4000);
	});
});