
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

    if (scroll >= 20) {
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

})
