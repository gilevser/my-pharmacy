console.log('Клиентский js');

// const addButtons = document.querySelectorAll('.addToCartBtn');
const cartCounter = document.querySelector('.cart-count');
// const counter = 0;
const products = document.querySelector('.products');
const signout = document.getElementById('signout');
const cartItems = document.getElementById('cart-items');

// используем local storage https://fix-it-problems.ru/wiki/detail.php?ELEMENT_ID=85
const itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : []; // проверим наличие доступного localStorage
localStorage.setItem('items', JSON.stringify(itemsArray));
const data = JSON.parse(localStorage.getItem('items'));
let counter = data.length;

products?.addEventListener('click', async (e) => { // слушатель на весь большой div с продуктами
  console.log('=====>', e.target.id);
  if (e.target.tagName === 'BUTTON') { // находим кнопку
    // добавляем в local storage id товаров по нажатию на кнопку:
    itemsArray.push(e.target.id);
    localStorage.setItem('items', JSON.stringify(itemsArray));
    // крутим счетчик товаров в корзине по нажатию на кнопку:
    counter += 1;
    cartCounter.innerHTML = counter;

    // достаем добавленный товар
    const productsResult = await fetch('/main/fetch', {});
    const allProducts = await productsResult.json();
    const allProductsArr = allProducts.products;
    const addedItem = allProductsArr.find((product) => product.id == e.target.id);
    console.log(addedItem);

    // добавляем в корзину добавленный товар
    // const node = document.createElement('p');
    // const textnode = document.createTextNode(`${addedItem.title}`);
    // node.appendChild(textnode); // отлавливаю название добавленного товара
    // console.log(node.appendChild(textnode));
    // document.getElementById('cart-items').appendChild(node);
    // ! не получается так добавить в корзину =(
  }
});

cartCounter.innerHTML = data.length;

// обнуляем local storage при выходе из ЛК
signout?.addEventListener('click', (e) => {
  localStorage.clear();
});
