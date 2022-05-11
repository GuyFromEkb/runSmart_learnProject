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

$(document).ready(function() {

    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
            .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
            .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });

    function TabInfo(item) {
        $(item).each(function(i) {
            $(this).on('click', function(e) {
                e.preventDefault();
                $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
                $('.catalog-item__content-info').eq(i).toggleClass('catalog-item__content-info_active');
            });

        });
    }

    TabInfo('.catalog-item__link');
    TabInfo('.catalog-item__link_back');

});

//  Modal Windows

$('[data-modal=consultation]').on('click', function() {
    $('.modal-window, #callBack ').fadeIn('slow');
});

$('.button_catalog').each(function(i) {
    $(this).on('click', function() {
        $('#order .modal-window__text').text($('.catalog-item__subtitle').eq(i).text());
        $('.modal-window, #order ').fadeIn('slow');
    });
});
$('.modal-window__close ').on('click', function() {
    $('.modal-window').fadeOut('slow');
});