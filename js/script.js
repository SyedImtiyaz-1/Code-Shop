let heroSec = document.querySelector("#hero img");
let scroll = document.querySelector(".mouse_scroll")

heroSec.addEventListener("click", function () {
  console.log("I am a click event listener");
});

scroll.addEventListener("click", function(){
    window.scrollBy(0, 980);
})



