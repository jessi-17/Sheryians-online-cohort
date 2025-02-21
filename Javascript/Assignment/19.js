// Find Second Largest – Take three numbers as input and find the second largest number (without using sort() or Math.max()).


function Second_largest(a, b, c) {
    if (a === b && b === c) {
        return "No second largest number (all values are the same)";
    }

    if ((a > b && a < c) || (a > c && a < b)) {
        return a;
    } else if ((b > a && b < c) || (b > c && b < a)) {
        return b;
    } else {
        return c;
    }
}

let num1 = parseInt(prompt("Enter any Number 1: "));
let num2 = parseInt(prompt("Enter any Number 2: "));
let num3 = parseInt(prompt("Enter any Number 3: "));

let sl = Second_largest(num1, num2, num3);
console.log(`The second largest number is: ${sl}`);
