(() => {
  const burger = document?.querySelector("[data-burger]");
  const sidebar = document?.querySelector("[data-sidebar]");
  const sidebarItems = document?.querySelectorAll("[data-sidebar-item]");
  const sidebarOverlay = document?.querySelector("[data-sidebar-overlay]");
  const visibleDelay = 300;

  burger?.addEventListener("click", () => {
    burger.classList.add("js-burger-active");
    sidebar.classList.add("sidebar--active", "sidebar--visible");
  });

  sidebarOverlay?.addEventListener("click", () => {
    burger.classList.remove("js-burger-active");
    sidebar.classList.remove("sidebar--active");

    setTimeout(() => {
      sidebar.classList.remove("sidebar--visible");
    }, visibleDelay);
  });

  sidebarItems?.forEach((item) => {
    item.addEventListener("click", () => {
      burger.classList.remove("js-burger-active");
      sidebar.classList.remove("sidebar--active");

      setTimeout(() => {
        sidebar.classList.remove("sidebar--visible");
      }, visibleDelay);
    });
  });
})();
