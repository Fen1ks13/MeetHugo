$(function () {

  $('.works__inner').slick({
    nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
    prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
    prevArrow: null,
    // variableWidth: true,
  });

  $('.about__inner').slick({
    nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
    prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1
  });

  $('.header__menu-burger').on('click', function () {
    $('.header__menu ul').slideToggle()
  });
});

