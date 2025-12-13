let companyName = 'TestLeaf@2025';
let compName = new String("TestLeaf");
let compVision = `The vision of the compani is
            to train Mnual Teasters with latest 
                Automation Technologies`;

console .log("Printing multi-line string : " +compVision)

//Find the length of the string
console.log(`The length of the ${compName} : ` + compName.length);

let msg = "Hello ";
msg = msg + "Word";
console.log("Concatenated String : " + msg);
console.log("First Occurance of letter o : " + msg.indexOf('o'));
console.log("Last Occurance of letter o : " + msg.lastIndexOf('o'));
console.log("Occurance of letter p : " + msg.indexOf('p'));
console.log("Checks Occurance of word Hello : " + msg.includes('Hello'));
console.log("Checks if startsWith letter He : " + msg.startsWith('He'));
console.log("Checks if endsWith letter He : " + msg.endsWith('He'));
console.log("Trim whitespace from both ends of string : " + msg.trim());
console.log("To Uppercase : " + msg.toUpperCase());
console.log("To Lowercase : " + msg.toLowerCase());
console.log("Slice : "+msg.slice(6));
console.log("Substring : "+msg.substring(6, msg.length));

let text = "This is an amazing training session";
const splitText = text.split(" ");
console.log("Split : "+splitText);
for(let i = 0; i < splitText.length; i++)
{
    console.log(splitText[i]);
}

//Equality

// Strict Equality - Checks for both data type and value
console.log("Strict Equality : " + ("5" == 5));
// Loose Equality - Checks only value - No type check
console.log("Loose Equality : " + ("5" === 5));