function SwiperSlide(imageData) {
  const swiperSlideDiv = document.createElement('div');
  swiperSlideDiv.classList.add('swiper-slide');

  const slideImage = document.createElement('img');
  slideImage.src = `${imageData.imageSource}`;
  slideImage.alt = `${imageData.imageAlt}`;
  swiperSlideDiv.append(slideImage);

  return swiperSlideDiv;
}

export default SwiperSlide;