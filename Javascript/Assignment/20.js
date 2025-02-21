// Find First Non-Repeating Character – Ask the user for a word
// and find the first character that does not repeat. Example: hello
// → h (since e, l, and o repeat).
function nonRepeating(str) {
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (str.indexOf(char) === str.lastIndexOf(char)) {
            return char; // Return first non-repeating character
        }
    }
    return "No unique character found";
}

let word = prompt("Enter a word: ");
console.log(nonRepeating(word));