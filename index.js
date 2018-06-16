var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 getCart().push({itemName: item, itemPrice:  Math.floor(Math.random() * 100) });
 return `${item} has been added to your cart.`;
}



function viewCart() {
  // write your code here
  return getCart().length === 0 ? "Your shopping cart is empty." : generateCartDescription()
}

function generateCartDescription(){
  const statement = "In your cart, you have ";
  if (getCart().length >= 1){
    statement += `${getCart()[0].itemName} at $${getCart()[0].itemPrice}`
  }
  if (getCart().length >= 2)
  for (var i=1; i<cart.length - 1; i++){
    statement += `, ${getCart()[i].itemName} at ${getCart()[i].itemPrice}`
  }
  return `${statement}.`
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
