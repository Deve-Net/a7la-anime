	var shino = jQuery.noConflict();

	shino(document).ready(function() {
		shino("#shadow").css("height", j(document).height()).hide();
		shino("#lightSwitcher").click(function() {
			shino("#shadow").toggle();
			if (shino("#shadow").is(":hidden"))
				shino(this).html("").removeClass("turnedOff");
			else
				shino(this).html("").addClass("turnedOff");
		});
		
		shino("#shadow").click(function() {
			shino(this).fadeOut('slow');
			shino("#lightSwitcher").html("").removeClass("turnedOff");
		});
	});
	
