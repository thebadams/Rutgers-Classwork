//WRITE YOUR CODE BELOW
var customerOrder = {
    drinkName: "Coffee",
    sugarNum: 0,
    isReady: true

};

console.log(`${customerOrder.drinkName} with ${customerOrder.sugarNum} sugars.`);

if(customerOrder.isReady) {
    console.log("Your Order is Read");
} else {
    console.log("Order is Still in Queue.");
}