// Leap Year Checker – Ask the user for a year and determine if
// it's a leap year or not.


function leap_year(year){
    if(year%4 === 0 && year % 100 != 0 || year%400 === 0){
        console.log(`${year} is a leap year`);
    }else{
        console.log(`${year} is not a leap year`);
    }
};

let year = prompt("Enter any year:");
console.log(leap_year(year));