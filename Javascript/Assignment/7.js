// Positive, Negative, or Zero – Take a number input and check if it is positive, negative, or zero.


function Findint(num){
    if(num>0){
        console.log(`${num} is a positive`);
    }else if(num<0){
        console.log(`${num} is a negative`);
    }else{
        console.log(`${num}. its a Zero!`);
    }
}

let num = parseInt(prompt("Enter any number:"));
console.log(Findint(num));
