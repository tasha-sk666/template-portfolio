/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import SmoothScroll from "smooth-scroll";

const scroll = new SmoothScroll('a[href*="#"]', {
	speed: 200
});

const menuLinks = document?.querySelectorAll("[data-menu-item]");
const sections = document?.querySelectorAll("section");
const sidebarLinks = document?.querySelectorAll("[data-sidebar-item]");
const getId = (link) => link.getAttribute("href").replace("#", "");

const sectionHandler = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      menuLinks?.forEach((link) => {
        link.classList.toggle("menu__link--active", getId(link) === entry.target.id);
      });
      sidebarLinks?.forEach((link) => {
        link.classList.toggle("sidebar__link--active", getId(link) === entry.target.id);
      });
    }
  });
};

const sectionObserver = new IntersectionObserver(sectionHandler, {
  threshold: 0.5,
});

sections?.forEach((section) => sectionObserver.observe(section));
