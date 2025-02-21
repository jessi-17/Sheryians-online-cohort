// Number Reversal – Take a three-digit number from the user and print its reverse. (Example: 123 → 321).

const reversing = (num) =>{
    let reverse = 0
    while(num>0){
        let last_digit = num%10;
        reverse = reverse*10 + last_digit
        num = Math.floor(num /10)
    }
    return reverse;
}

let num = parseInt(prompt("Enter a number:"))
console.log(reversing(num))

// 123
// 123%10 = 3
//0+3 = 3

//12
//12%10 = 2
//3*10 + 2 = 32

//1
//1%10 = 1
//32*10 + 1 = 321

//0
