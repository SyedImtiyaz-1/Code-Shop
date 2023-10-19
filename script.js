document.addEventListener("DOMContentLoaded", function() {
  // Show pre-loader for 3 seconds
  var preloader = document.getElementById("preloader");
  var content = document.getElementById("content");
  
  setTimeout(function() {
      preloader.style.display = "none";
      content.style.display = "block";
  }, 2500);
});

// Get the button:
const goToTopBtn = document.getElementById("goToTopBtn");

// Add a click event listener to the button
goToTopBtn.addEventListener("click", function() {topFunction()});


// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    goToTopBtn.style.display = "block";
  } else {
    goToTopBtn.style.display = "none";
  }
}

function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  } 
// Intersection Observer for showing and hiding elements
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });
});

// Select all elements with the class "hidden"
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((element) => observer.observe(element));

const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');

toggle.addEventListener('click', function(){
    this.classList.toggle('bi-moon');
    if(this.classList.toggle('bi-brightness-high-fill')){
        body.style.background = 'rgb(255,239,239)';
        body.style.color = 'black';
        body.style.transition = '2s';
    }else{
        body.style.background = 'black';
        body.style.color = 'white';
        body.style.transition = '2s';
    }
});

const clearButton = document.querySelector('.clear-button');
const inputField = document.querySelector('#my-input-field');

clearButton.addEventListener('click', () => {
  // Clear the input field
  inputField.value = '';
});
    