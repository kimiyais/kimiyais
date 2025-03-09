var reviewSwiper = new Swiper(".reviewSwiper", {
  pagination: {
    el: ".ki-review-pagination",
    clickable: true,
  },
  rewind: true,
  slidesPerView: 1,
  spaceBetween: 16,
  breakpoints: {
    767: {
      slidesPerView: 2,
      spaceBetween: 25,
      slidesPerGroup: 2,
    },
    991: {
      slidesPerView: 3,
      spaceBetween: 40,
      slidesPerGroup: 3,
    },
  },
});
