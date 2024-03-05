(function() {
  new Swiper('.content-reviews .swiper', {
    slidesPerView: 1.2,
    spaceBetween: 8,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    breakpoints: {
      768: {
        slidesPerView: 2.1
      },
      1024: {
        slidesPerView: 4
      }
    }
  });
})()
