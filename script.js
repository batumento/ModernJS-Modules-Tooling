//import { addToCard, totalPrice as price, dd } from './//shoppingCart.js';
//
//console.log('importing');
//
//addToCard('bR', 65);
//console.log(price, dd);

//import * as ShoppingCart from './shoppingCart.js';

import { addToCard, cart } from './shoppingCart.js';
addToCard('Ekmek', 15);
addToCard('burger', 98);
addToCard('Elma', 25);

console.log(cart);

//console.log('start fetching');
//const res = await fetch('https://jsonplaceholder.typicode.com///posts');
//const json = await res.json();
//console.log(json);
//console.log('Something');

//Top-level Await kullanım faydaları
const getLastPost = async function () {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();
  console.log(data);
  return { title: data.at(-1).title, text: data.at(-1).body };
};

const lastPost = await getLastPost();
console.log(lastPost);

//Module Pattern

const ShoppingCart2 = (function () {
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 237;
  const totalQuantity = 23;

  const addToCard = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`${quantity} ${product} added to cart`);
  };

  const orderStock = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`${quantity} ${product} ordered from supplier`);
  };

  return {
    addToCard,
    cart,
    totalPrice,
    totalQuantity,
  };
})();

ShoppingCart2.addToCard('Elmac', 15);
ShoppingCart2.addToCard('Plati', 45);
ShoppingCart2.addToCard('Altind', 25);
console.log(ShoppingCart2);
console.log(ShoppingCart2.shippingCost);
