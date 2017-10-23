
$(function () {

  // Declare the variable
  var elHtml = $('body');
  var toggles = $('.burger');
  var menuName = $('.menu__name');

  menuName.on("click", function() {
    toggles.closest(".menu").toggleClass("open");
    toggles.toggleClass('burger--close');
    elHtml.toggleClass("addClassBody");
  });

// This function adds the class that displays the menu
  toggles.on("click", function() {
    $(this).closest(".menu").toggleClass("open");
    $(this).toggleClass('burger--close');
    elHtml.toggleClass("addClassBody");
  });

// Declare the variable
  var toggleLink = $(".link");

// This function removes the class that displays the menu
  toggleLink.on("click", function() {
    $(this).closest(".menu").toggleClass("open");
    $('.burger').removeClass('burger--close');
  });

  $(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 20 && $('.menu').is('.main-menu')) {
      $('.menu').addClass('menu_scroll');
    } else {
      $('.menu').removeClass('menu_scroll');
    }
  });

  /*main slider*/
  $('.js-slider').slick({
    dots: false,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    arrows: false,
    autoplaySpeed: 5000,
    //autoplay: true
  });
  $(".js-slider-prev").on("click", function() {
    $('.js-slider').slick("slickPrev");
  });

  $(".js-slider-next").on("click", function() {
    $('.js-slider').slick("slickNext");
  });

  /*button to top*/

    var backToTop = $('.footer__button-top');

//smooth scroll to top
  backToTop.on('click', function(event){
    event.preventDefault();
    $('body,html').animate({
        scrollTop: 0 ,
      }, 700
    );
  });
  /*end button to top*/

  /*js gallery*/
  $('.js-gallery').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },

      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }

    ]
  });
  $(".js-gallery-prev").on("click", function() {
    $('.js-gallery').slick("slickPrev");
  });

  $(".js-gallery-next").on("click", function() {
    $('.js-gallery').slick("slickNext");
  });

});

ymaps.ready(init);
var myMap,
    myPlacemarkOne,
    myPlacemarkTwo,
    myPlacemarkThree,
    myPlacemarkFour,
    myPlacemarkFive,
    myPlacemarkSix;

function init(){
  myMap = new ymaps.Map("map", {
    center: [59.22556174, 39.88066250],
    zoom: 4.4
  });

  myMap.behaviors.disable([
    'scrollZoom',
    //'drag'
  ]);

  myMap.controls.remove('searchControl');

  myCollection = new ymaps.GeoObjectCollection({}, {
    iconLayout: 'default#image',
    iconImageHref: '/dist/images/placeholder-point.svg',
    iconImageSize: [64, 64],
    iconImageOffset: [-32, -67],
  });

  myPlacemarkOne = new ymaps.Placemark([56.78886213, 60.60339450], {
    balloonContentHeader: 'Склад в Екатеринбурге',
    balloonContentBody: 'Телефон: +7 (495) 664 38 15<br>620908, г. Екатеринбург, п. Шувакиш, ул. Зеленая, д. 50-а',
    balloonContentFooter: '"Управляющая компания Универсал М"',
    hintContent: 'Склад в Екатеринбурге'
  });

  myPlacemarkTwo = new ymaps.Placemark([55.75399400, 37.62209300], {
    balloonContentHeader: 'Главный офис в Москве',
    balloonContentBody: 'Телефон: +7 (495) 664 38 15<br>г. Москва, ул. Дружинниковская, д. 15, офис 416',
    balloonContentFooter: '"Управляющая компания Универсал М"',
    hintContent: 'Главный офис в Москве'
  });

  myPlacemarkThree = new ymaps.Placemark([64.58569845, 40.56009850], {
    balloonContentHeader: 'Обособленное подразделение в Архангельске',
    balloonContentBody: 'Телефон: +7 (495) 664 38 15<br>163000, г. Архангельск, пр. Троицкий, д. 52',
    balloonContentFooter: '"Управляющая компания Универсал М"',
    hintContent: 'Обособленное подразделение в Архангельске'
  });

  myPlacemarkFour = new ymaps.Placemark([56.39074864, 61.90680050], {
    balloonContentHeader: 'Обособленное подразделение в Каменск-Уральском',
    balloonContentBody: 'Телефон: +7 (495) 664 38 15<br>623400, Свердловская обл., г. Каменск-Уральский, ул. Карла-Маркса, д. 43, комната 207',
    balloonContentFooter: '"Управляющая компания Универсал М"',
    hintContent: 'Обособленное подразделение в Каменск-Уральском'
  });

  myPlacemarkFive = new ymaps.Placemark([48.83164723, 44.76705250], {
    balloonContentHeader: 'Обособленное подразделение в городе Волжкский',
    balloonContentBody: 'Телефон: +7 (495) 664 38 15<br>404130, Волгоградская обл., г. Волжский, 7-ая Автодорога, 6Б, офис 217',
    balloonContentFooter: '"Управляющая компания Универсал М"',
    hintContent: 'Обособленное подразделение в городе Волжкский'
  });
  myPlacemarkSix = new ymaps.Placemark([47.23916830, 38.88116500], {
    balloonContentHeader: 'Обособленное подразделение в городе Таганрог',
    balloonContentBody: 'Телефон: +7 (495) 664 38 15<br>347909, Ростовская обл., г. Таганрог, ул. Социалистическая, д.170',
    balloonContentFooter: '"Управляющая компания Универсал М"',
    hintContent: 'Обособленное подразделение в городе Таганрог'
  });

  myCollection.add(myPlacemarkOne).add(myPlacemarkTwo).add(myPlacemarkThree).add(myPlacemarkFour).add(myPlacemarkFive).add(myPlacemarkSix);

  myMap.geoObjects.add(myCollection);
}
