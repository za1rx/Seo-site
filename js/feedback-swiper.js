const feedbackSwiper = new Swiper('.feedback .feedback__top .swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.feedback__swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.feedback__swiper-button-next',
    prevEl: '.feedback__swiper-button-prev',
  },
});
