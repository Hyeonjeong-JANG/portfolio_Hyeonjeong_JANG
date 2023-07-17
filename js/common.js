// 다크모드
const themeBtn = document.querySelector(".theme_btn");
const userTheme = localStorage.getItem("theme");
let status = false;

document.addEventListener("DOMContentLoaded", () => {
  if (userTheme === "night") {
    clicknightMode();
  } else if (userTheme === "day") {
    clickdayMode();
  }
});

themeBtn.addEventListener("click", () => {
  if (status === false) {
    clicknightMode();
  } else if (status === true) {
    clickdayMode();
  }
});

function clicknightMode() {
  localStorage.setItem("theme", "night");
  themeBtn.innerHTML =
    "<img src='./images/night_mode.png'>";
  document.documentElement.setAttribute("data-theme", "night");
  status = true;
}
function clickdayMode() {
  localStorage.setItem("theme", "day");
  themeBtn.innerHTML = "<img src='./images/day_mode.png'>";
  document.documentElement.setAttribute("data-theme", "day");
  status = false;
}