function greetsetup(way){
    return function(name){
        console.log(`${way}` + ' ' +  `${name}`);
    }
}
var IndianGreet = greetsetup("Namaste");
IndianGreet("JESSI");