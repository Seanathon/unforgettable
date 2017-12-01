
$(document).ready(function(){
	var adCount = 0;
	var wHeight = $(window).height();
	var wHTwo = wHeight - (wHeight*0.2);
	var wWidth = $(window).width();
	var promoYo = $(".hero").height() + $(".about").height() + $(".recipients").height() + $(".presenters").height() + $(".performers").height() + $(".eventinfo").height() - 50;
	var promoYoEnd = promoYo + $('.packages').height() + $(".sponsors").height();

	$(window).scroll(function() {
		if($(window).scrollTop() > wHTwo && $(window).scrollTop() < promoYo || $(window).scrollTop() >= promoYoEnd) {
			$('.gui').find('.promo').addClass('show');
		} else if( $(window).scrollTop() > promoYo && $(window).scrollTop() < promoYoEnd ) {
			$('.gui').find('.promo').removeClass('show');
		} else {
			$('.gui').find('.promo').removeClass('show');
		}
	});

	$('.hamburger').on('click', function() {
		$('.hamburger').toggleClass('hide');
		$('.mobile-menu').toggleClass('active');
		$('body').toggleClass('noscroll');
	});
	$('.mobile-menu').find('.close').on('click', function() {
		$('.hamburger').toggleClass('hide');
		$('.mobile-menu').toggleClass('active');
		$('body').toggleClass('noscroll');
	});

	// Recipients Modal
	$('.recipient, .presenter').on('click', function() {
		var p = $(this).data('person');
		// adCount++;
		// console.log("Ad: " + adCount);
		if ( p == "tba" ) {
		} else {
			// if( adCount == 1 || adCount % 3 == 0 ) {
			// 	$('.ad-modal').toggleClass('show');
			// 	$("#ad")[0].src += "&autoplay=1";
			// }
			$(this).parents('.people').find('.modals').find('.active').removeClass('active');
			$('#' + p).addClass('active');
			$(this).parents('.people').find('.modals').toggleClass('show');
			$('body').toggleClass('noscroll');
		}
	});

	$('.modals').find('.close').on('click', function() {
		$(this).parents('.people').find('.modals').toggleClass('show');
		$('body').toggleClass('noscroll');
	});

	// Recipients Controls
		$('.carousel-controls').on('click', function() {

			var i = $(this).parents('.modals').find('.active').index() + 1;
			var t = $(this).parents('.modals').find('.modal').length;

			if ( $(this).hasClass('next') ) {
				console.log(i);
				if (i < t) {
					$('.modals').find('.active').removeClass('active').next('.modal').addClass('active');
				} else if (i == t) {
					$('.modals').find('.active').removeClass('active');
					$('.modal:first-child').addClass('active');
				}
			} else {
				console.log(i);
				if (i > 1) {
					$('.modals').find('.active').removeClass('active').prev('.modal').addClass('active');
				} else if (i == 1) {
					$('.modals').find('.active').removeClass('active');
					$('.modal:nth-child('+t+')').addClass('active');
				}
			}
		});

	$('.package').on('click', function() {
		$(this).toggleClass('open');
		$.scrollify.update();
	});
	$('.sponsor-scroller.right').on('click', function () {
	    var leftPos = $('div.packages-scroll').scrollLeft();
	    $("div.packages-scroll").animate({
	        scrollLeft: leftPos + $('.package').width()
	    }, 800);
	});
	$('.sponsor-scroller.left').on('click', function () {
	    var leftPos = $('div.packages-scroll').scrollLeft();  
	    $("div.packages-scroll").animate({
	        scrollLeft: leftPos - $('.package').width()
	    }, 800);
	});

	$('.gala-swiper').find('.swiper-slide').on('click', function() {
			$('.gala-window').toggleClass('show');
			$('body').toggleClass('noscroll');
	});

	$('.gala-container').children('.close').on('click', function() {
			$('.gala-window').removeClass('show');
			$('body').removeClass('noscroll');
	});

	$('.mediabox').on('click', function() {
			var d = $(this).data("gallery-item");
			$('.gala-gallery').addClass('show');
			$('.gala-media-' + d).addClass('show');
			$('.gala-window').addClass('noscroll');
			$('.gui').addClass('hide');
	});

	$('.gala-gallery').find('.controls').find('.close').on('click', function() {
		$('.gala-window').removeClass('noscroll');
		$('.gala-gallery').removeClass('show');
		$('.gala-media.show').removeClass('show')
		$('.gui').removeClass('hide');
	});

	$('.gala-gallery').find('.controls').find('.navbutton').on('click', function() {
		var itemClass = $('.gala-media.show').attr('class').split(' ')[1];
		var item = itemClass.split('-');
		var itemName = item[item.length-1];
		var itemNumber = Number(itemName.split("item")[1]);
		var mediaLength = $('.gala-media').length;
		if($(this).hasClass('next')) {
			if( itemNumber < mediaLength ) {
				$("." + itemClass).removeClass('show');
				$("." + itemClass).next().addClass('show');
			} else {
				$("." + itemClass).removeClass('show');
				$(".gala-media-item1").addClass('show');
			}
		} else {
			if( itemNumber > 1 ) {
				$("." + itemClass).removeClass('show');
				$("." + itemClass).prev().addClass('show');
			} else {
				$("." + itemClass).removeClass('show');
				$(".gala-media-item" + mediaLength).addClass('show');
			}
		}
	});

	$('#playintro').on('click', function() {
			$('.video-modal').toggleClass('show');
			$(".video-modal").find("iframe")[0].src += "&autoplay=1";
			$('body').toggleClass('noscroll');
	});

	$('.video-modal').find('.close').on('click', function() {
			$('.video-modal').toggleClass('show');
			$('body').removeClass('noscroll');
			$(".video-modal").find('iframe').attr("src", $(".video-modal").find('iframe').attr("src").split("&")[0]);
	});

	// $('.ad-modal').find('.close').on('click', function() {
	// 	if( adCount == 1 || adCount % 3 == 0 ) {
	// 		$("#ad").attr("src", $("#ad").attr("src").split("&")[0]);
	// 		$(this).parents('.ad-modal').toggleClass('show');
	// 	}
	// 	$('body').toggleClass('noscroll');
	// });



});