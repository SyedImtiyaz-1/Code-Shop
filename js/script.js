let heroSec = document.querySelector("#hero img");
let scroll = document.querySelector(".mouse_scroll");
let copyright = document.querySelector("#copyright u");
let input = document.querySelector(".mail-part-1 input");
let mailBtn = document.querySelector(".mail-part-1 button");

heroSec.addEventListener("click", function () {
  console.log("I am a click event listener");
});

scroll.addEventListener("click", function(){
    window.scrollBy(0, 980);
})

// github copyright onclick
copyright.addEventListener("click", ()=>{
  window.open("https://github.com/SyedImtiyaz-1");
})

// mail 
mailBtn.addEventListener("click", ()=>{
  if(mailBtn){
    input.value=" ";
    alert("Subscribed !")
  }
})
