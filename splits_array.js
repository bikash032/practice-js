let products = [
    "iphone 12",//this is data neither is information
    "apple",
    10,
    15,
    130000
]
let after_discount = products[4] - products[4] * products[2] / 100;
console.log(after_discount)//this resukt  only we know 
// to make clearly with information we use object data type array
console.log('')

let product_1 = {
    name: "iphone 12",
    brand: "apple",
    discount: 10,
    stock: 15,
    price: 130000
}
let discount_after=product_1['price']-product_1['price']*product_1['discount']/100;//we can use such type of object so that if we 
//console.log(discount_after);                                                       // define any where data then actually we can use data 
product_1.discount_after=product_1;
console.log(product_1);
console.log(typeof discount_after);
delete product_1.name;
console.log(product_1); 
console.log(typeof product_1);
let keys = Object.keys(product_1);
console.log(keys);
let values = Object.values(product_1)
console.log(values);




