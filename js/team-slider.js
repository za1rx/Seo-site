const teamSlider = new Swiper('.team__slider', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.team-button-next',
    prevEl: '.team-button-prev',
  },
  slidesPerView: 3,
});