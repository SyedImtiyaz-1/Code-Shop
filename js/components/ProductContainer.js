import ProductsBox from './ProductBox.js';

function ProductsContainer(title, products) {
  // title paramerter should be a string (Necessary),
  // products parameter should be an array/list of objects(Necessary).

  const wrapperDiv = document.createElement('div');

  const containerTitle = document.createElement('h1');
  containerTitle.textContent = `${title}`;
  containerTitle.classList.add('fontSizeTitle');
  containerTitle.style.display = 'flex';
  containerTitle.style.justifyContent = 'center';
  wrapperDiv.append(containerTitle);

  const productsContainer = document.createElement('div');
  productsContainer.classList.add('products-container');
  products.forEach(product => {
    productsContainer.append(ProductsBox(product));
  });
  wrapperDiv.append(productsContainer);

  return wrapperDiv;
}

export default ProductsContainer;