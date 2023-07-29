
let mySwiper = new Swiper('.swiper-container.outer-sw', {
    direction: 'horizontal',
    loop: true,
    autoplay: {
        delay: 5000
      },
      speed: 500,
      slidesPerView: 1,
      effect: 'fade'
    //   on: {
    //     slideChange: function () {
    //       //슬라이드 바뀔때마다

    //     }
    //   }

  });



mySwiper.on('slideChangeTransitionStart', function () {

    $(".outer-sw").removeClass("on");
    $(".swiper-text").removeClass("on");

});

mySwiper.on('slideChangeTransitionEnd', function () {
    
    $(".outer-sw").addClass("on");
    $(".swiper-text").addClass("on");
 
});

// mySwiper.on('slideChangeTransitionEnd', function () {
    
//     var this_text = mySwiper.activeIndex;

//     $(".mv_0"+this_text).addClass("on");

    

// })



let mySwiper2 = new Swiper('.icon-sw', {
    direction: 'horizontal',
    loop: true,
    autoplay: {
        delay: 3000
      },
      speed: 500,
      slidesPerView: 3,
      effect: 'slide'

});


let mySwiper3 = new Swiper('.news-container', {
    direction: 'vertical',
    loop: true,
    autoplay: {
        delay: 3000
    },
    speed: 500,
    slidesPerView: 2,
    effect: 'slide'

});