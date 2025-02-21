// Simple Login System – Set a predefined username and
// password. Ask the user to enter their credentials using
// prompt(). If correct, print “Login Successful”; otherwise, print
// “Incorrect username or password.”

let username = 'kunwar'
let password = 26324;

let dname = prompt("Enter your name:")
let pass = parseInt(prompt("Enter your password"))

if(username === dname && password === pass){
    console.log("Login Successful")
}else{
    console.log("Incorrect username or password.");
}