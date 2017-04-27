(function($){
    'use strict';

    // слайдер фото
    $('.preview--slider .slider').slick({
        slide: '.slide-item',
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
    });

    $('.slider-map').slick({
        slide: '.slide-item',
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
    });

})(jQuery);