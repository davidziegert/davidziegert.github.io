$(function () {
  HoverBoxes();
});

function HoverBoxes() {
  let mobile = window.matchMedia("(max-width: 1279px)");
  let non_mobile = window.matchMedia("(min-width: 1280px)");
  let item = $(".menu-item");

  if (mobile.matches) {
    item.mouseenter(function () {
      item.removeClass("big");
      item.css("height", "calc(20vh - 0.15rem)");
      $(this).addClass("big");
    });

    item.mouseleave(function () {
      item.css("height", "calc(25vh - 0.15rem)");
      item.removeClass("big");
    });
  }

  if (non_mobile.matches) {
    item.mouseenter(function () {
      item.removeClass("big");
      item.css("width", "calc(20vw - 0.15rem)");
      $(this).addClass("big");
    });

    item.mouseleave(function () {
      item.css("width", "calc(25vw - 0.15rem)");
      item.removeClass("big");
    });
  }
}
