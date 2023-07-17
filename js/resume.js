//////////////스킬바//////////////
const skill = document.querySelectorAll(".each_skill");

const scrollBtnDisplay = function () {
  if (window.scrollY >= 1700 && window.scrollY <= 1800) {
    for (let i = 0; i < skill.length; i++) {
      const bar = document.querySelectorAll(".progress")[i]; //스킬바

      const progress = document.getElementsByClassName("progress")[i];
      let totalSkill = progress.dataset.percent;
      let t = 0;
      bar.style.width = 0;

      // bar 너비
      const barAnimation = setInterval(() => {
        bar.style.width = t + "%";
        t++ >= totalSkill && clearInterval(barAnimation);
      }, 10);

      // 퍼센트 숫자
      let number = 0;
      const numberAnimation = setInterval(() => {
        progress.dataset.percent = number;
        number++ >= totalSkill && clearInterval(numberAnimation);
      }, 10);
    }
  }
};

// 스크롤 시 scrollBtnDisplay
window.addEventListener("scroll", scrollBtnDisplay);
