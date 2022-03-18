/* eslint-disable no-restricted-syntax */
console.log('hellou', itemsArray);

const allProd = async () => {
  const productsResult = await fetch('/cart/fetch', {});
  const allProducts = await productsResult.json();
  const allProductsArr = allProducts.products;

  const addedItems = [];
  let itemToAdd;
  for (const item of itemsArray) {
    if (item.includes('saleId')) {
      itemToAdd = allProductsArr.find((product) => product.id == item.slice(8));
      itemToAdd.title = `По акции: ${itemToAdd.title}`;
      itemToAdd.price = 0;
      // itemToAdd.id = item;
      // console.log(itemToAdd);
    } else {
      itemToAdd = allProductsArr.find((product) => product.id == item);
    }
    // const itemToAdd = allProductsArr.find((product) => product.id == item);
    if (!addedItems.includes(itemToAdd)) {
      // console.log(itemToAdd);
      itemToAdd.quantityInCart = 1;
      addedItems.push(itemToAdd);
      const newCartItem = document.createElement('div');
      newCartItem.innerHTML = `<div class="card bg-light mb-3" style="max-width: 450px;">
      <div class="row g-0 truo">
        <div class="col-md-4">
          <a href="/product/${itemToAdd.id}"><img src=${itemToAdd.img} class="img-fluid rounded-start" alt=""></a>
        </div>
        <div class="col-md-8">
        <div class="card-body">
          <a href="/product/${itemToAdd.id}"><h5 class="card-title">${itemToAdd.title}</h5></a>
          <p class="card-text">${itemToAdd.price} руб./шт.</p>
          <p class="card-text"><small class="text-success">Описание: ${itemToAdd.description}</small></p>
          <p id="quantityInCart-${itemToAdd.id}" class="card-text"><small class="text-muted">Количество в корзине: ${itemToAdd.quantityInCart} шт.</small></p>
          <p id="price-${itemToAdd.id}"class="card-text">${itemToAdd.price * itemToAdd.quantityInCart} руб.</p>
        </div>
        </div>
      </div>
      </div>`;
      document.getElementById('cart-items').appendChild(newCartItem);
    } else if (addedItems.includes(itemToAdd)) {
      itemToAdd.quantityInCart += 1;
      const x = document.getElementById(`quantityInCart-${itemToAdd.id}`);
      x.innerHTML = `<p id="quantityInCart-${itemToAdd.id}" class="card-text"><small class="text-muted">Количество в корзине: ${itemToAdd.quantityInCart} шт.</small></p>`;
      const y = document.getElementById(`price-${itemToAdd.id}`);
      y.innerHTML = `<p id="price-${itemToAdd.id}"class="card-text">${itemToAdd.price * itemToAdd.quantityInCart} руб.</p>`;
    }
  }
  console.log(addedItems);
  // console.log(addedItems.length);

  let totalQuantity = 0;
  addedItems.forEach((element) => {
    totalQuantity += element.quantityInCart;
  });

  let totalPrice = 0;
  addedItems.forEach((element) => {
    totalPrice += element.price;
  });

  const total = document.createElement('div');
  total.innerHTML = `<p>Общее кол-во: ${totalQuantity} шт.</p>
  <p>Сумма заказа: ${totalPrice} руб.</p>`;
  document.getElementById('cart-totals').appendChild(total);
};

allProd();

const clearCart = document.querySelector('.clearCart');
clearCart.addEventListener('click', (e) => {
  localStorage.clear();
  window.location.reload();
});
