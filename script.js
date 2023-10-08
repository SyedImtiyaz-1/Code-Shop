document.addEventListener("DOMContentLoaded", function() {
  // Show pre-loader for 3 seconds
  var preloader = document.getElementById("preloader");
  var content = document.getElementById("content");
  
  setTimeout(function() {
      preloader.style.display = "none";
      content.style.display = "block";
  }, 2500);
});


function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
