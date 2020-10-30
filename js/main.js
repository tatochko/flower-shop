$(function(){

    $('.slider').slick({
        infinite: true,
        slidesToShow: 4,
        arrows: false,
        speed: 2000,
        slidesToScroll: 1,
        autoplay: true,
        responsive: [
            {
            breakpoint: 1024,
            settings: {
                infinite: true,
                slidesToShow: 3,
                arrows: false,
                speed: 2000,
                slidesToScroll: 1,
                autoplay: true,
            }
            },
            {
            breakpoint: 600,
            settings: {
                infinite: true,
                slidesToShow: 2,
                arrows: false,
                speed: 2000,
                slidesToScroll: 1,
                autoplay: true,
            }
            },
            {
            breakpoint: 480,
            settings: {
                infinite: true,
                slidesToShow: 1,
                arrows: false,
                speed: 2000,
                slidesToScroll: 1,
                autoplay: true,
            }
            }
            ]
    });

////////////////////////////////////////////////////////// burger
    var Menu = {

        el: {
        ham: $('.header__btn'),
        menuTop: $('.header__btn-top'),
        menuMiddle: $('.header__btn-middle'),
        menuBottom: $('.header__btn-bottom')
        },
        
        init: function() {
        Menu.bindUIactions();
        },
        
        bindUIactions: function() {
        Menu.el.ham
            .on(
                'click',
            function(event) {
            Menu.activateMenu(event);
            event.preventDefault();
            }
        );
        },
        
        activateMenu: function() {
        Menu.el.menuTop.toggleClass('header__btn-top-click');
        Menu.el.menuMiddle.toggleClass('header__btn-middle-click');
        Menu.el.menuBottom.toggleClass('header__btn-bottom-click'); 
        }
    };
    
    Menu.init();


    $('.header__btn-global').on('click', function() {
        $('.menu ul').slideToggle();

    });


});