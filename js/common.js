$(document).ready(function(){
    console.log('common_js_start')
    // common_js_start



    AOS.init({
        duration: 1000,
        // disable: function () {
        //     var maxWidth = 767;
        //     return window.innerWidth < maxWidth;
        // }
    });    

    
    // const scroll = new LocomotiveScroll({
    //     el: document.querySelector('[data-scroll-container]'),
    //     smooth: true,
    //     repeat: true,
    //     getDirection: true,
    //     lerp:0.035,
    // });



    var Mainswiper = new Swiper('.main_visual_section', {
        effect: "fade",
        slidesPerView: 1,
        centeredSlides: true,
        loop: true,
        loopAdditionalSlides : 1,
        
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        
        touchMoveStopPropagation : true,
   
        // on: {
        //     init: function () {
        //         $('.swiper-progress-bar').removeClass('animate');
        //         $('.swiper-progress-bar').removeClass('active');
        //         $('.swiper-progress-bar').eq(0).addClass('animate');
        //         $('.swiper-progress-bar').eq(0).addClass('active');
        //     },
        //     slideChangeTransitionStart: function () {
        //         $('.swiper-progress-bar').removeClass('animate');
        //         $('.swiper-progress-bar').removeClass('active');
        //         $('.swiper-progress-bar').eq(0).addClass('active');
        //     },
        //     slideChangeTransitionEnd: function () {
        //         $('.swiper-progress-bar').eq(0).addClass('animate');
        //     },
        // }
    });


    
    var main_slide_01 = new Swiper('.main_silde_01 .swiper-container', {
        slidesPerView: 2.75,
        // centeredSlides: true,
        loop: true,
        loopAdditionalSlides : 1,
        // autoplay: {
        //     delay: 3000,
        //     disableOnInteraction: false,
        // },
        spaceBetween : 20, 
        touchMoveStopPropagation : true,

        navigation: {
            nextEl: '.swiper_next_02',
            prevEl: '.swiper_prev_02',
        },
        breakpoints : {
            "1100" :{
                slidesPerView: 2,
            },
        }

    });




    function fullMenu () {
        let full_menu_bar = $('#full_menu_bar'), 
        full_menu_view = $('#full_menu_view')

        full_menu_bar.click(function(){
            $(full_menu_view).toggleClass('active');
            
            if(full_menu_view.hasClass('active')){
                full_menu_bar.text('close')
            } else {
                full_menu_bar.text('menu')
            }
        });
    }

    fullMenu();


 


    function contents() {
        var scroll = $(window).scrollTop()
        var windowHeight = $(window).height();

        $('.fadeout').each(function() {
            var posTop = $(this).offset().top;

            if (scroll + windowHeight >= posTop) {
                $(this).addClass('move');
            } else {
                $(this).removeClass('move');
            }
        })
    }

    $(window).scroll(contents);



    // common_js_end
    console.log('common_js_end')
});

