function counter(){
    let count = 0;
    return function(){
        count++;
        console.log(count);
    };
}

let counter_var = counter();
//the returned function will be stored in couter_var so we will run that fucntion
counter_var();
counter_var();
counter_var();
counter_var();
counter_var();
counter_var();