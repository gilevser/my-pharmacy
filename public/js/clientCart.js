// const itemsArray = localStorage.getItem('items');
console.log('hellou', itemsArray);
console.log(products);

for (const item of itemsArray) {
  const node = document.createElement('p');
  const textnode = document.createTextNode(`${item}`);
  node.appendChild(textnode);
  document.getElementById('cart-items').appendChild(node);
}
