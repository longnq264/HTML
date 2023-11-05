$(document).ready(function() {
    $('#slider .owl-carousel').owlCarousel({
        loop:true,
        // margin:10,
        nav:true,
        items: 3,
        responsive:{
            0:{
                items:1.4,
                margin: 8
            },
            767:{
                items:1
            },
            800: {
                items:3
            },
            1000:{
                items:3
            }
        }
    })
});
$(document).ready(function() {
    $('#slider2 .owl-carousel').owlCarousel({
        loop:true,
        margin: 10,
        nav:true,
        dots: false,
        items: 7,
        responsive:{
            0:{
                items:1.4
            },
            767:{
                items:1
            },
            800: {
                items:2,
                stagePadding: 100,
            },
            1000:{
                items:3,
                stagePadding: 100,
            }
        }
    })
});
$(document).ready(function() {
    $('#slider3 .owl-carousel').owlCarousel({
        loop:true,
        nav:true,
        dots: false,
        responsive:{
            0:{
                items:2
            },
            767:{
                items:2
            },
            800: {
                items:3,
            },
            1000:{
                items:6,
            }
        }
    })
});