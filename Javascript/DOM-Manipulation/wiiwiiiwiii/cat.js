var btn = document.querySelector('button');
var body =document.querySelector("body");

btn.addEventListener("click",function(){

    var x = Math.random()*100;
    var y = Math.random()*100;
    var rot = Math.random()*360;
    var height = Math.random()*300;
    // console.log(x);
    var img = document.createElement('img');
    img.setAttribute('src','cat.png');
    img.setAttribute('class','image');
    img.style.height = height + "px";
    img.style.position = 'absolute';
    img.style.left = x+"%";
    img.style.top = y+"%";
    img.style.rotate = rot +"deg";
    img.style.zIndex = "0";
    body.appendChild(img);
})