(function($){
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

    $('.slider-map').slick({
        slide: '.slide-item',
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
    });

    // yandex-map
    if ($('#map-in-rent-offer').length > 0) {
        var myMap;
        ymaps.ready(initYaMap);

        function initYaMap() {
            myMap = new ymaps.Map('map-in-rent-offer', {
                center: [55.76, 37.64],
                zoom: 16,
                controls: [],
            });

            var circleLayout = ymaps.templateLayoutFactory.createClass('<div class="map-placemark_layout_container"><div class="map-circle_layout">1</div></div>');

            myPlacemark = new ymaps.Placemark([55.76, 37.64], {
                hintContent: '1',
                balloonContent: 'Столица России'
            }, {
                iconLayout: circleLayout,
                iconShape: {
                    type: 'Circle',
                    coordinates: [0, 0],
                    radius: 20
                }
            });

            myMap.geoObjects.add(myPlacemark);
        }
    }

})(jQuery);