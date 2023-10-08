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
