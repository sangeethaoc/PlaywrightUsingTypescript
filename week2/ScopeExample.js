var week1 = "Javascript"

function playwright(){
    if(week1 === "Javascript")
        console.log("Inside the function - var : " +week1);
    let val = true
    console.log("Inside the function - let : " +val);
    const pi = 3.14
    console.log("Inside the function - const : " +pi);
}

playwright();
console.log("Outside the function - var : " +week1);
//console.log("Outside the function - let : " +val); // block scoped
// block scoped//console.log("Outside the function - const : " +pi); =
