//Export
console.log('Exporting');

//console.log('Start fetching users');
//await fetch('https://jsonplaceholder.typicode.com/posts');
//console.log('Finish Fetching users');

const shippingCost = 10;
export const cart = [];
export const addToCard = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${product} ${quantity} added to cart`);
};

const totalPrice = 555;
const totalQuantity = 33;

export { totalPrice, totalQuantity as dd };
