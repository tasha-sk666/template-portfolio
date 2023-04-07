/* eslint-disable no-console */
export default function enableScroll() {
  const fixBlocks = document?.querySelectorAll(".js-fixed");
  fixBlocks.forEach((el) => {
    el.style.paddingRight = "0px";
  });

  document.body.style.paddingRight = "0px";
  document.body.style.top = "auto";
  document.body.classList.remove("dis-scroll");
  window.scroll({
    left: 0,
  });
  document.documentElement.style.scrollBehavior = "smooth";
}
