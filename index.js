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
 cart.push({itemName: item, itemPrice:  Math.floor(Math.random() * 100) });
 return `${item} has been added to your cart.`;
}



function viewCart() {
  // write your code here
  if (!cart.length){
    return "Your shopping cart is empty."
  }

  const priceList = new Array();
  for (var i=0; i<cart.length; i++){
    priceList.push(`${cart[i].itemName} at ${cart[i].itemPrice}`)
  }
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
