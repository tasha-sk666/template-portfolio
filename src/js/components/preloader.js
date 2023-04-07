import disableScroll from "./disableScroll";
import enableScroll from "./enableScroll";

const hidePreloader = () => {
  const preloader = document.querySelector(".preloader");

  disableScroll();
  setTimeout(() => {
    preloader.classList.add("preloader--top");
  }, 1000);

  setTimeout(() => {
    enableScroll();
    preloader.classList.add("preloader--none");
  }, 2000);
};

window.addEventListener("load", () => {
  hidePreloader();
});
