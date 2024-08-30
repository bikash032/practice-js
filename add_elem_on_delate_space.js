let fruits = ["apple", "banana", "cherry", "date", "elderberry"];
let splicedFruits = fruits.slice(2, 3, "fig", "grape"); // Removes 2 elements from index 2 and adds "fig" and "grape"
console.log(splicedFruits); // Output: ["cherry", "date"]
console.log(fruits); // Output: ["apple", "banana", "fig", "grape", "elderberry"]
