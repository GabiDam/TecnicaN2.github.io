jQuery('document'). ready(function($){
    /**/
    var menupress = $('.menu-nav'),
        menu = $('.navigation ul');

    menupress.click(function(){

        if(menu.hasClass('show')){

            menu.removeClass('show');
            
        }
        else{

            menu.addClass('show');
            
        }


    });
    

    var boton = $('info1'),
    menu = $('.navigation ul');

boton.click(function(){

    if(menu.hasClass('show')){

        menu.removeClass('show');
        
    }
    else{

        menu.addClass('show');
        
    }


});

});
