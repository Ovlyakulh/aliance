const navbar = document.querySelector(".navbar");
const logo = document.querySelector(".logo-svg use");
const mMenuToggle = document.querySelector(".burger-link");
const menu = document.querySelector(".mobile-menu");

const lightModeOn = (event) => {
  navbar.classList.add("navbar-light");
  logo.href.baseVal = "images/sprit.svg#logo";
};

const lightModeOff = (event) => {
  navbar.classList.remove("navbar-light");
  logo.href.baseVal = "images/sprit.svg#logo-light";
};

const openMenu = (event) => {
  menu.classList.add("is-open"); //Вешает класс is-open
  mMenuToggle.classList.add("close-menu")
  document.body.style.overflow = "hidden"; // Запрешает прокр  утку сайта под меню
  lightModeOn();
};

const closeMenu = (event) => {
  menu.classList.remove("is-open"); //Удаляет класс is-open
  mMenuToggle.classList.remove("close-menu")
  document.body.style.overflow = ""; // Возврашает прокрутку
  //  сайта под меню
  lightModeOff();
};

window.addEventListener("scroll", () => {
  this.scrollY > 1 ? lightModeOn() : lightModeOff()
});
mMenuToggle.addEventListener("click", (event) => {
  event.preventDefault();
 menu.classList.contains("is-open") ? closeMenu() : openMenu();
});
