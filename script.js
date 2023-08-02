const products = [
    {
      name: 'O mercado online mais perto de si',
      price:0 ,
      image: 'logos/DM/logo-Double-M2.png',
    },
    {
      name: 'havainas',
      price: 1500,
      image: 'produtos/01.JPG',
    },
    {
        name: 'Iphone XS 64G',
        price: 18000,
        image: 'produtos/iphone xs.JPG',
        
      },
      {
        name: 'Produto 4',
        price: 29.99,
        image: 'imagens/011.png',
      },
      {
        name: 'Produto 6',
        price: 29.99,
        image: 'imagens/011.png',
      },
 
      {
        name: 'Produto 6',
        price: 29.99,
        image: 'imagens/011.png',
      },
  ];
  
  
  const productsList = document.getElementById('products-list');
  
  function displayProducts() {
    products.forEach(product => {
      const productElement = document.createElement('div');
      productElement.classList.add('product');
  
      const productImage = document.createElement('img');
      productImage.src = product.image;
      productElement.appendChild(productImage);
  
      const productName = document.createElement('div');
      productName.classList.add('product-name');
      productName.textContent = product.name;
      productElement.appendChild(productName);
  
      const productPrice = document.createElement('div');
      productPrice.classList.add('product-price');
      productPrice.textContent = `R$ ${product.price.toFixed(2)}`;
      productElement.appendChild(productPrice);
  
      productsList.appendChild(productElement);
    });
  }
  
  displayProducts();