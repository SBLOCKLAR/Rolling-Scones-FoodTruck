// Hamburger menu collapse

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".pageLinks");

export function hamburgerToggle() {
  navLinks.classList.toggle("open");
}
