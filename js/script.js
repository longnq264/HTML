$(document).ready(function() {
    $('#slider-banner .owl-carousel').owlCarousel({
        loop:true,
        dots:true,
        items: 1,
    })
});
$(document).ready(function() {
    $('#slider .owl-carousel').owlCarousel({
        loop:true,
        margin:8,
        nav:false,
        dots: true,
        items: 3,
        responsive:{
            0:{
                items:1.4,
                margin: 8,
                // nav:false,
            },
            767:{
                items:1,
                margin: 8,
                // nav:false,
            },
            800: {
                items:3,
                margin: 10
            },
            1000:{
                items:3,
                margin: 10
            }
        }
    })
});
$(document).ready(function() {
    $('#slider2 .owl-carousel').owlCarousel({
        loop:true,
        nav:false,
        dots: false,
        items: 7,
        responsive:{
            0:{
                items:1.4,
                margin:8,
                dots: true,
            },
            767:{
                items:2.5,
                margin:8,
                dots: true,
            },
            800: {
                items:3,
                stagePadding: 100,
                margin:14,
                dots: false
            },
            1000:{
                items:3,
                stagePadding: 100,
                margin: 14,
                nav: true
            }
        }
    })
});
$(document).ready(function() {
    $('#slider3 .owl-carousel').owlCarousel({
        loop:true,
        nav:false,
        dots: false,
        responsive:{
            0:{
                items:2
            },
            560: {
                items:3
            },
            767:{
                items:3
            },
            800: {
                items:4
            },
            1000:{
                items:6,
            }
        }
    })
});

const btnOpen = () => {
    const x = true
    const text = document.getElementById('text-js')
    // e.prevenDefault()
    text.style.display = "block"
}
const btnOpen2 = () => {
    const x = true
    const text = document.getElementById('text-js')
    // e.prevenDefault()
    text.style.display = "block"
}

$(document).ready(function() {
    $('#slider-donna .owl-carousel').owlCarousel({
        loop:false,
        nav:false,
        dots: false,
        items: 9,
        responsive: {
            0: {
                margin:10
            },
            400: {
                margin: 10
            },
            1000: {
                margin: 35.5,
            }
        }
    })
});