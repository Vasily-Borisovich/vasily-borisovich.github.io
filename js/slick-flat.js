$('.slider-single').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-nav',

  responsive: [
    {
      breakpoint: 501,
        settings: {
          arrows: true,
          dots: true,
          nextArrow: '<button class="slick-next slick-arrow"><img src="./../img/svg/arrow-next.svg" alt="стрелка вправо" /></button>',
          prevArrow: '<button class="slick-prev slick-arrow"><img src="./../img/svg/arrow-prev.svg" alt="стрелка вправо" /></button>',
        }
    }
  ]
});

$('.slider-nav').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  asNavFor: '.slider-single',
  nextArrow: '<button class="slick-next slick-arrow"><img src="./../img/svg/arrow-next.svg" alt="стрелка вправо" /></button>',
  prevArrow: '<button class="slick-prev slick-arrow"><img src="./../img/svg/arrow-prev.svg" alt="стрелка вправо" /></button>',
  focusOnSelect: true,
});
