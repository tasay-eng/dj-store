jQuery(document).ready(function(){
    $('.benefit_slider').slick({
        prevArrow: '<div class="benefit_arrow prev_arrow"></div>',  
        nextArrow: '<div class="benefit_arrow next_arrow"></div>',
        slidesToShow: 1,
        initialSlide: 0,
        variableWidth: true,
        asNavFor: '.body_confer_slider',
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              centerPadding: '40px',
              centerMode: true,
              slidesToShow: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerPadding: '40px',
              centerMode: true,
              slidesToShow: 1
            }
          }
        ]
    });
});