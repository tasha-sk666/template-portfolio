const themeBtn = document.querySelector(".theme");
const rootTheme = document.querySelector(":root");
const sunIcon = themeBtn.querySelector(".theme__light");
const moonIcon = themeBtn.querySelector(".theme__dark");
const activeIconClass = "theme__icon--active";
const key = "currentTheme";
localStorage.key = key;

if (localStorage.getItem(key) !== null) {
  rootTheme.dataset.theme = localStorage.getItem(key);

  if (rootTheme.dataset.theme === "light") {
    sunIcon.classList.remove(activeIconClass);
    moonIcon.classList.add(activeIconClass);
  } else {
    moonIcon.classList.remove(activeIconClass);
    sunIcon.classList.add(activeIconClass);
  }
} else {
  localStorage.setItem(key, rootTheme.dataset.theme);
}

themeBtn.addEventListener("click", () => {
  rootTheme.dataset.theme = rootTheme.dataset.theme === "light" ? "" : "light";
  localStorage.setItem(key, rootTheme.dataset.theme);

  if (rootTheme.dataset.theme === "light") {
    sunIcon.classList.remove(activeIconClass);
    moonIcon.classList.add(activeIconClass);
  } else {
    moonIcon.classList.remove(activeIconClass);
    sunIcon.classList.add(activeIconClass);
  }
});
