let cart=[{unitPrice:10,quantity:5},{unitPrice:15,quantity:10},{unitPrice:20,quantity:15}];
let totalCostOfItems=(cart)=>{
    totalCost=0;
    for(let item of cart){
        
        totalCost+=item.unitPrice*item.quantity;
        console.log(item)
        }
    return totalCost;
}
let cost=totalCostOfItems(cart);
console.log(cost);