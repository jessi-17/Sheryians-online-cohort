function OrderFood(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            const randomnum = Math.random<0.7;
            if(randomnum){
                res();
            }
            else{
                rej();
            }
            
        },2000);
    })
}

OrderFood().then(function(){
    console.log("Food Delivered!!")
}).catch(function(){
    console.log("Food not Delivered!!")
})



function FakeApiCall(endpoint){
    const data= {
        users: ["jessi","kunwar","raghav"],
        posts: ["ok","cool","dffdg","gdfgd"],
    };
    let delay = Math.random()*2000 + 1000;
    return new Promise(function(res,rej){
        setTimeout(() => {
            res(data[endpoint]);
        }, delay);
    })
}

FakeApiCall("users").then(function(data){
    console.log(data);
})