"use strict";

var slider = tns({
    container: '.carusel__inner',
    items: 1,
    speed: 1400,
    loop: true,
    rewind: true,
    nav: false,
    controls: false

});

document.querySelector('.carusel__prev-btn').onclick = function() {
    slider.goTo('prev');
};
document.querySelector('.carusel__next-btn').onclick = function() {
    slider.goTo('next');
};

// $(document).ready(function() {
//     $('.carusel__inner').slick({
//         prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.svg"></button>',
//         nextArrow: '<button type="button" class="slick-next"><img src="icons/right.svg"></button>',
//         speed: 1200

//     });
// });