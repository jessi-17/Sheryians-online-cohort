function fnlimiter(fn,limit){
    limitcounter = 0;
    return function(){
        if(limitcounter<limit){
            limitcounter++;
            fn();
        }
    }
}

let limiter=  fnlimiter(function(){
    console.log("hey");
},3);

limiter();
limiter();
limiter();
limiter();
limiter();