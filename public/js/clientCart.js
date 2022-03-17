/* eslint-disable no-restricted-syntax */
console.log('hellou', itemsArray);

const allProd = async () => {
  const productsResult = await fetch('/cart/fetch', {});
  const allProducts = await productsResult.json();
  const allProductsArr = allProducts.products;

  const addedItems = [];
  for (const item of itemsArray) {
    const itemToAdd = allProductsArr.find((product) => product.id == item);
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
          <p class="card-text">${itemToAdd.price} рублей</p>
          <p class="card-text"><small class="text-success">Описание: ${itemToAdd.description}</small></p>
          <p id="quantityInCart-${itemToAdd.id}" class="card-text"><small class="text-muted">Количество в корзине: ${itemToAdd.quantityInCart} шт.</small></p>
        </div>
        </div>
      </div>
      </div>`;
      document.getElementById('cart-items').appendChild(newCartItem);
    } else if (addedItems.includes(itemToAdd)) {
      itemToAdd.quantityInCart += 1;
      const x = document.getElementById(`quantityInCart-${itemToAdd.id}`);
      x.innerHTML = `<p id="quantityInCart-${itemToAdd.id}" class="card-text"><small class="text-muted">Количество в корзине: ${itemToAdd.quantityInCart} шт.</small></p>`;
    }
  }
  console.log(addedItems);
  // console.log(addedItems.length);
  console.log(addedItems[1].quantityInCart);
  // const totalQuantity = addedItems.map((accumulator, curr) => accumulator + curr.quantityInCart);
  const totalQuantity = 0;
  for (let i = 0; i < addedItems.length; i += 1) {
    console.log(addedItems[i].quantityInCart);
    totalQuantity += addedItems[i].quantityInCart;
  }
  console.log(totalQuantity);
};

allProd();
