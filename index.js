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
  for (var i=0; i<cart.length; i++){
    priceList.push(`${cart[i].itemName} at ${cart[i].itemPrice}`)
  }
  return `${}`
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
