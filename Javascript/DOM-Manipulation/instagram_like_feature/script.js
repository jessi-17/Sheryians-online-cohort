const btn = document.querySelector("#heart");
const bigheart = document.querySelector("#big-heart");
btn.addEventListener("dblclick",function(){
    console.log("hello");
    btn.style.color = "red";
    bigheart.style.opacity = "1";
    
    setTimeout(() => {
        bigheart.style.opacity = "0";
    }, 800);
})