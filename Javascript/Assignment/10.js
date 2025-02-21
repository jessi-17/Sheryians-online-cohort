// Multiplication Table – Ask the user for a number and print its multiplication table up to 10.

// 2 * i = 2 * i;
const num = parseInt(prompt("Enter a number"));
for(let i = 0;i<=10 ; i++){
    console.log(`${num} * ${i} = ${num * i}`)
}