/* eslint-disable no-console */
export default function disableScroll() {
  const fixBlocks = document?.querySelectorAll(".js-fixed");
  const paddingOffset = `${window.innerWidth - document.body.offsetWidth}px`;

  document.documentElement.style.scrollBehavior = "none";
  fixBlocks.forEach((el) => {
    el.style.paddingRight = paddingOffset;
  });
  document.body.style.paddingRight = paddingOffset;
  document.body.classList.add("dis-scroll");
}
