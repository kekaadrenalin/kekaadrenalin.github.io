(function($){
    'use strict';

    // слайдер фото
    $('.slider-main').slick({
        slide: '.slide-item',
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.slider-main',
        arrows: false,
        focusOnSelect: true,
        variableWidth: true,
    });
    $('.preview--slider .slider').slick({
        slide: '.slide-item',
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
    });

})(jQuery);