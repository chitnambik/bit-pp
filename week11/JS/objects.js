// 1.	Create a function that takes an array of objects (groceries) which calculates the total price and returns it as a number. 
// A grocery object has a product, a quantity and a price, for example:
// {
//   "product": "Milk",
//   "quantity": 1,
//   "price": 1.50
// }
 
function showPrice(){
    result = 0
    const array =
    [{ product: 'Milk',
        quantity: 1, 
        price: 1.5
    }, 
    {
        product: 'Chocolate',
        quantity: 2, 
        price: 3.5
    }]
    result = array.price 
    return result
}
console.log(showPrice())