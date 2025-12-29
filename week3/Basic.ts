let myName = "Sangeetha";
console.log("This is typescript example");
console.log("Welcome " + myName);

let age : number = 28;
if(age > 18)
    console.log("Adult");
else
    console.log("Not an adult");


function add(a : number, b: number) : number{
    return a+b;
}

console.log("Addition : " + add(5, 4));

function addName(name : string): string{
    return "Hi " + name;
}

console.log(addName("Sangee"));

let isPresent : string | boolean | undefined | null;
console.log(isPresent);
isPresent = "Yes";
console.log(isPresent);
isPresent = true;
console.log(isPresent);
isPresent = null;
console.log(isPresent);