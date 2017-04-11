(function($){
    // переключение tab-ов для how-block
    $('#how-block--tabs a').click(function(e){
        e.preventDefault();
        $(this).tab('show');
    });
    
    // переключение tab-ов для current-offers
    $('#current-offers--tabs a').click(function(e){
        e.preventDefault();
        $(this).tab('show');
    });
    
})(jQuery);