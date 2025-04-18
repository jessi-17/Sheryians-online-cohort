
// // 1.. Problem Statement: Indian Currency Notes Breakdown
// let amount;
// //amount = parseInt(prompt("Enter any amount in Indian Currency: "));
// let count = {};
// let denominations = [2000, 500, 200, 100, 50, 20, 10, 5, 2, 1];

// for (let i = 0; i < denominations.length; i++) {
//     if (amount >= denominations[i]) {
//         count[denominations[i]] = Math.floor(amount / denominations[i]);
//         amount %= denominations[i]; // Update remaining amount
//     }
// }

// // Display the result
// for (let note of denominations) {
//     console.log(`₹${note} x ${count[note] || 0}`);
// }




// 2.Write a program to accept rating of the movie as double and Movie name as String. 

// let movie_name = prompt("Enter the name of the movie: ");
// let rating = parseFloat(prompt("Enter you rating."));

// rating.toFixed(1);

// if(rating >= 0.0 && rating <=2.0){
//     console.log(`${movie_name} is flop`);

// }else if(rating >= 2.1 && rating <=3.4){
//     console.log(`${movie_name} is Semi-hit`);

// }else if(rating >= 3.5 && rating <=4.5){
//         console.log(`${movie_name} is Hit`);
// }else{
//         console.log(`${movie_name} is SuperHit`);
// }




//3. Write a program to calculate the salary as per the following table


let gender = prompt("Enter your gender as (MALE / FEMALE)");
let qualification = prompt("Enter your education background (pg/ug)");
let experience = parseInt(prompt("Enter the no. of years of experience"));

if(gender === "MALE"){
    if(qualification === "graduate"){
        if(experience<10){
            console.log("Your salary is: 7000"  )

        }else if(experience>=10){
            console.log("Your salary is: 10000"  )

        }else{
            console.log("enter a valid response");
        }

    }else if(qualification === "post-graduation"){
        if(experience<10){
            console.log("Your salary is: 10000"  )

        }else if(experience>=10){
            console.log("Your salary is: 15000"  )

        }else{
            console.log("enter a valid response");
        }

    }else{
        console.log("Enter a valid response")
    }


}else if(gender === "FEMALE"){
    if(qualification === "graduate"){
        if(experience<10){
            console.log("Your salary is: 7000"  )

        }else if(experience>=10){
            console.log("Your salary is: 10000"  )

        }else{
            console.log("enter a valid response");
        }

    }else if(qualification === "post-graduation"){
        if(experience<10){
            console.log("Your salary is: 10000"  )

        }else if(experience>=10){
            console.log("Your salary is: 12000"  )

        }else{
            console.log("enter a valid response");
        }

    }else{
        console.log("Enter a valid response")
    }

}else{
    console.log("Enter a valid response.")
}