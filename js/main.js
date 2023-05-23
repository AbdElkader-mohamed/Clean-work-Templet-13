function progress() {
  let progress = document.querySelector(".scrollProgress") ;
  let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  window.addEventListener("scroll",()=>{
  progress.style.width = `${(document.documentElement.scrollTop / height) * 100}%`;
});
}
progress()
// handel md menu nav 
function handelMdNavMenu() {
  document.querySelector(".navbar-toggler").onclick = function(){
    document.getElementById(this.dataset.target).classList.toggle("active");
    this.classList.toggle("rotate")
    let span = this.querySelectorAll("span")
      span[0].classList.toggle("rotate-mains")
      span[1].classList.toggle("opacity")
      span[2].classList.toggle("rotate-plus")
  }
}
handelMdNavMenu()
// mni menu nave 
function MineNav() {
let hover = document.querySelector(".dropdown") ;
  hover.onclick = _ => {
  hover.querySelector(".dropdown-menu").classList.toggle("active");
}
}
MineNav()
// activation links 
function activation() {
let links = document.querySelectorAll(".navbar .nav-link");
  links.forEach(link => link.onclick = _ =>{
    links.forEach(link => {link.classList.remove("active")})
    link.classList.add("active")
  }) 
}
activation()
// scroll to target section 
function scrollToTargetSection() {
let scrollSection = document.querySelectorAll(".scrollTo") ;
scrollSection.forEach(target => {
  target.addEventListener("click", function() {
    window.scrollTo({
      top: document.getElementById(this.dataset.target).offsetTop,
      behavior:"smooth"
    })
  })
})
}
scrollToTargetSection()
//scroll to tob of page
function scrollToTop() {
  let scrollBtn = document.querySelector(".scroll-to-top");
  window.onscroll = function () {
    if(this.scrollY >= 600) scrollBtn.style = "opacity:1; visibility: visible;";
    else scrollBtn.style = " opacity:0; visibility: hidden;" ;
  };
  scrollBtn.onclick = function (){window.scrollTo({top:0 ,behavior: "smooth",});};
}
scrollToTop()