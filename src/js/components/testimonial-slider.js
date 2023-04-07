/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */
import Swiper, { Navigation, Pagination } from "swiper/bundle";

Swiper.use([Navigation, Pagination]);

const testiConatiner = document.querySelector(".testimonial__slider");
const testiSwiper = new Swiper(testiConatiner, {
  slidesPerView: 1,
  autoHeight: true,
  pagination: {
    el: ".testimonial__pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".testimonial__btn--next",
    prevEl: ".testimonial__btn--prev",
  },
});
