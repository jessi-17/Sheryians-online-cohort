// Reverse Without String Methods – Ask the user for a number
// and reverse it without using .split(), .reverse(), or .join().


function reversing(word) {
    // let reversed = word.split('').reverse( ).join('');
    let reversed = "";
    for (let i = word.length - 1; i >= 0; i--) {
      reversed += word[i];
    }
    return reversed;
  }
  let word = prompt("Enter a String: ");
  console.log(reversing(word));