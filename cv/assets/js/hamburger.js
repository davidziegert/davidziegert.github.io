let mediaquery = window.matchMedia("(max-width: 1023px)");
const nav = document.getElementById("nav");

function openMenu() {
  if (mediaquery.matches) {
    if (nav.classList.contains("open")) {
      nav.classList.toggle("open");
      nav.style.width = "0";
    } else {
      nav.classList.toggle("open");
      nav.style.width = "250px";
    }
  }
}
