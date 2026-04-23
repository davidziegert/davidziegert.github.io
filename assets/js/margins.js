const source = document.querySelector(".source");
const target = document.querySelector(".target");
let mediaquery = window.matchMedia("(max-width: 1023px)");

if (mediaquery.matches) {
  target.style.marginTop = source.offsetHeight + "px";
}
