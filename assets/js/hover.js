$(function () {
  HoverBoxes();
});

function HoverBoxes() {
  let mobile = window.matchMedia("(max-width: 1023px)");
  let non_mobile = window.matchMedia("(min-width: 1024px)");
  let item = $(".menu-item");

  if (mobile.matches) {
    item.mouseenter(function () {
      item.removeClass("big");
      item.css("height", "20vh");
      $(this).addClass("big");
    });

    item.mouseleave(function () {
      item.css("height", "25vh");
      item.removeClass("big");
    });
  }

  if (non_mobile.matches) {
    item.mouseenter(function () {
      item.removeClass("big");
      item.css("width", "20vw");
      $(this).addClass("big");
    });

    item.mouseleave(function () {
      item.css("width", "25vw");
      item.removeClass("big");
    });
  }
}
