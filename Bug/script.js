
function doubleCartQuantity(){
    let cart=[1,2,3,4,5];
        // Loop through each item in the cart array
    for(let i=0;i<cart.length;i++){
        // Double the quantity of the current item
        cart[i]*=2;
    }
    // Return the updated cart array
    return cart;
}
console.log(doubleCartQuantity());
