/*-------------------------------------------------------------------*/
/* START: SKILL BAR
/*-------------------------------------------------------------------*/
jQuery('.skillbar').each(function(){
	jQuery(this).find('.skillbar__bar').animate({
		width:jQuery(this).attr('data-percent')
	},4000);
});

/*-------------------------------------------------------------------*/
/* START: SCROLL NAVBAR
/*-------------------------------------------------------------------*/
var header = $(".navbar-home");
$(window).scroll(function() {
	var scroll = $(window).scrollTop();

	if (scroll >= 200) {
		header.removeClass('navbar-home').addClass("navbar-default");
	} else {
		header.removeClass("navbar-default").addClass('navbar-home');
	}
});

/*-------------------------------------------------------------------*/
/* START: SCROLL SMOOTH
/*-------------------------------------------------------------------*/
smoothScroll.init({
	speed: 1000,
	callback: function ( anchor, toggle ) {
		jQuery('.skillbar').find('.skillbar__bar').animate({
			width:'0%'
		},500);

		if("skill"){
			jQuery('.skillbar').each(function(){
				jQuery(this).find('.skillbar__bar').animate({
					width:jQuery(this).attr('data-percent')
				},4000);
			});
		}
	}
});