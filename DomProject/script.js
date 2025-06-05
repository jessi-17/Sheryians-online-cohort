let Gcards = document.getElementsByClassName("Gcards");
let Acards = document.getElementsByClassName("Acards");
let Pcards = document.getElementsByClassName("Pcards");
let Mcards = document.getElementsByClassName("Mcards");
let main = document.getElementById("main");

const gradient_image_arr=[
    {
        src:"Images/gradientbackgrounds/1.jpg" ,
    },
    {
        src:"Images/gradientbackgrounds/2.jpg",
    },
    {
        src:"Images/gradientbackgrounds/3.jpg",
    },
    {
        src:"Images/gradientbackgrounds/4.jpg",
    },
    {
        src:"Images/gradientbackgrounds/5.jpg",
    },
    {
        src:"Images/gradientbackgrounds/6.jpg",
    },
    {
        src:"Images/gradientbackgrounds/7.jpg",
    },
    {
        src:"Images/gradientbackgrounds/8.jpg",
    },
    {
        src:"Images/gradientbackgrounds/9.jpg",
    },
    {
        src:"Images/gradientbackgrounds/10.jpg",
    },
]
const ambient_image_arr = [
  { src: "Images/ambient worlds/1.jpeg" },
  { src: "Images/ambient worlds/2.jpg" },
  { src: "Images/ambient worlds/3.jpg" },
  { src: "Images/ambient worlds/4.jpg" },
  { src: "Images/ambient worlds/5.jpg" },
  { src: "Images/ambient worlds/6.jpg" },
  { src: "Images/ambient worlds/7.jpg" },
  { src: "Images/ambient worlds/8.jpg" },
  { src: "Images/ambient worlds/9.jpg" },
  { src: "Images/ambient worlds/10.jpg" },
  { src: "Images/ambient worlds/11.jpg" },
  { src: "Images/ambient worlds/12.jpg" },
];
const places_image_arr = [
  { src: "Images/placesbg/1.jpg" },
  { src: "Images/placesbg/2.jpg" },
  { src: "Images/placesbg/3.jpg" },
  { src: "Images/placesbg/4.jpg" },
  { src: "Images/placesbg/5.jpg" },
  { src: "Images/placesbg/6.jpg" },
];
const Minimalist_image_arr = [
  { src: "Images/Minimalistic/1.jpg" },
  { src: "Images/Minimalistic/2.jpg" },
  { src: "Images/Minimalistic/3.jpg" },
  { src: "Images/Minimalistic/4.jpg" },
  { src: "Images/Minimalistic/5.jpg" },
];

gradient_image_arr.forEach(element => {
    Gcards[0].innerHTML += `
                            <div class="card">
                            <img src="${element.src}" alt="1st">
                            <p>Pink gradient</p>
                        </div>
    `
});

ambient_image_arr.forEach(element=>{
        Acards[0].innerHTML += `
                            <div class="card">
                            <img src="${element.src}" alt="1st">
                            <p>Pink gradient</p>
                        </div>
    `
})
places_image_arr.forEach(element=>{
        Pcards[0].innerHTML += `
                            <div class="card">
                            <img src="${element.src}" alt="1st">
                            <p>Pink gradient</p>
                        </div>
    `
})
Minimalist_image_arr.forEach(element=>{
        Mcards[0].innerHTML += `
                            <div class="card">
                            <img src="${element.src}" alt="1st">
                            <p>Pink gradient</p>
                        </div>
    `
})

setTimeout(() => {
    let allCards = document.querySelectorAll(".card");
    allCards.forEach(card=>{
        card.addEventListener("click",function(){
        const image_url = card.querySelector('img');
        console.log("Clicked Image URL:", image_url.src);
        main.style.transition="all 0.5s  cubic-bezier(0.19, 1, 0.22, 1)";
    main.style.backgroundImage = `url('${image_url.src}')`;
    });
    })
}, 100);


let overlay = document.getElementById("overlay");

let button = document.getElementById("Settings");

let cross = document.getElementById("cross");

button.addEventListener("click",()=>{
    overlay.style.transform ="translateX(0)";
    button.style.display = "none";
})

cross.addEventListener("click",()=>{
    overlay.style.transform ="translateX(920px)";
    button.style.display = "block";
})



let motivation_quotes = [ "🌟 Aisha, you weren’t born to blend in—your light was meant to blind the ordinary.",

 "🌙 Tanya, don’t wait for a sign. You are the sign. Build it, break it, fix it. Repeat.",

 "🔥 Zoya, when the world underestimates you, smile—because they’re just not ready for the storm you are.",

 "🌸 Meher, you don’t need permission to take up space. You are the blueprint, not the backup plan.",

 "⚡ Riya, your doubts are loud—but your potential is louder. Trust the quiet fire inside you.",

 "💫 Naina, the glass ceiling isn’t meant to be feared. You’re here to shatter it—gracefully, and in heels.",

 "🌺 Simran, stop shrinking. Your dreams deserve the whole damn canvas—not the corner of the frame.",

 "🦋 Avni, your pace doesn’t have to match theirs. Slow progress is still rebellion when you refuse to quit.",

 "🪞 Ira, never forget—your power doesn’t come from proving them wrong. It comes from knowing you’re already enough.",

 "🎯 Diya, you’re not overthinking—you’re overbuilding. Keep stacking those bricks; one day they’ll call it an empire."]

let quotes = document.getElementsByClassName("motivational_quotes");

 let random_num = Math.floor(Math.random()*10+1);
//  console.log(random_num);
quotes[0].innerHTML = motivation_quotes[random_num];

let MainQuotes = document.getElementById("MainQuotes");
let qq = fetch('https://dummyjson.com/quotes/random')
.then(res => res.json())
.then(data=>{
    MainQuotes.textContent = data.quote;
}).catch(error => console.error('Error fetching quote:', error));

let taskcont = document.getElementsByClassName("taskcontainer")

let ToDoList = document.getElementById("to-do-list")
let DailyPlanner = document.getElementById("DailyPlanner")
let Motivation = document.getElementById("Motivation")
let Pomodoro = document.getElementById("Pomodoro-Timer")
let DailyGoals = document.getElementById("DailyGoals")