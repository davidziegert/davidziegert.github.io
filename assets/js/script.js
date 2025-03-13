let currentTheme = document.documentElement.getAttribute("data-theme");
let targetTheme = "light";
document.documentElement.setAttribute("data-theme", targetTheme);

function setThemeLight() {
  targetTheme = "light";
  document.documentElement.setAttribute("data-theme", targetTheme);
}

function setThemeDark() {
  targetTheme = "dark";
  document.documentElement.setAttribute("data-theme", targetTheme);
}

function goToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

const counters = document.querySelectorAll(".month");

counters.forEach((counter) => {
  const incrementCounter = () => {
    // get target number
    const target = parseInt(counter.getAttribute("data-target"));
    // get current number
    const currentNumber = parseInt(counter.innerText);
    // set incrementer
    const increment = target / 300;

    if (currentNumber < target) {
      counter.innerText = `${Math.ceil(currentNumber + increment)}`;
      setTimeout(incrementCounter, 1);
    } else {
      counter.innerText = target;
    }
  };

  incrementCounter();
});
