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
    

    var boton = $('.info1'),
        carlo = $('.imgs a');

    boton.click(function(){

        if(carlo.hasClass('show2')){

            return
        
        }
        else{

            carlo.addClass('show2');
            porfa.removeClass('txth');
            porfa.addClass('bgo');
        }


    });


    var boton2 = $('.info2'),
    carlo2 = $('.imgs ul');
    porfa = $('.txth')

     boton2.click(function(){

        if(carlo2.hasClass('show3')){
    
            return
        
        }
        else{
    
            carlo2.addClass('show3');
            porfa.removeClass('txth2');
            porfa.addClass('bgo2');
        }
    
    
    });
    

    var botonc1 = $('.cerrar'),
    carlo = $('.imgs a');

    botonc1.click(function(){

    if(carlo.hasClass('show2')){

        carlo.removeClass('show2');
        porfa.removeClass('bgo');
        porfa.addClass('txth')
    }


});

});
