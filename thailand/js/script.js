function toggleMobileMenu() {
  if (window.matchMedia("(max-width: 9999px)").matches) {
    const hamburger = document.getElementById("hamburger");
    const nav = document.getElementById("nav");
    hamburger.classList.toggle("open");
    nav.classList.toggle("open");
  }
}

const image = document.getElementById("random-image");
const source = ["./img/header1.jpg", "./img/header2.jpg", "./img/header3.jpg"];

function randomImage() {
  const randomIndex = Math.floor(Math.random() * source.length);

  if (localStorage.getItem("currentIndex") !== String(randomIndex)) {
    image.src = source[randomIndex];
    localStorage.setItem("currentIndex", randomIndex);
  } else {
    randomimage();
  }
}

randomImage();
