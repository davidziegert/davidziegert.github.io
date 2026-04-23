const nav = document.querySelector(".sticky-nav");
const footer = document.querySelector(".sticky-footer");

const header = document.querySelector(".target_1");
const aside = document.querySelector(".target_2");

let mediaquery = window.matchMedia("(min-width: 1280px)");

if (mediaquery.matches) {
  header.style.marginTop = nav.offsetHeight + "px";
  aside.style.marginBottom = footer.offsetHeight + "px";
}
