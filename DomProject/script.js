// ========== Card Section Rendering ========== //
const sections = [
  //instead of this optimized way 
  //we have to create for elements that selcts the class element and then we have to create an array with the image url and then we ahve add the for ach loop the array to create those card
  //but here we are using this object which has three key vallue pair
  //classname , iamges folder name , no of images

  { className: "Gcards", images: "gradientbackgrounds", count: 10 },
  { className: "Acards", images: "ambient worlds", count: 12 },
  { className: "Pcards", images: "placesbg", count: 6 },
  { className: "Mcards", images: "Minimalistic", count: 5 }
];

//wee took those obj and then created those cards with the help of for each and we dont have to do it 4 times just this can work

sections.forEach(({ className, images, count }) => {
  const container = document.getElementsByClassName(className)[0];
  let cardsHTML = "";
  for (let i = 1; i <= count; i++) {
    cardsHTML += `
      <div class="card">
        <img src="Images/${images}/${i}.jpg" alt="bg-${i}">
        <p>Pink gradient</p>
      // </div>`;
  }
  container.innerHTML = cardsHTML;
});

// ========== Background Change on Card Click ========== //
setTimeout(() => {
  document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("click", () => {
      const imgSrc = card.querySelector("img").src;
      main.style.transition = "all 0.5s cubic-bezier(0.19, 1, 0.22, 1)";
      main.style.backgroundImage = `url('${imgSrc}')`;
    });
  });
}, 100);

// ========== Side Panel Toggle ========== //
document.getElementById("Settings").addEventListener("click", () => {
  overlay.style.transform = "translateX(0)";
  Settings.style.display = "none";
});
document.getElementById("cross").addEventListener("click", () => {
  overlay.style.transform = "translateX(920px)";
  Settings.style.display = "block";
});

// ========== Motivation Quotes ========== //
const motivationQuotes = [
  "🌟 Aisha, you weren’t born to blend in—your light was meant to blind the ordinary.",
  "🌙 Tanya, don’t wait for a sign. You are the sign. Build it, break it, fix it. Repeat.",
  "🔥 Zoya, when the world underestimates you, smile—because they’re just not ready for the storm you are.",
  "🌸 Meher, you don’t need permission to take up space. You are the blueprint, not the backup plan.",
  "⚡ Riya, your doubts are loud—but your potential is louder. Trust the quiet fire inside you.",
  "💫 Naina, the glass ceiling isn’t meant to be feared. You’re here to shatter it—gracefully, and in heels.",
  "🌺 Simran, stop shrinking. Your dreams deserve the whole damn canvas—not the corner of the frame.",
  "🦋 Avni, your pace doesn’t have to match theirs. Slow progress is still rebellion when you refuse to quit.",
  "🪞 Ira, never forget—your power doesn’t come from proving them wrong. It comes from knowing you’re already enough.",
  "🎯 Diya, you’re not overthinking—you’re overbuilding. Keep stacking those bricks; one day they’ll call it an empire."
];

document.getElementsByClassName("motivational_quotes")[0].textContent =
  motivationQuotes[Math.floor(Math.random() * motivationQuotes.length)];

// ========== API Quote ========== //
fetch("https://dummyjson.com/quotes/random")
  .then(res => res.json())
  .then(data => {
    document.getElementById("MainQuotes").textContent = data.quote;
  })
  .catch(error => console.error("Error fetching quote:", error));

// ========== Show/Hide Task Containers ========== //
const taskList = [
  { button: "to-do-list", box: "taskcont_todo" },
  { button: "DailyPlanner", box: "taskcont_DailyPlanner" },
  { button: "Motivation", box: "taskcont_Motivation" },
  { button: "Pomodoro-Timer", box: "taskcont_Pomodoro" },
  { button: "DailyGoals", box: "taskcont_DailyGoals" }
];

const taskButtons = document.querySelector(".Morebuttons");
let currentTask = null;
const containers = {};

taskList.forEach(task => {
  const div = document.createElement("div");
  div.className = "taskcontainer";
  containers[task.box] = div;

  document.getElementById(task.button).onclick = () => {
    if (currentTask === task.box) {
      div.style.display = "none";
      taskButtons.style.gap = "12px";
      currentTask = null;
    } else {
      // taskButtons.style.gap = "50px";
      for (let key in containers) {
        containers[key].style.display = "none";
        if (!main.contains(containers[key])) {
          main.appendChild(containers[key]);
        }
      }
      div.style.display = "block";
      currentTask = task.box;
    }
  };
});
