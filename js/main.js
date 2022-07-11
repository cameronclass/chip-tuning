new Swiper(".projects__slider", {
  navigation: {
    nextEl: ".projects .swiper-button-next",
    prevEl: ".projects .swiper-button-prev",
  },
  pagination: {
    el: ".projects .swiper-pagination",
  },
  loop: true,
  keyboard: true,
});

new Swiper(".blog__slider", {
  slidesPerView: 3,
  spaceBetween: 30,
  navigation: {
    nextEl: ".blog .swiper-button-next",
    prevEl: ".blog .swiper-button-prev",
  },
  pagination: {
    el: ".blog .swiper-pagination",
  },
  loop: true,
  keyboard: true,
});

new Swiper(".reviews__slider", {
  slidesPerView: 2,
  spaceBetween: 30,
  navigation: {
    nextEl: ".reviews .swiper-button-next",
    prevEl: ".reviews .swiper-button-prev",
  },
  pagination: {
    el: ".reviews .swiper-pagination",
  },
  loop: true,
  keyboard: true,
});

new Swiper(".videos__slider", {
  slidesPerView: 3,
  spaceBetween: 30,
  navigation: {
    nextEl: ".videos .swiper-button-next",
    prevEl: ".videos .swiper-button-prev",
  },
  pagination: {
    el: ".videos .swiper-pagination",
  },
  loop: true,
  keyboard: true,
});
