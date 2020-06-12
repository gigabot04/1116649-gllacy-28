let fiew = document.querySelectorAll(".block");
let btnClose = document.querySelector(".close");
let btn = document.querySelector(".block-btn");
let popup = document.querySelector(".popup");
let popupName = popup.querySelector("[type=text]");
let popupEmail = popup.querySelector("[type=email]");
let popupTextarea = popup.querySelector("textarea");
let popupSubmit = popup.querySelector(".popup-form");
let isStorageSupport = true;
let storageEmail = "";
let storageName = "";

try {
  storageEmail = localStorage.getItem("email");
  storageName = localStorage.getItem("Name");
} catch (err) {
  isStorageSupport = false;
}

popupSubmit.addEventListener("submit", function(evt) {
  if (!popupName.value || !popupTextarea.value || !popupEmail.value) {
    evt.preventDefault();
    popup.classList.remove("popupError");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("popupError");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("email", popupEmail.value);
      localStorage.setItem("Name", popupName.value);
    }
  }
});

btn.addEventListener("click", function (evt) {
  evt.preventDefault();
  for (let i = 0; i < fiew.length; i++) {
    fiew[i].style.display = "block";
  }
  popup.classList.remove("popupError");

  if (storageName) {
    popupName.value = storageName;
    popupEmail.focus();
  } else {
    popupName.focus();
  }

  if (storageEmail) {
    popupEmail.value = storageEmail;
    popupTextarea.focus();
  }
});

btnClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  for (let i = 0; i < fiew.length; i++) {
    fiew[i].style.display = "none";
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    
    for (let i = 0; i < fiew.length; i++) {
      if (fiew[i].style.display = "block") {
        evt.preventDefault();
        fiew[i].style.display = "none";
      }
    }
    popup.classList.remove("popupError");
  }
});
