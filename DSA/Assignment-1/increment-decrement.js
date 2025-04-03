
// 1.  
let i=11;
i = i++ + ++i;
// console.log(i); output- 24


//2.
let a = 11;
let b = 22;
let c;

c = a+b + a++ + b++ + ++a + ++b;
// console.log(a)
// console.log(b)
// console.log(c)

// output: 13
// output: 24
// output: 103

//3. 
let j = 0;
j = j++ - --j + ++j - j--;
// console.log(j);

//4. 
let s = true;
s++;
// console.log(s);


//5.
let x = 1, y = 2, z = 3;

let w = x-- - y-- - z--;

// console.log("x=" + x);
// console.log("y=" + y);
// console.log("z=" + z);
// console.log("w=" + w);
// output:
// x=0
// y=1
// z=2
// w=-4

//6 .

let p = 1, q = 2;

// console.log(--q - ++p + ++q - --p);
//output: 0 

//7 

let alpha = 19, beta = 29, gamma;

gamma = alpha-- - alpha++ + --beta - ++beta + --alpha - beta-- + ++alpha - beta++;

// console.log("alpha=" + alpha);  
// console.log("beta=" + beta);
// console.log("gamma=" + gamma);
// output:- 
// alpha=19
// beta=29
// gamma=-20


//8. 
let g = 11;
// let h = --(g++)
// console.log(h)
// , this code will throw an error in JavaScript because --(num++) is not a valid syntax. The reason is that post-increment (num++) returns the original value before incrementing, and trying to pre-decrement (--) a returned value directly is not allowed.

//9. 
let apple = 0, banana = 0;
let cherry = --apple * --banana * banana-- * apple--;
// console.log(cherry);
//output: 1

// 10
// let mango = 1;
// mango = mango++ + ++mango * --mango - mango--;
// console.log(mango);
//output: 5

//11
// let mango = 11++;
// console.log(mango);
//error

// 12.
let tiger = 0, lion = 0;
// console.log(--tiger * tiger++ * ++lion * lion++);
//output: 1