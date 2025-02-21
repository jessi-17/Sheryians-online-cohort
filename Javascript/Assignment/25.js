// Convert Number to Words – Take a single-digit number and
// print it in words (Example: 1 → One, 2 → Two).
function numberToWord(num) {
    switch (num) {
        case 0: return "Zero";
        case 1: return "One";
        case 2: return "Two";
        case 3: return "Three";
        case 4: return "Four";
        case 5: return "Five";
        case 6: return "Six";
        case 7: return "Seven";
        case 8: return "Eight";
        case 9: return "Nine";
        default: return "Invalid input";
    }
}

let number = parseInt(prompt("Enter a single-digit number: "));
console.log(numberToWord(number));