let bgColor = document.querySelector(".bg-image");
let btns = document.querySelectorAll(".btn-slider");
let slite = document.querySelectorAll(".slide");

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    // меняю кнопку
    let currentBtn = document.querySelector(".current-btn");
    currentBtn.classList.remove("current-btn");
    btns[i].classList.add("current-btn");

    // меняю название
    let currentSlide = document.querySelector(".slide-current");
    currentSlide.classList.remove("slide-current");
    slite[i].classList.add("slide-current");

    // меняю фон
    for (let n = 1; n <= btns.length; n++) {
      if (bgColor.classList.contains("image" + n)) {
        bgColor.classList.remove("image" + n);
      }
    }
    
    bgColor.classList.add("image" + (i + 1));
  })
};