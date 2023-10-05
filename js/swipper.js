const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    autoplay: {
      delay: 1000, // Delay between slides (in milliseconds
    },
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoplay: {
      delay: 1000, // Delay between slides (in milliseconds)
      disableOnInteraction: false, // Prevent autoplay from stopping on user interaction
    },
  });
  