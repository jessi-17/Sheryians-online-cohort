var button = document.querySelector("button");
var status2 = document.getElementById("status");
var check = 0;

button.addEventListener("click",function(){
        if(check=== 0){
        status2.innerHTML = "Friends";
        status2.style.color = "green";
        button.innerHTML = "remove";
        check = 1
        }else{
            status2.innerHTML = "stranger";
            status2.style.color = "yellow";
            button.innerHTML = "lets chat"
            check = 0
        }
    })

var num = Math.floor(Math.random()*100);
console.log(num);



var h1 = document.getElementsByClassName("c-h1");
var box2 = document.getElementsByClassName("box");
var button2 = document.getElementsByClassName("c-btn");

// Assuming you want to target the first button and box in the list
button2[0].addEventListener("click", function() {
    var c1 = Math.floor(Math.random() * 256);
    var c2 = Math.floor(Math.random() * 256);
    var c3 = Math.floor(Math.random() * 256);
    box2[0].style.backgroundColor = `rgb(${c1}, ${c2}, ${c3})`;
});


const img1 = document.querySelector("#img1")
const img2 = document.querySelector("#img2")
const btn4 = document.getElementById("btn4")
btn4.addEventListener("click",function(){
    let img1src = img1.getAttribute("src")
    let img2src = img2.getAttribute("src")
    img1.setAttribute('src',img2src)
    img2.setAttribute('src',img1src)
})


