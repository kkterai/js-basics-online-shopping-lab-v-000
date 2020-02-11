var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random() * 101);
var object= {itemName: item, itemPrice: price};
cart.push(object);
return &#96;${item} has been added to your cart.&#96;;

}

function viewCart() {
  var arr = [];


  for( var i = 0; i< cart.length; i++){

     arr.push(&#96;${cart[i].itemName} at $${cart[i].itemPrice}&#96;);}

   if(cart.length === 0){
     return "Your shopping cart is empty.";}

    else if(cart.length === 1){
    return &#96;In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.&#96;;

  }
  else if(cart.length === 2){
    return  &#96;In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.&#96;;

  }else{
   var last = arr.pop();
   return &#96;In your cart, you have ${arr.join(', ')}, and ${last}.&#96;;
  }
  }


function total() {
  var ar = [];
  for(var i = 0; cart.length > i; i++){
    ar.push(cart[i].itemPrice);}
  return ar.reduce((acc, val) => acc + val, 0);
   }




function removeFromCart(item) {
  for(var i = 0; cart.length > i; i++){
    console.log(item);
    console.log(cart[i].itemName);
  if(item === cart[i].itemName){
    cart.splice(i, 1);
    return cart;
  }else{
    return &#96;That item is not in your cart.&#96;;
  }
  }
}

function placeOrder(cardNumber) {
  // write your code here
}
