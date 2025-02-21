// Even or Odd Sum – Take two numbers from the user using
// prompt(). If the sum of both numbers is even, print “Even Sum”;
// otherwise, print “Odd Sum.”



//we can also store these values
let a = prompt("Enter first number: ");
let b = prompt("Enter second number: ");
let sum = parseInt(a) + parseInt(b);
if(sum % 2 == 0){
    console.log("Even Sum");
}else{
    console.log("Odd Sum");
}



