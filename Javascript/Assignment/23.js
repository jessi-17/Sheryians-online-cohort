// Toggle Case – Ask the user for a word and toggle the case of
// every character. Example: HeLLo → hEllO.

//uppercase
// String.fromCharCode(65) -> A
// String.fromCharCode(90) -> Z

//charcodeAt(0);

//lowercase
// String.fromCharCode(97) -> a
// String.fromCharCode(122) -> z

//32
//add to conver  to lowercase
//subtract to convert to uppercase

let str = prompt("Enter a string: ");
let asciicode = [];
for(let i=0;i<str.length;i++){
    asciicode.push(str.charCodeAt(i));
}
console.log(asciicode);
let newarr=[]
for(let i=0;i<str.length;i++){
    if(asciicode[i]>=65 && asciicode[i]<=90){
        //that means only the uupercase one
        //so we have to add 32 to each to covert them to lowercase
        newarr.push(asciicode[i]+32);
    }else if(asciicode[i]>=97 && asciicode[i]<=122){
        newarr.push(asciicode[i]-32);
    }else{
        newarr.push(asciicode[i]);
    }
}
console.log("Modified ASCII code:",newarr);
let newstr = "";

for(let i =0;i<newarr.length;i++){
    newstr += String.fromCharCode(newarr[i]);
}

console.log("Modified String:",newstr);