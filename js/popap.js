let fiew = document.querySelectorAll(".block");
let btnClose = document.querySelector(".close");
let btn = document.querySelector(".block-btn");

btn.onclick = function () {
  for (let i = 0; i < fiew.length; i++) {
    fiew[i].style.display = "block";
  }
  event.preventDefault();
}

btnClose.onclick = function () {
  for (let i = 0; i < fiew.length; i++) {
    fiew[i].style.display = "none";
  }
}
