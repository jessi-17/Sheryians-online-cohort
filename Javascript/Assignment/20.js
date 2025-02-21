// Find First Non-Repeating Character – Ask the user for a word
// and find the first character that does not repeat. Example: hello
// → h (since e, l, and o repeat).
// function nonRepeating(str) {
//     for (let i = 0; i < str.length; i++) {
//         let char = str[i];
//         if (str.indexOf(char) === str.lastIndexOf(char)) {
//             return char; // Return first non-repeating character
//         }
//     }
//     return "No unique character found";
// }

// let word = prompt("Enter a word: ");
// console.log(nonRepeating(word));



function FirstNonReapeatingCharacter(str){
    let freq = {}; //we created a object!
    for(let i = 0;i<str.length;i++){
        let char = str[i]; //then we started store the element in char one by one!
        if(freq[char] === undefined){  //checking if it is the frist time or it is already in the object! //if not then asssign 1; as the initial object is empty!
            freq[char] =1;
        }else{  //if it is  increment!
            freq[char]++;
        }
    }
    for(let i=0;i<str.length;i++){//this for loop for prining the first non repeating character
        if(freq[str[i]] === 1){
            return str[i];
        }
    }
    return "No unique character found";
}
let word1 = prompt("Enter a word: ");
console.log(FirstNonReapeatingCharacter(word1));