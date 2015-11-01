$(document).ready(function() {

	// Navigation
	$(".link").click(function() { 
		var link=$(this).text();
		$(".content").children().hide();
		$(".on").removeClass("on");
		$(this).addClass("on");
		if (link == "main") {
			$("#mast-text").fadeIn(500);
		}
		else {
			$("#" + link).fadeIn(500);
		}
	});

	// Projects mouseover
	$(".proj-slide").hover(function() {
		$(this).find(".proj-caption").fadeIn(100);
	}, function() {
		$(this).find(".proj-caption").fadeOut(100);
	});

})