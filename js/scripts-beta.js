'use strict';

$(function () {

    $('.slider-main').owlCarousel({
        items: 1,
        nav: true,
        loop: true,
        smartSpeed: 700
    });

    $('.slider-movies').owlCarousel({
        items: 1,
        nav: true,
        loop: true,
        smartSpeed: 700,
        margin: 30
    });

    $('.slider-cartoons, .slider-serials').owlCarousel({
        items: 5,
        nav: true,
        loop: true,
        smartSpeed: 700,
        margin: 30
    });

    var tplMovieHover = $('<div class="hover"><img src="/bundles/app/images/icon-watch.png"><span>Перейти к просмотру</span></div>');

    $('a.movie').each(function () {
        $(this).find('.image').append(tplMovieHover.clone());
    });

    $(document).ready(function () {
        $('.slider-gray-arrows').each(function () {
            var top = ($(this).find('.image').outerHeight() - $(this).find('.owl-prev').height()) / 2;
            $(this).find('.owl-next,.owl-prev').css({
                top: top,
                bottom: 'auto'
            });
        });
    });
});