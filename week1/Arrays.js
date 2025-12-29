//[] -> Array
let fruits = ["Apple", "Mango", "Grapes", "Guava"];
console.log(fruits);
console.log(fruits[0]);
console.log(fruits[4]);
fruits[0] = "PineApple";
console.log(fruits);
console.log("Length : " +fruits.length);
fruits.push("Kiwi");
console.log(fruits);
fruits.pop();
console.log(fruits);
fruits.unshift("Kiwi");
console.log(fruits);
fruits.shift();
console.log(fruits);
console.log("Index : " + fruits.indexOf("Grapes"));
console.log("Index : " + fruits.indexOf("Grapes1"));
console.log("Includes : " + fruits.includes("Grapes"));
console.log("Slice : " + fruits.slice(-2, undefined));

fruits.forEach(fruit => {
    console.log(fruit);
});

for (const fruit of fruits){
    console.log(fruit);
}

// let numbers = [0,1,2,3,4,5,6,7,8,9];
// console.log("Square Array : " + numbers.map(n => n * n));
// console.log("Even Array : "+ numbers.filter(n => n % 2 === 0));
// console.log("Sum : "+ numbers.reduce((total, n) => total + n, 0));

// // To uppercase
// const message = "Playwright";

// for(const char of message){
//     console.log(char.toUpperCase());
// }

// // Print Duplicate
// let num1 = [12, 24, 35, 46, 57, 12, 78, 89, 12];

// for(let i=0; i<num1.length; i++){
//     for(let j=i+1; j< num1.length; j++){
//         if(num1[i] === num1[j])
//             console.log(num1[i]);
//     }
// }

// let num = [12, 24, 35, 46, 57, 12, 78, 89, 12, 24, 35];
// let counts = {};
// const duplicates = new Set();

// for(let i=0; i<num.length; i++){
//     for(let j=i+1; j< num.length; j++){
//         if(num[i] === num[j])
//             duplicates.add(num[i]);
//     }
// }

// console.log("Duplicate Elements : " + [...duplicates].join(", "));
