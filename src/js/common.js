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

  if (tsNavbarLogo) {
    if (tsNavbarContainer.classList.contains("ki-navbar-active")) {
      tsNavbarLogo.src = "../assets/images/logo.png";
    } else {
      tsNavbarLogo.src = "../assets/images/logo-white.png";
    }
  }
}

menuHamburger.addEventListener("click", () => toggleNavbar(false));

// Scroll Add Classes

let scrollpos = window.scrollY;
const header_height = tsNavbarContainer.offsetHeight;

const add_class_on_scroll = () => {
  tsNavbarContainer.classList.add("ki-navbar-fade-in");

  if (tsNavbarLogo) {
    tsNavbarLogo.src = "../assets/images/logo.png";
  }
  
};
const remove_class_on_scroll = () => {
  tsNavbarContainer.classList.remove("ki-navbar-fade-in");

  // Toggle  To white logo if navbar is Light Navbar is not open
  if (tsNavbarLogo && !isNavbarActive) {
    tsNavbarLogo.src = "../assets/images/logo-white.png";
  }
};

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
