// 
var menu_item = document.querySelector('.menu-btn');
let menu_estado = false;
// Si es clickeado se añade la clase "open", sino, no se abrió
menu_item.addEventListener('click', () => {
    if(!menu_estado)
    {
        menu_item.classList.add('open');
        menu_estado = true;
    }
    else{
        menu_item.classList.remove('open');
        menu_estado = false;
    }
})


jQuery('document'). ready(function($){


    // Muestra el texto de Tecnico en Informática y Maestro Mayor
    var boton = $('.info1');
    carlo = $('.imgs a');

    boton.click(function(){

        if(carlo.hasClass('show2')){
            return
        }
        else{

            carlo.addClass('show2');
            porfa.removeClass('txth');
            porfa.addClass('bgo');
            texto.removeClass('textocent1');
            texto.addClass('textoa1');
            titulo1.removeClass('textoo');
            titulo1.addClass('tituloabierto');
            info1.removeClass('info1');
            info1.addClass('chauinfo');
        }
    });


    var boton2 = $('.info2'),
    carlo2 = $('.imgs ul'),
    porfa = $('.txth'),
    porfa2 = $('.txth2'),
    texto = $('.textocent1');
    texto2 = $('.textocent2');
    titulo1 = $('.textoo');
    titulo2 = $('.textoo2');
    info1 = $('.info1');
    info2 = $('.info2');

    boton2.click(function(){

        if(carlo2.hasClass('show3')){
    
            return
        
        }
        else{
    
            carlo2.addClass('show3');
            porfa2.removeClass('txth2');
            porfa2.addClass('bgo2');
            texto2.removeClass('textocent2');
            texto2.addClass('textoa2');
            titulo2.removeClass('textoo2');
            titulo2.addClass('tituloabierto2');
            info2.removeClass('info2');
            info2.addClass('chauinfo2');
            

        }
    
    
    });

    var botonc1 = $('.cerrar'),
    carlo = $('.imgs a');

    botonc1.click(function(){

    if(carlo.hasClass('show2')){

        carlo.removeClass('show2');
        porfa.removeClass('bgo');
        porfa.addClass('txth');
        texto.removeClass('textoa1');
        texto.addClass('textocent1');
        titulo1.removeClass('tituloabierto');
        titulo1.addClass('textoo');
        info1.removeClass('chauinfo');
        info1.addClass('info1');
    }

    });

    var botonc2 = $('.cerrar2'),
    carlo2 = $('.imgs ul');

    botonc2.click(function(){

    if(carlo2.hasClass('show3')){

        carlo2.removeClass('show3');
        porfa2.removeClass('bgo2');
        porfa2.addClass('txth2');
        texto2.removeClass('textoa2');
        texto2.addClass('textocent2');
        titulo2.removeClass('tituloabierto2');
        titulo2.addClass('textoo2');
        info2.removeClass('chauinfo2');
        info2.addClass('info2');
    }
    });
    //Aqui termina el añadir texto para las imagenes
});
