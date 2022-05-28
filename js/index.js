import Swiper, { Navigation, Pagination } from "swiper";
import "swiper/swiper.min.css";
import "swiper/modules/pagination/pagination.min.css";
import "swiper/modules/navigation/navigation.min.css";

/* Initialize Swiper */
const initializeSwiper = () => {
  const swiper = new Swiper(".swiper", {
    spaceBetween: 200,
    loop: true,
    modules: [Navigation, Pagination],
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
};

initializeSwiper();
