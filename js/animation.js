

let imgs = document.querySelectorAll(".slideshow img ") ;
let words = document.querySelectorAll(".change-word strong ") ;

let firstIndex = 0 ;
let time = 3000

imgs[firstIndex].classList.add("active")
setInterval(autoSlide, time)
function autoSlide() {
  let count = firstIndex ;
  setTimeout(_=> {
    imgs[count].classList.remove("active")
  },1000)
  firstIndex = (firstIndex + 1) % imgs.length;
  imgs[firstIndex].classList.add("active")
}

let index = 0;
function autoChange() {
  words.forEach(word =>word.classList.remove("visible"))
  words[index].classList.add("visible");
  if (index >= words.length - 1) index = 0;
  else index++;
  setTimeout(autoChange, time)
}
window.onload = autoChange

