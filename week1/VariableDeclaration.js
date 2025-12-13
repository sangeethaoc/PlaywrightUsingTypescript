//var - Reassign and Redeclare - Both Possible
var companyName = "Testleaf";
console.log("companyName : "+companyName);
console.log("typeof companyName : "+ typeof companyName);
companyName= 1234;
console.log("companyName : "+companyName);
console.log("typeof companyName : "+ typeof companyName);

// Let
// Reassign - Possible
let myName = "Sangeetha";
myName = "Sangee";
console.log("myName : "+myName);

//Redeclaration - Not possible
//let myName = 123;

var count =10
var count = true
//output -10 ,true
console.log(typeof count +"  "+ count)


//ES6 -> 2015 -> let and const
//let -> resign value allowed , redeclare not allowed
let batchCount = 110
batchCount=122347987654324n
console.log(typeof batchCount +"  "+ batchCount)

//let userName="dilip"
//let batchCount =120
//output - error -> redeclare not allowed

//const -> resign value not allowed , redeclare not allowed
const pi=3.14
//pi=3.1434
console.log(typeof pi +"  "+ pi)

// ClassRoom 2:

// var num-> 45
// //re-assignment
// //re-declaration

// let empname -> "testing"
// //re-assignment
// //re-declaration

// const final=34
// //re-assignment
// //re-declaration

//var - Reassign and Redeclare - Both Possible
var num = 45;
console.log("typeof num : "+ typeof num + "\n" + "num : "+num);
num = 54;
console.log("typeof num : "+ typeof num + "\n" + "num : "+num);
var num = "hi";

//Let - Reassign - Possible and Redeclare - Not Possible
let empName = "testing";
console.log("typeof empName : "+ typeof empName + "\n" + "empName : "+empName);
empName = "Automation Testing";
console.log("typeof empName : "+ typeof empName + "\n" + "empName : "+empName);
//let empName = 123; //Blocked scope variable cant be declared

//Const - Reassign and Redeclare - Not Possible
const final = 34; //TypeError: Assignment to constant variable.
console.log("typeof final : "+ typeof final + "\n" + "final : "+final);
//final = 43; //Runtime Error
console.log("typeof final : "+ typeof final + "\n" + "final : "+final);
//const final = true; //Blocked scope variable cant be declared

// Home Assignment - 2

// Assignment Requirements:  
// 1. Declare a const name as browserVersion (global) 
// 2. Assign value as Chrome 
// 3. Create a function by name getBrowserVersion 
// 4. Create if condition inside function to check if browser is chrome, then 
// 5. Declare a local variable (browserVersion) and print that variable inside function (outside block) 
// 6. Call that function from the javascript 



let browserNameX = "Global scoped Browser name using let";
var browserNameY = "Global scoped Browser name using var";
const browserVersion = "Chrome";

function getBrowserversion(){
    console.log("browserVersion inside function: "+browserVersion);
    if(browserVersion === "Chrome"){
        let browserVer = "Chrome var inside if block"
    }
    console.log("browserVersion outside block inside function: "+browserVer);
}

function printBrowserDetails(){
    const browserVersion = "Safari";
    console.log("browserVersion inside function: "+browserVersion);
    let browserNameX = "Function scoped Browser name using let";
    var browserNameY = "Function scoped Browser name using var";
    console.log("browserNameX inside function : " + browserNameX);
    console.log("browserNameY inside function : " + browserNameY);
}

getBrowserversion();
printBrowserDetails();
console.log("browserNameX outside function : " + browserNameX);
console.log("browserNameY outside function : " + browserNameY);
console.log("browserVersion outside function : "+browserVersion);

