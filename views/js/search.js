/**
 * Created by nico on 15/06/15.
 */
$(document).ready(function(){

    $(window).resize(function(){

        $('#searcher').css({
            position:'absolute',
            left: ($(window).width() - $('#searcher').outerWidth())/2,
            top: ($(window).height() - $('#searcher').outerHeight())/2
        });

    });

// Ejecutamos la función
    $(window).resize();

});