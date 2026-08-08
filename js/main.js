const navbar = document.querySelector(".navbar");
const logo = document.querySelector(".logo-svg use");
const mMenuToggle = document.querySelector(".burger-link");
const menu = document.querySelector(".mobile-menu");
window.addEventListener('scroll', () => {
  if (this.scrollY > 1) {
    navbar.classList.add("navbar-light");
    logo.href.baseVal = "images/sprit.svg#logo";
  } else {
    navbar.classList.remove("navbar-light");
    logo.href.baseVal = "images/sprit.svg#logo-light";
  }
});
mMenuToggle.addEventListener("click", (event) => {
  event.preventDefault();
  menu.classList.toggle("is-open")
})