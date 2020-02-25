//script for swipe
new Swiper('.slider', {
  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {
    768: {
      slidesPerView: 2
    },
    1025: {
      slidesPerView: 3,
      spaceBetween: 27
    }
  },
  loop: true,
  wrapperClass: 'slider__list',
  slideClass: 'slider__item',
  pagination: {
    el: '.slider__pagination',
    type: 'bullets',
    bulletClass: 'paginator__item',
    bulletActiveClass: 'paginator__item--active',
    clickable: true
  },
  navigation: {
    nextEl: '.slider__button--next',
    prevEl: '.slider__button--prev',
  },
});

//script for popup
$(function () {
  $('button.show_popup').click(function () {
    $('div.'+$(this).attr("rel")).fadeIn(500);
    $("body").append("<div id='overlay'></div>");
    $('#overlay').show().css({'filter' : 'alpha(opacity=80)'});
    return false;       
  }); 
  $('a.close').click(function () {
    $(this).parent().fadeOut(100);
    $('#overlay').remove('#overlay');
    return false;
  });
  $(document).mouseup(function (e){
    var div = $(".popup"); 
    if (!div.is(e.target)
        && div.has(e.target).length === 0) {
          div.hide(); // скрываем его
          $('#overlay').remove('#overlay');
        }
  });
});

//script for mask
$(function(){
  $(".popup-phone").mask("+7(999) 999-9999");
});

//script for burger
    let burger = document.querySelector('.menu-burger');
    let menu = document.querySelector('.menu');
    let close = document.querySelector('.menu-burger_close');


    burger.addEventListener('click', function(e){
      e.preventDefault();
      menu.classList.add('menu-burger_open');
    });

    close.addEventListener('click', function(e){
      e.preventDefault();
      menu.classList.remove('menu-burger_open');
    });

    $( '.menu a' ).on("click", function(){
      menu.classList.remove('menu-burger_open');
    });