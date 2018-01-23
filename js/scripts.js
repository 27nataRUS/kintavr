$(function () {

    $('.slider-cartoons').owlCarousel({
        loop: true,
        smartSpeed: 700,
		nav:true,
		responsiveClass:true,
    responsive:{
        0:{
            items:2,
			margin: 15,
            nav:false
        },
        575:{
            items:3,
			margin: 15,
            nav:false
        },
        767:{
            items:3,
			margin: 20,
            nav:false
        },
        991:{
            items:5,
			margin: 30,
            nav:true
        },
        1200:{
            items:5,
			margin: 30,
            nav:true
        }
    }
    });

    var tplMovieHover = $('<div class="hover"><img src="/images/icon-watch.png"><span>Перейти к просмотру</span></div>');

    $('a.item-movie__movie').each(function () {
        $(this).find('.movie__image').append(tplMovieHover.clone());
    });

    $(document).ready(function () {
        $('.owl-carousel').each(function () {
            var top = ($(this).find('.movie__image').outerHeight() - $(this).find('.owl-nav').height()) / 2;
            $(this).find('.owl-next,.owl-prev').css({
                top: top,
                bottom: 'auto'
            });
        });
    });
});