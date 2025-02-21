// User Greeting – Ask for the user's name and time (24-hour
// format). Greet them accordingly:

// 5 AM–12 PM: "Good Morning, [Name]!"

// 12 PM–5 PM: "Good Afternoon, [Name]!"

// 5 PM–9 PM: "Good Evening, [Name]!"

// 9 PM–5 AM: "Good Night, [Name]!"


function greeting(name,time){
    let timeparts = time.split(':');
    let hours = parseInt(timeparts[0]);
    // let minutes = parseInt(timeparts[1]);

    if(hours>=5 && hours < 12){
        console.log(`Welcome ${name} !. Good Morning`)
    }
    else if(hours>=12 && hours < 18){
        console.log(`Welcome ${name} !. Good Afternoon`)
    }
    else if(hours>=18 && hours <=21){
        console.log(`Welcome ${name} !. Good Evening`)
    }
    else{
        console.log(`Welcome ${name} !. Good night`)
    }
}

let username = prompt("Enter you name!");
let time = prompt("Enter you time in this format(hh::mm)")
greeting(username,time);