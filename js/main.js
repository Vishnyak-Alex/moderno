$(function (){
     $(".rate-star").rateYo({
         rating: 5,
         starWidth: "12px",
         readOnly: true
      });
          
      wow = new WOW(
        {
        boxClass:     'wow',      // default
        animateClass: 'animate__animated', // default
        offset:       100,          // default
        mobile:       false,       // default
        live:         true        // default
      }
      )
      wow.init();

      $('.product-slider__inner').slick({
              dots: true,
              infinite: true,
              arrows: false,
              autoplay: true,
              autoplaySpeed: 900,
              slidesToShow: 4,
              slidesToScroll: 1,
              responsive: [
                {
                  breakpoint: 1900,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    autoplay: true,
                    autoplaySpeed: 900,
                    dots: true
                  }
                },
                {
                  breakpoint: 1441,
                  settings: {
                    slidesToShow: 2,
                    autoplay: true,
                    autoplaySpeed: 900,
                    slidesToScroll: 1,
                  }
                },
                {
                  breakpoint: 640,
                  settings: {
                    autoplay: true,
                    autoplaySpeed: 900,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                  }
                },
              ]
      });

      $(".js-range-slider").ionRangeSlider({
        type: "double",
        min: 0,
        max: 1000,
        from: 0,
        to: 600,
        prefix: "$"
    });

    $('.icon-th-list').on('click', function(){
      $('.product__item').addClass('list');
      $('.icon-th-list').addClass('active');
      $('.icon-th-large').removeClass('active');
    });
    $('.icon-th-large').on('click', function(){
      $('.product__item').removeClass('list');
      $('.icon-th-list').removeClass('active');
      $('.icon-th-large').addClass('active');
    });
    
    $('.product-one__tabs .tab, .settings__tabs .tab').on('click', function(event) {
      var id = $(this).attr('data-id');
        $('.product-one__tabs, .settings__tabs').find('.tab-item').removeClass('active-tab').hide();
        $('.product-one__tabs .tabs, .settings__tabs .tabs').find('.tab').removeClass('active');
        $(this).addClass('active');
        $('#'+id).addClass('active-tab').fadeIn();
        return false;
      });

      $('input[type="file"], select').styler();

     $('.menu__btn').on('click', function(){
      $('.menu__list').slideToggle();
     });

     $('.header__btn-menu').on('click', function(){
      $('.header__box').toggleClass('active');
     });

    var mixer = mixitup('.products__inner-box');

});