//function should not run beofre 2 sec after the previcous function is running


function throttling(fn,delay){

    let lastcall = 0;
    return function(){
        let current = Date.now();
        if(current-lastcall >= delay){
            lastcall = current;
            fn();
        }
    }
}
var running= 
throttling(function(){
    console.log("hey!")
},3000);

running();
running();
running();
running();
running();
running();
running();
