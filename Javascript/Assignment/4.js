// Largest of Three Numbers – Take three numbers as input and print the largest number among them without using Math.max().

// function(n)

// var largest_of_3 = function() =>

const largest_of_3 = (a,b,c) =>{
    if(a>b && a>c){
        console.log(`${a} is greater than ${b} and ${c}.`)
    }else if(b>a && b>c){
        console.log(`${b} is greater than ${a} and ${c}.`)
    }else{
        console.log(`${c} is greater than ${a} and ${b}.`)
    }
}
let a = prompt("Enter the number 1");
let b = prompt("Enter the number 2");
let c = prompt("Enter the number 3");
console.log(largest_of_3(4,7,2));

