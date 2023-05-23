(function calender() {
  let countDown;
  countDown = new Date("5 16, 2024 23:59:59").getTime() ;
document.querySelector("#form").addEventListener("submit", _=>{
  let value = document.querySelector("#date").value ;
  let day = value.slice(8,10) ;
  let month = value.slice(5,7) ;
  let year = value.slice(0,4) ;
  let hour = value.slice(11,13) ;
  let minuets = value.slice(14,16) ;
  if (value !== "" 
  && day >=new Date().getDate() 
  && +month >= new Date().getMonth() 
  && +year >= new Date().getFullYear() ){
    countDown = new Date(`${month} ${day}, ${year} ${hour}:${minuets}:59`).getTime() ;
  } 
})
let counter = setInterval(() => {
    let dateDiff = countDown - new Date().getTime() ; 
    let days = Math.floor(dateDiff / ( 1000 * 60 * 60 * 24)) ;
    document.querySelector("#countdown-days").innerHTML =  days < 10 ? `0${days}` : days ;
    let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24 )) / ( 1000 * 60 * 60)) ;
    document.querySelector("#countdown-hours").innerHTML =  hours < 10 ? `0${hours}` : hours ;
    let minuets = Math.floor((dateDiff % (1000 * 60 * 60 )) / (1000 * 60) ) ;
    document.querySelector("#countdown-minutes").innerHTML = minuets < 10 ? `0${minuets}` : minuets ;
    let seconds = Math.floor((dateDiff % (1000 * 60 )) / 1000 ) ;
    document.querySelector("#countdown-seconds").innerHTML =  seconds < 10 ? `0${seconds}` : seconds ;
}, 1000) ;
})()