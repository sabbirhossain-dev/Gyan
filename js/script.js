//fixed menu start//

$(window).scroll(function () {
    $scrollamout = $(window).scrollTop();

    if ($scrollamout > 1000) {
        $(".menu").addClass("sticky")
    } else {
        $(".menu").removeClass("sticky")
    }


    //fixed menu start//



    //bottom to top button part start//

    if ($scrollamout > 1500) {
        $(".btop").fadeIn()
    } else {
        $(".btop").fadeOut()
    }
})


$(".btop").click(function () {
    $("html,body").animate({
        scrollTop: 0
    }, 2000)
})

//bottom to top button part end//



//banner part start//

$('#banner-part').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<i class="fa fa-angle-left prev" aria-hidden="true"></i>',
    nextArrow: '<i class="fa fa-angle-right next" aria-hidden="true"></i>',
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 576,
            settings: {
                dots: true,
                arrows: false,
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
});

//banner part end//



//counter part start//

$('.counter').counterUp({
    delay: 10,
    time: 1000
});

//counter part end//



//about part start//

$('.img-slider').slick({
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    //  responsive: [
    //    {
    //      breakpoint: 1024,
    //      settings: {
    //        slidesToShow: 3,
    //        slidesToScroll: 3,
    //        infinite: true,
    //        dots: true
    //      }
    //    },
    //    {
    //      breakpoint: 600,
    //      settings: {
    //        slidesToShow: 2,
    //        slidesToScroll: 2
    //      }
    //    },
    //    {
    //      breakpoint: 480,
    //      settings: {
    //        slidesToShow: 1,
    //        slidesToScroll: 1
    //      }
    //    }
    //    // You can unslick at a given breakpoint now by adding:
    //    // settings: "unslick"
    //    // instead of a settings object
    //  ]
});


//about part end//


//course part start//


$('.courses-slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: 0,
    prevArrow: '<i class="fa fa-angle-left prev" aria-hidden="true"></i>',
    nextArrow: '<i class="fa fa-angle-right next" aria-hidden="true"></i>',
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 576,
            settings: {
                arrows: false,
                dots:true,
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
});


//course part end//



//testimonial part start//


$('.leftt').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<i class="fa fa-angle-left prev" aria-hidden="true"></i>',
    nextArrow: '<i class="fa fa-angle-right next" aria-hidden="true"></i>',
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
});


//testimonial part end//





//footer-slider part end//

$('.footer-slider').slick({
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 300,
    slidesToShow: 7,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: 0,
    arrows: false,

      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 576,
          settings: {
              autoPlay:true,
            slidesToShow: 3,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
});


//footer-slider part end//
