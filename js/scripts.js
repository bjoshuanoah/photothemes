
var resizeSlideshow = function () {
	var window_height = window.innerHeight,
		slideshow = $('#main_photo_container'),
		slideshow_height = slideshow.innerHeight();
	if (slideshow_height > window_height) {
		slideshow.attr('style', 'max-height:' + window_height + 'px');
	}
}

resizeSlideshow();

$(window).resize(function () {
	$('#main_photo_container').attr('style', null);
	resizeSlideshow();
})

var checkScrollButton = function () {
	var button = $('.scroll_down'),
		position_from_top = button.offset().top;
	if (button.hasClass('up')) {
		$('body').animate({
			scrollTop: 0
		}, 800);
		button.removeClass('up');
		button.text('Down');
	} else {
		button.addClass('up');
		$('body').animate({
			scrollTop: position_from_top
		}, 800);
		button.text('Up');
	}
}

// top_blur = 4
// $('#slideshow').attr('style', '-webkit-filter: blur(' + top_blur + 'px); -moz-filter: blur(' + top_blur + 'px);filter: blur(' + top_blur + 'px)');

$(window).scroll(function () {
	var distance_from_top = $(window).scrollTop(),
		top = distance_from_top/2,
        // top_blur = Math.ceil(top / 60) - 1,
		button = $('.scroll_down');
        // if (top_blur > 4) {
        //     top_blur = 4;
        // }
	$('#slideshow img').attr('style', '-webkit-transform: translate(0,' + top + 'px);-moz-transform: translate(0,' + top + 'px);transform: translate(0,' + top + 'px);');
	// $('#slideshow').attr('style', '-webkit-filter: blur(' + top_blur + 'px); -moz-filter: blur(' + top_blur + 'px);filter: blur(' + top_blur + 'px)');
	if (distance_from_top > (button.offset().top / 2)) {
		button.addClass('up');
	} else {
		button.removeClass('up');
	}
})

$('.scroll_down').on('click', function (e) {
	var button = $(this),
		position_from_top = button.offset().top;
	if (button.hasClass('up')) {
		$('body, html').animate({
			scrollTop: 0
		}, 800);
	} else {
		$('body, html').animate({
			scrollTop: position_from_top
		}, 800);
	}
});
