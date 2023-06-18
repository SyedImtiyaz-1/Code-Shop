let heroSec = document.querySelector("#hero img");
let scroll = document.querySelector(".mouse_scroll");
let copyright = document.querySelector("#copyright u");
let input = document.querySelector(".mail-part-1 input");
let mailBtn = document.querySelector(".mail-part-1 button");
// let placeholder = document.querySelector(".mail-part-1 input placeholder");

heroSec.addEventListener("click", function () {
  console.log("I am a click event listener");
});

scroll.addEventListener("click", function () {
  window.scrollBy(0, 980);
});

// github copyright onclick
copyright.addEventListener("click", () => {
  window.open("https://github.com/SyedImtiyaz-1");
});

// mail
mailBtn.addEventListener("click", () => {
  if (input.required == true) {
    alert("Subscribed !");
    input.value = " ";
  } else if ((input.value = " ")) {
    setTimeout(() => {
      input.placeholder = "Please enter email first";
    });
  }

  if(window.location.reload()){
    input.value = " ";
  }

  setTimeout(() => {
    input.placeholder = "Enter your mail";
  }, 600);
});
