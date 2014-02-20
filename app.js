$(document).ready(function() {

  var form = '#interest';

	var show_application = function(){
		$("#information").hide();
        $(".header").hide();
		$(form).show();
		window.scrollTo(0,500);
	}

    $(".navbar").sticky({topSpacing:0});

	$(form).hide();

	$(".Apply .button").on( 'click', function() {
		show_application();
		window.location.hash = form;
		
		 /*
		//Firefox for some reason does not refresh the DOM in iFrame
	    if($.browser.mozilla){
			document.getElementsByTagName('iframe')[0].src=document.getElementsByTagName('iframe')[0].src
	    }    */

	});

	$("div#application a.back").click(function() {
		$(form).hide();
		$("#information").show();
        $(".header").show();
		window.location.hash = '';
	});
		
	$('.advisorimages ul li img').popover({
		placement: 'bottom',
		animation: false}
	);
		
	// anchor scrolling
	var didScroll = true;

	var sections = $(".wrapper").each(function(index) {
		$(this).data("height", $(this).height());
	});
	var links = $(".navbar a");

	$(".navbar").localScroll({
		axis : "y",
		duration : 1000,
		easing : "easeInOutExpo",
		hash : true,
        offset: -70
	});
		
		
	if(window.location.hash == form){
		show_application();
	}

});
