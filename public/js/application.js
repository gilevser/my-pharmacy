console.log('Клиентский js');

// const addButtons = document.querySelectorAll('.addToCartBtn');
const cartCounter = document.querySelector('.cart-count');
// const counter = 0;
const products = document.querySelector('.products');
const signout = document.getElementById('signout');
const emptyCart = document.querySelector('.cartIs');

// используем local storage https://fix-it-problems.ru/wiki/detail.php?ELEMENT_ID=85
const itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : []; // проверим наличие доступного localStorage
localStorage.setItem('items', JSON.stringify(itemsArray));
const data = JSON.parse(localStorage.getItem('items'));
let counter = data.length;

products?.addEventListener('click', async (e) => { // слушатель на весь большой div с продуктами
  // console.log('=====>', e.target.id);
  if (e.target.tagName === 'BUTTON') { // находим кнопку
    // добавляем в local storage id товаров по нажатию на кнопку:
    itemsArray.push(e.target.id);
    localStorage.setItem('items', JSON.stringify(itemsArray));
    // крутим счетчик товаров в корзине по нажатию на кнопку:
    counter += 1;
    cartCounter.innerHTML = counter;

    // скрываем текст о том, что корзина пуста
    // ! не работает =(
    // console.log(emptyCart);
    // emptyCart.visibility = 'hidden';
  }
});

cartCounter.innerHTML = data.length;

// обнуляем local storage при выходе из ЛК
signout?.addEventListener('click', (e) => {
  localStorage.clear();
});
