// Nested Condition Challenge – Ask the user for their age and
// salary. Print a message based on conditions:

// -> If age is below 18, print “Not eligible”

// -> If age is 18 or more but salary is less than ₹20,000, print “Low
// Salary”

// -> If salary is ₹50,000 or more, print “High Salary” Otherwise, print “Medium Salary”


let username = prompt("Enter your name: ");
let userage = parseInt(prompt("Enter your age"));
let userSalary = parseInt(prompt("Enter your salary: "))

if(userage<18){
    console.log("Not eligible")
}else{
    // if(userage>=18){
        if(userSalary<20000){
            console.log("Low Salary!")
        }else if( userSalary>=50000){
            console.log("High Salary")
        }else{
            console.log("Medium Salary!")
        }
    // }
}