// Swapping Without Third Variable – Take two numbers from the user and swap their values without using a third variable.

// a = a +b;
// b = a-b;
// a = a-b;

// let a = 5, b = 10;
let a = parseInt(prompt("Enter first number: "))
let b= parseInt(prompt("Enter second number: "))
console.log("Before swap: a =", a, ", b =", b);

a = a + b; 
b = a - b; 
a = a - b; 

console.log("After swap: a =", a, ", b =", b);