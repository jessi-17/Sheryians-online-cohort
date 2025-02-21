// Palindrome Checker – Ask the user for a word. Check if it reads the same forward and backward. Print“Palindrome” or “Not a Palindrome.”

function pallindrome(word) {
  // let reversed = word.split('').reverse( ).join('');
  let reversed = "";
  for (let i = word.length - 1; i >= 0; i--) {
    reversed += word[i];
  }
  if (word === reversed) {
    console.log("Palindrome");
  } else {
    console.log("Not a Palindrome");
  }
}
let word = prompt("Enter a String: ");
pallindrome(word);