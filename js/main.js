$(document).ready(function(){
	var wHeight = $(window).height();
	var wHTwo = wHeight - (wHeight*0.2);
	var wWidth = $(window).width();

	$(window).scroll(function() {
		if($(window).scrollTop() > wHTwo) {
			$('.gui').find('.promo').addClass('show');
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
		$('.recipient').on('click', function() {
			var p = $(this).data('person');
			if ( p == "tba" ) {
				
			} else {
				$('.modals').find('.active').removeClass('active');
				$('#' + p).addClass('active');
				$('.modals').toggleClass('show');
				$('body').toggleClass('noscroll');
			}
		});

		$('.modals').find('.close').on('click', function() {
			$('.modals').toggleClass('show');
			$('body').toggleClass('noscroll');
		});

		// Recipients Controls
			$('.carousel-controls').on('click', function() {

				var i = $('.modals').find('.active').index() + 1;
				var t = $('.modal').length;

				if ( $(this).hasClass('next') ) {
					if (i < t) {
						$('.modals').find('.active').removeClass('active').next('.modal').addClass('active');
					} else if (i == t) {
						$('.modals').find('.active').removeClass('active');
						$('.modal:first-child').addClass('active');
					}
				} else {
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

	$('.sponsor-scroller.right').click(function () {
	    var leftPos = $('div.packages-scroll').scrollLeft();
	    console.log(leftPos); 
	    $("div.packages-scroll").animate({
	        scrollLeft: leftPos + $('.package').width()
	    }, 800);
	});

	$('.sponsor-scroller.left').click(function () {
	    var leftPos = $('div.packages-scroll').scrollLeft();
	    console.log(leftPos);    
	    $("div.packages-scroll").animate({
	        scrollLeft: leftPos - $('.package').width()
	    }, 800);
	});


});

// $( '.scrollable' ).on( 'mousewheel DOMMouseScroll', function ( e ) {
//     var e0 = e.originalEvent,
//         delta = e0.wheelDelta || -e0.detail;

//     this.scrollTop += ( delta < 0 ? 1 : -1 ) * 30;
//     e.preventDefault();
// });