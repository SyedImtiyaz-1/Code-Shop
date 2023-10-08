
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
  $(document).ready(function(){
    $(window).scroll(function(){
      var scroll = $(window).scrollTop();
      if (scroll > 100) {
        $(".navbar").removeClass('rgb(255, 239, 239)').css( "backdrop-filter","blur(6px)");
      }else{
        $(".navbar").css("background" , "").addClass('rgb(255, 239, 239)');    
      }
    });
  });