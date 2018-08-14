    var swiper = new Swiper('.swiper-container', {

      slidesPerView: 3,
      spaceBetween: 30,
//    speed:1000,
//	  autoplay:true,
	  loop:true,
      navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });