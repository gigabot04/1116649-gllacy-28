let fiew=document.querySelectorAll(".block"),btnClose=document.querySelector(".close"),btn=document.querySelector(".block-btn"),popup=document.querySelector(".popup"),popupName=popup.querySelector("[type=text]"),popupEmail=popup.querySelector("[type=email]"),popupTextarea=popup.querySelector("textarea"),popupSubmit=popup.querySelector(".popup-form"),isStorageSupport=!0,storageEmail="",storageName="",bgColor=document.querySelector(".bg-image"),btns=document.querySelectorAll(".btn-slider"),slite=document.querySelectorAll(".slide");try{storageEmail=localStorage.getItem("email"),storageName=localStorage.getItem("Name")}catch(a){isStorageSupport=!1}popupSubmit.addEventListener("submit",function(a){popupName.value&&popupTextarea.value&&popupEmail.value?isStorageSupport&&(localStorage.setItem("email",popupEmail.value),localStorage.setItem("Name",popupName.value)):(a.preventDefault(),popup.classList.remove("popupError"),popup.offsetWidth=popup.offsetWidth,popup.classList.add("popupError"))}),btn.addEventListener("click",function(a){a.preventDefault();for(let b=0;b<fiew.length;b++)fiew[b].style.display="block";popup.classList.remove("popupError"),storageName?(popupName.value=storageName,popupEmail.focus()):popupName.focus(),storageEmail&&(popupEmail.value=storageEmail,popupTextarea.focus())}),btnClose.addEventListener("click",function(a){a.preventDefault();for(let b=0;b<fiew.length;b++)fiew[b].style.display="none"}),window.addEventListener("keydown",function(a){if(27===a.keyCode){for(let b=0;b<fiew.length;b++)(fiew[b].style.display="block")&&(a.preventDefault(),fiew[b].style.display="none");popup.classList.remove("popupError")}});for(let a=0;a<btns.length;a++)btns[a].addEventListener("click",function(){let b=document.querySelector(".current-btn");b.classList.remove("current-btn"),btns[a].classList.add("current-btn");let c=document.querySelector(".slide-current");c.classList.remove("slide-current"),slite[a].classList.add("slide-current");for(let a=1;a<=btns.length;a++)bgColor.classList.contains("image"+a)&&bgColor.classList.remove("image"+a);bgColor.classList.add("image"+(a+1))});