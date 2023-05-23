let galleryImg = document.querySelectorAll(".galleryImg");
let galleryBody = document.querySelector(".gallery-body");
let boxImg = document.querySelector(".box-img") ;
let i ;
galleryImg.forEach(img => {
  img.addEventListener("click", e =>{
    galleryBody.classList.add("active");
    boxImg.src = e.target.src ;
    i = e.target.id;
  })
})
document.querySelector("#next").onclick = _ => {
  if(i >= galleryImg.length - 1) i = -1;
  i++;
  boxImg.src = galleryImg[i].src ;
  console.log(i + "++")
}
document.querySelector("#prev").onclick = _ => {
  if(i == 0) i = galleryImg.length
  i--;
  boxImg.src = galleryImg[i].src;
  console.log(i + "--")
}
document.querySelector("#close").onclick = _ =>{galleryBody.classList.remove("active");}
galleryBody.onclick = e => {if (e.target.classList.contains("gallery-body")) galleryBody.classList.remove("active");}