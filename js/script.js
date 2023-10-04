import ProductsContainer from "./components/ProductContainer.js";
import SwiperSlide from "./components/SwiperSlide.js";

let heroSec = document.querySelector("#hero img");
let scroll = document.querySelector(".mouse_scroll");
let copyright = document.querySelector(".copyright span");
let input = document.querySelector(".mail-part-1 input");
let mailBtn = document.querySelector(".mail-part-1 button");
let openNav = document.querySelector(".open-nav");
let closeNav = document.querySelector(".close-nav");
let sideNav = document.querySelector(".nav-mobile");

function capitalize(str) {
  return str
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ')
}

async function fetchAndRenderData() {
  try {
    const tShirtDiv = document.getElementById("tshirt-products");
    const smartWatchDiv = document.getElementById("smartwatch-products");
    const mobilePhoneDiv = document.getElementById("mobile-phone-products");
    const swiperWrapperDiv = document.getElementById("bottom-swiper-wrapper");

    let tShirtProducts;
    let smartWatchProducts;
    let mobilePhoneProducts;

    const swiperImagesResponse = await fetch('../json/swiper-images.json');
    const productsResponse = await fetch('../json/products.json');

    const swiperImagesData = await swiperImagesResponse.json();
    const productsData = await productsResponse.json();
    
    swiperImagesData.forEach(swiperImage => {
      swiperWrapperDiv.append(SwiperSlide(swiperImage));
    });

    productsData.forEach(product => {
      if (product.type.toLowerCase() == "tshirts") tShirtProducts = product;
      else if (product.type.toLowerCase() == "smartwatch") smartWatchProducts = product;
      else if (product.type.toLowerCase() == "mobile phones") mobilePhoneProducts = product;
    });
    tShirtDiv.append(ProductsContainer(capitalize(tShirtProducts.type), tShirtProducts.products));
    smartWatchDiv.append(ProductsContainer(capitalize(smartWatchProducts.type), smartWatchProducts.products));
    mobilePhoneDiv.append(ProductsContainer(capitalize(mobilePhoneProducts.type), mobilePhoneProducts.products));
  }
  catch (error) {
    console.error(error);
  }
}
fetchAndRenderData()

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

  setTimeout(() => {
    input.placeholder = "Enter your mail";
  }, 600);
});

// Navigation for Mobile
openNav.addEventListener("click", () => {
  sideNav.style.width = "200vw";
})

closeNav.addEventListener("click", () => {
  sideNav.style.width = "0px"
})

// reload
window.addEventListener('load', function () {
  input.value = " ";
});