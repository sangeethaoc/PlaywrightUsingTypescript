//replace->replaces a specified value with another value in a string
let value="Javascript"
let newValue=value.replace("Java","Type")
//Javascript to Typescript
console.log(newValue)

//replaceAll->replaces all occurrences of a specified value with another value in a string
let val="Java Script Java"
let newVal=val.replaceAll("a","Type")
console.log(newVal)

let data ="2025 wlecome to Javascript 2026 TEST @%^&"
let newData=data.replaceAll(/[a-zA-Z]/g,"")
//^ -> retain the values mentioned after ^
console.log(newData)


data = "2025 Welcome to Javascript 2026 @%^&";
newData = data.replaceAll(/[^0-9 ]/g, "");
console.log("newData : " + newData);

let newData1 = data.replaceAll(/[^a-zA-Z ]/g, "");
console.log("newData1 : " + newData1);

//Substring
console.log("Substring : " + newData1.substring(0,8));
console.log("Substring : " + newData1.substring(12));

//slice-> extracts the parts of a string and returns the extracted parts in a new string
//can take both +ve & -ve index values also
let str1="Automation"
console.log(str1.slice(-4))
//10-4=6
console.log(str1.slice(-4,-1))
//10-4 =6,10-1=9(6,9-1)


let price="8908"
let num=parseInt(price)
console.log(typeof num  +num)