
$(function () {
  plugins = {
    selectFilter: $("select"),
  };

  /**
   * Select2
   * @description Enables select2 plugin
   */
  if (plugins.selectFilter.length) {
    var i;
    for (i = 0; i < plugins.selectFilter.length; i++) {
      var select = $(plugins.selectFilter[i]);

      select.select2({
        theme: select.attr('data-custom-theme') ? select.attr('data-custom-theme') : "bootstrap"
      }).next().addClass(select.attr("class").match(/(input-sm)|(input-lg)|($)/i).toString().replace(new RegExp(",", 'g'), " "));
    }
  }

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

  /*modal*/
  var modalVerticalCenterClass = ".modal";
  function centerModals($element) {
    var $modals;
    if ($element.length) {
      $modals = $element;
    } else {
      $modals = $(modalVerticalCenterClass + ':visible');
    }
    $modals.each( function(i) {
      var $clone = $(this).clone().css('display', 'block').appendTo('body');
      var top = Math.round(($clone.height() - $clone.find('.modal-content').height()) / 2);
      top = top > 0 ? top : 0;
      $clone.remove();
      $(this).find('.modal-content').css("margin-top", top);
    });
  }
  $(modalVerticalCenterClass).on('show.bs.modal', function(e) {
    centerModals($(this));
  });
  $(window).on('resize', centerModals);

  /*input mask*/
  $(".modal-form__input_mask").inputmask("+7(999)999-99-99");
  $(".form-main__input_mask").inputmask("+7(999)999-99-99");


  /*validate popup form*/
  $('.modal-form__form').validate({
    submitHandler: function(form){
      var form = document.forms.sendformpopup,
        formData = new FormData(form),
        xhr = new XMLHttpRequest();

      xhr.open("POST", "/send-main-popup.php");

      xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
          if(xhr.status == 200) {
            $("#formMain")[0].reset();
            //$('.upload-text-reset').text('Прикрепить файл');
            $(".modal-form__answer").html('<div class="form-main__form-tanks">Заявка успешно отправлена!<div>');
            //$(".form-main__answer-button").text('Сообщение отправлено!');

            //setTimeout(function () {
            //setTimeout($(".form-main__answer-button").text(''), 3000);
            //}, 3000);
          } else {
            $(".modal-form__answer").html('<div class="form-main__form-tanks">Что то пошло не так!<div>');
          }
        }
      };
      xhr.send(formData);
    },
    rules: {
      name: {
        required: true,
      },
      phone: {
        required: true
      }

    },
    messages: {
      name: {
        required: "Введите Ваше имя"
      },
      phone: {
        required: "Введите Ваш телефон"
      }
    }
  });
  $('.modal-form-partner__form').validate({
    submitHandler: function(form){
      var form = document.forms.sendFormPopupPartner,
        formData = new FormData(form),
        xhr = new XMLHttpRequest();

      xhr.open("POST", "/send-main-partner.php");

      xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
          if(xhr.status == 200) {
            $("#sendFormPopupPartner")[0].reset();
            //$('.upload-text-reset').text('Прикрепить файл');
            $(".modal-form-partner__answer").html('<div class="form-main__form-tanks">Заявка успешно отправлена!<div>');
            //$(".form-main__answer-button").text('Сообщение отправлено!');

            //setTimeout(function () {
            //setTimeout($(".form-main__answer-button").text(''), 3000);
            //}, 3000);
          } else {
            $(".modal-form-partner__answer").html('<div class="form-main__form-tanks">Что то пошло не так!<div>');
          }
        }
      };
      xhr.send(formData);
    },
    rules: {
      name: {
        required: true,
      },
      contacts: {
        required: true
      }

    },
    messages: {
      name: {
        required: "Введите Ваше имя или компанию"
      },
      contacts: {
        required: "Введите Ваш email или телефон"
      }
    }
  });
  /*validate contacts form*/
  $('.form').validate({
    rules: {
      name: {
        required: true,
      },
      contact: {
        required: true,
      }
    },
    messages: {
      name: {
        required: "Введите Ваше имя"
      },
      contact: {
        required: "Введите Ваши контакты"
      }
    }
  });

});

/*validate form-main__form*/
$('.form-main').validate({
  submitHandler: function(form){
    var form = document.forms.formMain,
      formData = new FormData(form),
      xhr = new XMLHttpRequest();

    xhr.open("POST", "/send-main.php");

    xhr.onreadystatechange = function() {
      if (xhr.readyState == 4) {
        if(xhr.status == 200) {
          $("#formMain")[0].reset();
          //$('.upload-text-reset').text('Прикрепить файл');
          $(".form-main__answer").html('<div class="form-main__form-tanks">Заявка успешно отправлена!<div>');
          //$(".form-main__answer-button").text('Сообщение отправлено!');

          //setTimeout(function () {
          //setTimeout($(".form-main__answer-button").text(''), 3000);
          //}, 3000);
        } else {
          $(".form-main__answer").html('<div class="form-main__form-tanks">Что то пошло не так!<div>');
        }
      }
    };
    xhr.send(formData);
  },
  rules: {
    name: {
      required: true,
    },
    email: {
      required: true,
      email: true
    },
    phone: {
      required: true
    }

  },
  messages: {
    name: {
      required: "Введите Ваше имя"
    },
    email: {
      required: "Введите адрес электронной почты",
      email: "Не корректный адрес"
    },
    phone: {
      required: "Введите Ваш телефон"
    }
  }
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
    iconImageHref: 'dist/images/placeholder-point.svg',
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
