$(document).ready(function(){
	var navHeight = $("nav.navigation").height();

	$('.nav-link').click(function(e){
		e.preventDefault();
		var hash = this.hash;

		$('html, body').animate({scrollTop:$(hash).offset().top}, 2000, 'swing');
	});

	$('.dropdown-nav .nav-link').click(function(){
		$('.dropdown-nav').slideUp('fast');
	});

	$(window).scroll(function(){
		if($(window).scrollTop() > 300){
			$('.scroll-btn').fadeIn('fast');
		}
		else{
			$('.scroll-btn').fadeOut('fast');
		}
	});

	$('.dropdown-btn').click(function(){
		$('.dropdown-nav').slideToggle('fast');
	});
	
});

function activateLink(){

	$(".nav-link").each(function(){
		var curLink = $(this);
		var ref = $(curLink.attr("href"))

		if($(window).scrollTop() >= ref.offset().top - navHeight - 150 && $(window).scrollTop() < ref.offset().top + ref.height()){
			$(".nav-link").removeClass("active");
			curLink.addClass("active");
		}
		else{
			curLink.removeClass("active");
		}
	});
}