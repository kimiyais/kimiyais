const menuHamburger = document.querySelector(".ki-burger");
const kiNavbarContainer = document.querySelector(".ki-navbar-container");
let isNavbarActive = kiNavbarContainer.classList.contains("ki-navbar-active");

let navLinks = document.querySelectorAll(".ki-navbar__link");

function toggleNavbar(onlyClose) {
  if (onlyClose) {
    kiNavbarContainer.classList.remove("ki-navbar-active");
  } else {
    kiNavbarContainer.classList.toggle("ki-navbar-active");
  }
}

menuHamburger.addEventListener("click", () => toggleNavbar(false));

let closeNavbar = () => {
  // Only close Navbar when clicked
  toggleNavbar(true);
};

navLinks.forEach((navLink) => {
  navLink.addEventListener("click", closeNavbar);
});
