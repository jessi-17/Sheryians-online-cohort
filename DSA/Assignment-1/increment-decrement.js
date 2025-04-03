// 1. Increment Operations
let i = 11;
i = i++ + ++i; // i = 11 + 12 (i after increment) 
// Output: 24
// console.log(i); // Output: 24


// 2. Multiple Increments and Additions
let a = 11;
let b = 22;
let c;

// The expression evaluates as follows:
// c = 11 + 22 + 11 + 23 + 13 + 24
c = a + b + a++ + b++ + ++a + ++b; 
// Output:
// console.log(a); // Output: 13
// console.log(b); // Output: 24
// console.log(c); // Output: 103


// 3. Decrement and Increment Complex Operations
let j = 0;
j = j++ - --j + ++j - j--; 
// Output: -1
// console.log(j); // Output: -1


// 4. Boolean Increment
let s = true;
s++; // true is treated as 1
// console.log(s); // Output: 2


// 5. Sequential Decrements
let x = 1, y = 2, z = 3;
let w = x-- - y-- - z--; // w = 1 - 2 - 3
// After execution:
// x becomes 0, y becomes 1, z becomes 2
// Output:
// console.log("x=" + x); // Output: x=0
// console.log("y=" + y); // Output: y=1
// console.log("z=" + z); // Output: z=2
// console.log("w=" + w); // Output: w=-4


// 6. Increment and Decrement Mixed Operations
let p = 1, q = 2;
// The expression evaluates as follows:
// Result = (1 - 2) + (3 - 0) 
// Output: 0 
// console.log(--q - ++p + ++q - --p); // Output: 0 


// 7. Complex Nested Increments and Decrements
let alpha = 19, beta = 29, gamma;
gamma = alpha-- - alpha++ + --beta - ++beta + --alpha - beta-- + ++alpha - beta++;
// Output:
// console.log("alpha=" + alpha); // Output: alpha=19
// console.log("beta=" + beta); // Output: beta=29
// console.log("gamma=" + gamma); // Output: gamma=-20


// 8. Invalid Expression
let g = 11;
// let h = --(g++); // This code throws an error as --(num++) is invalid.
// console.log(h);


// 9. Zero Multiplication with Pre-Decrement
let apple = 0, banana = 0;
let cherry = --apple * --banana * banana-- * apple--; 
// Output: 1
// console.log(cherry); // Output: 1


// 10. Complex Expression Mixing Increment and Decrement
let mango = 1;
mango = mango++ + ++mango * --mango - mango--; 
// Output: 5
// console.log(mango); // Output: 5


// 11. Invalid Increment
// let mango = 11++; // This line would cause an error because you cannot increment a literal.
// console.log(mango); // ERROR


// 12. Complex Product of Decrements
let tiger = 0, lion = 0;
// Output: 1
// console.log(--tiger * tiger++ * ++lion * lion++); // Output: 1