// Simple Calculator – Ask the user for two numbers and an operator (+, -, *, /). Perform the operation and display the result.


const Simple_Calculator = (a,b,expr) =>{
    switch(expr){
        case '+':
            console.log(`${a} + ${b} = ${a+b}`)
            break;
        case '-':
            console.log(`${a} - ${b} = ${a-b}`)
            break;
        case '*':
            console.log(`${a} * ${b} = ${a*b}`)
            break;
        case '/':
            console.log(`${a} / ${b} = ${a/b}`)
            break;
        default:
            console.log("Enter a valid experssion!")
    }
    
}

let a = parseInt(prompt("Enter a number:"))
let b = parseInt(prompt("Enter a number:"))
let expr = prompt("Enter the arthimetic operator: (+,-,/,*)")
Simple_Calculator(1,2,expr);