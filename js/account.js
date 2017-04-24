(function($){
    // переключение tab-ов для menu
    // $('#menu a').click(function(e){
        // e.preventDefault();
        // $(this).tab('show');
    // });

    // переключение tab-ов для #related-queries--tabs
    $('#related-queries--tabs').find('a').click(function(e){
        e.preventDefault();
        $(this).tab('show');
    });

    // переключение tab-ов для #related-queries--tabs
    $('#related-needs--tabs').find('a').click(function(e){
        e.preventDefault();
        $(this).tab('show');
    });
    
    // yandex-map
    if ($('#map-in-left-menu').length > 0) {
        var myMap;
        ymaps.ready(initYaMap);
        
        function initYaMap() { 
            myMap = new ymaps.Map('map-in-left-menu', {
                center: [55.76, 37.64],
                zoom: 7,
                controls: []
            });

            var myPlacemark = new ymaps.Placemark([55.76, 37.64], {
                hintContent: '1',
                balloonContent: 'Столица России'
            });

            myMap.geoObjects.add(myPlacemark);
        }
    }

    // слайдер фото
    $('.slider-item').slick({
        slide: '.slide-item',
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
    });
    
})(jQuery);