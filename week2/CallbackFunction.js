//Order Food
//Food Ready
//Eat Food
//Call back function -> Function which calls another function inside
// Main Function - orderFood() -> which calls other 2 function

function orderFood(callback){
    console.log("Food ordered");
    setTimeout(() => {
        foodReady(callback)
    }, 4000)
}

function foodReady(callback){
    console.log("Food ready");
    callback();
}

function eatFood(){
    console.log("Eat Food");
}

orderFood(eatFood);