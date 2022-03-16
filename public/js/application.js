console.log('Клиентский js');

// const addButtons = document.querySelectorAll('.addToCartBtn');
const cartCounter = document.querySelector('.cart-count');
// const counter = 0;
const products = document.querySelector('.products');
const signout = document.getElementById('signout');

const itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];
localStorage.setItem('items', JSON.stringify(itemsArray));
const data = JSON.parse(localStorage.getItem('items'));
let counter = data.length;

products?.addEventListener('click', async (e) => { // слушатель на весь большой div с продуктами
  console.log('=====>', e.target.id);
  if (e.target.tagName === 'BUTTON') { // находим кнопку
    counter += 1;
    itemsArray.push(e.target.id);
    localStorage.setItem('items', JSON.stringify(itemsArray));
    cartCounter.innerHTML = counter;
  }
});

cartCounter.innerHTML = data.length;

signout?.addEventListener('click', (e) => {
  localStorage.clear();
});
