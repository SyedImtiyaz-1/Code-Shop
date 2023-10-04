function ProductsBox(product) {
  // product parameter must be an object containing info about the product
  // info: name, link, imageSource, price, priceCurrency.
  
  // Assigning default currency as dollars.
  product.priceCurrency = product.priceCurrency || '$';
  // Assigning default link to #.
  product.productLink = product.productLink || '#';
  
  const mainBox = document.createElement('a');
  mainBox.classList.add('products-box');
  mainBox.href = `${product.productLink}`;

  const productImage = document.createElement('img');
  productImage.src = `${product.imageSource}`
  productImage.alt = `${product.name}`
  mainBox.append(productImage);

  const productTitle = document.createElement('h4');
  productTitle.innerText = `${product.name}`;
  mainBox.append(productTitle);

  const productPrice = document.createElement('p');
  productPrice.textContent = `${product.priceCurrency}${product.price}`;
  mainBox.append(productPrice);

  return mainBox;
}

export default ProductsBox;