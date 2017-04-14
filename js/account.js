(function($){
    // переключение tab-ов для menu
    // $('#menu a').click(function(e){
        // e.preventDefault();
        // $(this).tab('show');
    // });
    
    // yandex-map
    var myMap;
    ymaps.ready(initYaMap);
    
    function initYaMap() { 
        myMap = new ymaps.Map('map-in-left-menu', {
            center: [55.76, 37.64],
            zoom: 7,
            controls: [],
        });
        
        myPlacemark = new ymaps.Placemark([55.76, 37.64], { 
            hintContent: '1', 
            balloonContent: 'Столица России' 
        });

        myMap.geoObjects.add(myPlacemark);
    }
    
})(jQuery);