var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price  = Math.floor(Math.random() * 101);
  var object = {itemName: item, itemPrice: price};
  cart.push(object);
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
  // var arr = [];
  for( var i = 0; i< cart.length; i++){
    //  arr.push(`${cart[i].itemName} at $${cart[i].itemPrice}`);

     if(cart.length === 0){
       return "Your shopping cart is empty.";
     } else if(cart.length === 1) {
       return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`;
     } else if(cart.length === 2) {
       return  `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`;
     }else{
       var last = cart.pop();
       return `In your cart, you have ${cart.join(', ')}, and ${last}.`;
     }
  }
}

// function total() {
//   var ar = [];
//   for(var i = 0; cart.length > i; i++){
//     ar.push(cart[i].itemPrice);
//   }
//   return ar.reduce((acc, val) => acc + val, 0);
// }
//
//
// function removeFromCart(item) {
//   for(var i = 0; cart.length > i; i++) {
//     if(item === cart[i].itemName){
//       cart.splice(i, 1);
//       return cart;
//     } else {
//       return `That item is not in your cart.`;
//     }
//   }
// }
//
// function placeOrder(cardNumber) {
//   // write your code here
// }
