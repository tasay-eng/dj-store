jQuery(document).ready(function(){
    $('.benefit_slider').slick({
        slidesToShow: 1,
        initialSlide: 0,
        variableWidth: true,
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