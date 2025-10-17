const mediaquery = window.matchMedia("(max-width: 1200px)");

// Hamburger-Button

function ToggleMenu() {
  const hamburger = document.getElementById("hamburger");
  const nav = document.getElementById("nav");

  if (mediaquery.matches) {
    hamburger.classList.toggle("open");
    nav.classList.toggle("open");
  }
}