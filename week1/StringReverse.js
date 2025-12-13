// Reverse string

let myName = "Sangeetha";
let revName = "";

for(let j= myName.length - 1; j>=0 ; j--)
{
    revName = revName + myName[j];
}
console.log("Reversed string is : "+revName);

// One line solution to reverse a string
console.log("Reverse method : "+myName.split("").reverse().join(""));