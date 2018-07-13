$(document).ready(function () {
    function click_alert() {
        alert("Mnpix Engine");
    }

    //--- custom header
    var hdr = $('header.component--navigation-bar').height();
    $(window).scroll(function () {
        if ($(this).scrollTop() < hdr) {
            $('header.pinned.transparent').removeClass('scroll');
        } else {
            $('header.pinned.transparent').addClass('scroll');
        }
    });
    if ($('header.transparent').length == 1 && $('header.top').length == 0) {
        $('header.pinned').closest('.page').css("margin-top", hdr);
    }

    $('.selectpicker').selectpicker({});

    $(document).on('click', 'nav.navbar .dropdown-menu', function (e) {
        e.stopPropagation();
    });

    $(".menu-hamburger").click(function (e) {
        e.preventDefault();
        $(".page").toggleClass("active");
    });
    $("a[href^='#'].goto").click(function (e) {
        // prevent default anchor click behavior
        e.preventDefault();

        // store hash
        var hash = this.hash;

        // animate
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 600, function () {

            // when done, add hash to url
            // (default click behaviour)
            window.location.hash = hash;
        });
    });

    $(".spoiler .trigger").click(function () {
        $(this).parent().next().collapse('toggle');
    });

    function makeSlide(targetClass, type, item) {
        var objClass = $("." + targetClass);
        if (objClass.hasClass(targetClass)) {
            var options = {
                loop                 : true,
                margin               : 10,
                responsiveClass      : true,
                nav                  : true,
                navText              : ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
                lazyLoad             : true,
                responsiveRefreshRate: 100
            };
            if (type === "auto") {
                options.autoplay        = true;
                options.autoplayTimeout = 1000;
            }
            if (item > 1) {
                options.nav        = false;
                options.responsive = {
                    0  : {
                        items: 1
                    },
                    760: {
                        items: Math.round(item / 2)
                    },
                    992: {
                        items: item
                    }
                };
            } else {
                options.items = 1;
            }
            objClass.owlCarousel(options);
        }
    }

    makeSlide("owl-carousel--1", "manual", null);
    makeSlide("owl-carousel--2", "manual", null);
    makeSlide("owl-carousel--3", "manual", 3);

});
