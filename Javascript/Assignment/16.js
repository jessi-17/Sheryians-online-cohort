// Sum of Digits – Take a number from the user and print the sum of its digits. (Example: 123 → 1+2+3 = 6).


const sumofdigit = (num) =>{
    let sum = 0
    while(num>0){
        let last_digit = num%10;
        sum += last_digit
        num = Math.floor(num /10)
    }
    return sum;
}

let num = parseInt(prompt("Enter a number:"))
console.log(sumofdigit(num))

// sum = 0
// 123 % 10 = 3
// sum = 0 + 3  => 3
// 123/10 = 12

// sum = 3
//2
// sum = 3 + 2 = 5 
//1

//sum = 5
//1%10 = 1
//sum = 5 + 1 = 6
//0

