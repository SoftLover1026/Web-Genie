$(function() {
    
    "use strict";
    
    //===== Prealoder
    
    $(window).on('load', function(event) {
        $('#preloader').delay(500).fadeOut(500);
    });

    //===== load web-development page from service
    var queryString = window.location.search;
    var urlParams = new URLSearchParams(queryString);
    var services = urlParams.get('services');

    if (services) {
        $(".select-services .nav-item").removeClass('active');
        $(".select-services .nav-item button[data-target='" + services + "']").parent().addClass('active');

        switch (services) {
            case 'web-development':
                $(".services-title").text('Web Development');
                break;
            case 'web-application':
                $(".services-title").text('Web Application');
                break;
            default:
                $(".services-title").text('Web Designing');
                break;
        }

        $('#' + services).removeClass('hidden');
        $('#' + services).siblings().addClass('hidden');
    }
    

    //===== Collapse Button
    var b = $(".collapse-btn");

    b.click(function() {
        var w = $(this).siblings('#wrapper');
        var l = w.find('#list');
        var spanTag = $(this).find("span");
        if(w.hasClass('open')) {
            w.removeClass('open');
            w.height(0);
            spanTag.text("+");
        } else {
            w.addClass('open');
            w.height(l.outerHeight(true));
            spanTag.text("-");
        }
    });
    
    
    //===== Mobile Menu 
    
    $(".navbar-toggler").on('click', function() {
        $(this).toggleClass('active');
        $(".navbar-collapse").toggleClass("show");
    });
    
    $(".navbar-nav a").on('click', function() {
        $(".navbar-toggler").removeClass('active');
    });

    $(".select-services .nav-item button").on('click', function() {
        const dataTargetValue = $(this).attr('data-target');
        var queryString = "?services=" + encodeURIComponent(dataTargetValue);
        var fullUrl = "web-development.html" + queryString;

        window.location.href = fullUrl;
    })
    
    $("#select-services-mask div").on('click', function () {
        const dataTargetValue = $(this).attr('data-target');

        var queryString = "?services=" + encodeURIComponent(dataTargetValue);
        var fullUrl = "web-development.html" + queryString;

        window.location.href = fullUrl;
    })
    
    //===== close navbar-collapse when a  clicked
    
    $(".navbar-nav a").on('click', function () {
        $(".navbar-collapse").removeClass("show");
    });
    
    
    //===== Sticky
    
    $(window).on('scroll',function(event) {    
        var scroll = $(window).scrollTop();
        if (scroll < 10) {
            $(".navigation").removeClass("sticky");
        }else{
            $(".navigation").addClass("sticky");
        }
    });
    
    
    //===== Section Menu Active
    
    // var scrollLink = $('.page-scroll');
    //     // Active link switching
    //     $(window).scroll(function() {
    //     var scrollbarLocation = $(this).scrollTop();

    //     scrollLink.each(function() {

    //       var sectionOffset = $(this.hash).offset().top - 90;

    //       if ( sectionOffset <= scrollbarLocation ) {
    //         $(this).parent().addClass('active');
    //         $(this).parent().siblings().removeClass('active');
    //       }
    //     });
    // });
    
    
    //====== Magnific Popup
    
    $('.video-popup').magnificPopup({
        type: 'iframe'
        // other options
    });
    
    
    //===== Slick

    $('.testimonial-active').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 800,
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                }
            }
        ]
    });
    
    
    //===== Back to top
    
    // Show or hide the sticky footer button
    $(window).on('scroll', function(event) {
        if($(this).scrollTop() > 600){
            $('.back-to-top').fadeIn(200)
        } else{
            $('.back-to-top').fadeOut(200)
        }
    });
    
    
    //Animate the scroll to yop
    $('.back-to-top').on('click', function(event) {
        event.preventDefault();
        
        $('html, body').animate({
            scrollTop: 0,
        }, 1500);
    });
    
    
    //===== 
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
});