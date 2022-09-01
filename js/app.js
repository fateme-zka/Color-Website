// DOM SELECTORS-----------------------------------------
const mobileMenu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbar__menu");
const navLogo = document.querySelector("#navbar__logo");

// EVENT LISTENERS---------------------------------------
window.addEventListener("scroll", highlightMenu);
window.addEventListener("click", highlightMenu);
mobileMenu.addEventListener("click", showMobileMenu);
menuLinks.addEventListener("click", closeMobileMenu);
navLogo.addEventListener("click", closeMobileMenu);

//FUNCTIONS----------------------------------------------
// Display mobile menu by clicking the menu icon
function showMobileMenu() {
  mobileMenu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
}

//Show active menu while scrolling
function highlightMenu() {
  const elemWithhighlights = document.querySelector(".highlight");
  const homeMenu = document.querySelector("#home-page");
  const aboutMenu = document.querySelector("#about-page");
  const servicesMenu = document.querySelector("#services-page");
  let scrollPos = window.scrollY;
  // console.log(scrollPos);

  if (window.innerWidth > 960 && scrollPos < 670) {
    // home section
    homeMenu.classList.add("highlight");
    aboutMenu.classList.remove("highlight");
    servicesMenu.classList.remove(".highlight");
  } else if (window.innerWidth > 960 && scrollPos < 1650) {
    // about section
    aboutMenu.classList.add("highlight");
    homeMenu.classList.remove("highlight");
    servicesMenu.classList.remove("highlight");
  } else if (window.innerWidth > 960 && scrollPos < 2550) {
    // services section
    servicesMenu.classList.add("highlight");
    homeMenu.classList.remove("highlight");
    aboutMenu.classList.remove("highlight");
  } else if (window.innerWidth > 960 && scrollPos > 2550) {
    // after services section
    servicesMenu.classList.remove("highlight");
  }

  if (
    (elemWithhighlights && window.innerWidth < 960 && scrollPos < 600) ||
    elemWithhighlights
  ) {
    elemWithhighlights.classList.remove("highlight");
  }
}

// Close mobile menu by clicking the each menu items
function closeMobileMenu() {
  const menuBars = document.querySelector(".is-active");
  console.log(window.innerWidth);
  if (window.innerWidth < 960 && menuBars) {
    mobileMenu.classList.toggle("is-active");
    menuLinks.classList.remove("active");
  }
}
