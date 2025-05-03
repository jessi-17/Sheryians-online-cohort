const btn = document.getElementById("btn");
const progcontainer = document.getElementById("prog-container");
const progressbar = document.getElementById("progress-bar");
const growth = document.getElementById("growth");
var grow = 0;
const percent = document.getElementById("percent")
btn.addEventListener("click",function(){
    let prog = setInterval(function(){
        grow++;
        percent.innerHTML = grow + "%";
        growth.style.width = grow + "%";
    },100);

    setTimeout(() => {
        clearInterval(prog)
        btn.innerHTML = "Downloaded";
        btn.style.backgroundColor="pink";
        btn.style.width = "50%";
    }, 10000);

})