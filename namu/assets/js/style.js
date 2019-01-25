$(document).ready(function () {
    /*========================================*/
    /* START: Click Scroll to target */
    /*========================================*/
    $(".nav-Home").click(function() {
        $('html,body').animate({
            scrollTop: $(".header").offset().top},
        'slow');
    });

    $(".nav-About").click(function() {
        $('html,body').animate({
            scrollTop: $("#aboutUs").offset().top},
        'slow');
    });

    $(".nav-Showroom").click(function() {
        $('html,body').animate({
            scrollTop: $("#showRoom").offset().top},
        'slow');
    });

    $(".nav-Showroom").click(function() {
        $('html,body').animate({
            scrollTop: $("#showRoom").offset().top},
        'slow');
    });

    $(".nav-Product").click(function() {
        $('html,body').animate({
            scrollTop: $("#productQuality").offset().top},
        'slow');
    });

    $(".nav-Shop").click(function() {
        $('html,body').animate({
            scrollTop: $("#placeShowroom").offset().top},
        'slow');
    });

    $(".nav-Contact").click(function() {
        $('html,body').animate({
            scrollTop: $("#contactUs").offset().top},
        'slow');
    });

    /*========================================*/
    /* START: Slick Carousel */
    /*========================================*/
    $('.slider').slick({
        infinite: false,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });


    $("#menu-toggle").click(function(e) {
        console.log('ini toggle');
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
    });
});

/*========================================*/
/* START: SCROLL NAVBAR */
/*========================================*/
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-100px";
    }
}