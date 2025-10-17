// GoTop

let scroller = document.getElementById("scroller");

document.addEventListener("scroll", () => {
  let scrolldiff = document.documentElement.scrollTop || document.body.scrollTop;
  if (scrolldiff > 100) {
    scroller.style.display = "block";
  } else {
    scroller.style.display = "none";
  }
});

function GoTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// NAV

const screen = window.matchMedia("(min-width: 1201px)");
let nav = document.getElementById("move");

if (screen.matches) {
  document.addEventListener("scroll", () => {
    let scrolldiff = document.documentElement.scrollTop || document.body.scrollTop;
    if (scrolldiff > 100) {
      nav.style.marginTop = "0";
    } else {
      nav.style.marginTop = "calc(3rem + 2px)";
    }
  });
}
