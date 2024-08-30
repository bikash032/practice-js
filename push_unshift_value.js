let products = [];
size = products.length;
let product_1 = ["iphone", "Apple", 123000, 10, "oliz store"];
products.push(product_1); // add the value in last position
//console.log(products);
let product_2 = ["iphone 13", "Apple ", 124000, 9, "dev store"];
let product_3 = ["iphone 14", "Apple", 125000, 10, "rita store"];
let product_4 = ["iphone 15", "Apple", 130000, 10, "gita store"];
let product_5 = ["iphone 16", "Apple", 1400000, 10, "sangita store"];
products.push(product_2);
products.unshift(product_3);// push value in 0 position
//console.log(products);
products.push(product_4);//add value in 3rd position
products[5]=product_5;// create gap  place in 4th position
//console.log(products);
let product_6=["iphone 17", "Apple",150000,11,"rangita store"];
products[4]=product_6// add the value in 4th empty space
console.log(products);