//when return statement is reached, the function stops and
//returns to where it was called

function myFun() {
    console.log("Hello");
    return "world";
    console.log("byebye");
}

myFun();