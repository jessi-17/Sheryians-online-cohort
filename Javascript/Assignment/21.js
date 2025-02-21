// Even Digit Counter – Take a number from the user and count how many even digits it has.


function EvenDigitCounter(num){
    let count = 0
    // let arr = []
    let n = num;
    while(n>0){
        let digit = n%10;
        // arr.push(digit)
        if(digit%2 === 0){
            count++;
        }
        n = Math.floor(n / 10);
    }
    return `the number of even digits in ${num} is ${count}`;
}

let num = parseInt(prompt("Enter a number:"));
console.log(EvenDigitCounter(num));

//123
//count = 0;
//arr = []
//123%10 = 3
// arr = [3]
//3is not even
//count = 0

//12
//count =0 
//arr = [3]
//12%10 = 2
//arr = [3,2]
// 2 is even
//count = 1

//1 