import '../main_confer/main_confer.js'

jQuery(document).ready(function(){
    $('.body_confer_slider').slick({
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        asNavFor: '.benefit_slider',
        arrows: false,
    })
});