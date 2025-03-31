var reviewSwiper = new Swiper(".reviewSwiper", {
  pagination: {
    el: ".ki-review-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  slidesPerView: 1,
  spaceBetween: 16,
  breakpoints: {
    767: {
      slidesPerView: 2,
      spaceBetween: 24,
      slidesPerGroup: 2,
    },
    991: {
      slidesPerView: 3,
      spaceBetween: 24,
      slidesPerGroup: 3,
    },
  },
});

var howSwiper = new Swiper(".howSwiper", {
  pagination: {
    el: ".ki-how-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  slidesPerView: 1,
});
