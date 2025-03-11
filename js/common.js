const menuHamburger = document.querySelector(".ki-burger");
const tsNavbarContainer = document.querySelector(".ki-navbar-container");
const tsNavbarLogo = document.querySelector(
  ".ki-navbar--light .ki-navbar__logo img"
);
let isNavbarActive = tsNavbarContainer.classList.contains("ki-navbar-active");

let navLinks = document.querySelectorAll(".ki-navbar__link");

function toggleNavbar(onlyClose) {
  if (onlyClose) {
    tsNavbarContainer.classList.remove("ki-navbar-active");
  } else {
    tsNavbarContainer.classList.toggle("ki-navbar-active");
  }
}

menuHamburger.addEventListener("click", () => toggleNavbar(false));

// Scroll Add Classes

window.addEventListener("scroll", function () {
  scrollpos = window.scrollY;

  if (scrollpos >= header_height) {
    add_class_on_scroll();
  } else {
    remove_class_on_scroll();
  }
});

let closeNavbar = () => {
  // Only close Navbar when clicked
  toggleNavbar(true);
};

navLinks.forEach((navLink) => {
  navLink.addEventListener("click", closeNavbar);
});
