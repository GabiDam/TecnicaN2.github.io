jQuery('document'). ready(function($){

    var menupress = $('.menu-nav');
    var menu = $('.nvavigation ul');

    menupress.click(function(){

        if(menu.hasClass('show')){

            menu.removeClass('show');

        }
        else{

            menu.addClass('show');
            
        }


    });
    
});


