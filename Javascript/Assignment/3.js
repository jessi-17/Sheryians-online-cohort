// Character Case Checker – Ask the user for a single character. Check if it's uppercase, lowercase, or neither (not a letter).

let char = prompt("enter the single character:");
if(char>=String.fromCharCode(65) && char <=String.fromCharCode(90)){
    console.log(`${char} is UpperCase`)
}else if(char>=String.fromCharCode(97) && char <=String.fromCharCode(122)){
    console.log(`${char} is LowerCase`)
}else{
    console.log(`${char} is not a letter`)
}

