function openMenu() {
  let mediaquery = window.matchMedia("(max-width: 1279px)");

  const wrapper = document.getElementById("wrapper");
  const hamburger = document.getElementById("hamburger");

  if (mediaquery.matches) {
    hamburger.classList.toggle("open");
    wrapper.classList.toggle("open");
  }
}
