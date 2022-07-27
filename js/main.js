// let selector = document.querySelectorAll('input[type="tel"]');
// let im = new Inputmask('+7 (999) 999-99-99');
// im.mask(selector);




$(function () {

    $('.menu__btn').on('click', function(){
        $('.menu__list').addClass('active');
    });

    $('.menu-close__btn').on('click', function(){
        $('.menu__list').removeClass('active');
    });



    $('.btn').on('click', function(){
        $('.modal').addClass('active');
    });

    $('.modal__inner-close').on('click', function(){
        $('.modal').removeClass('active');
    });

});
