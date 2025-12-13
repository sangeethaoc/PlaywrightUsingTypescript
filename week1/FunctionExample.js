/** Write a JavaScript function named `isOddOrEven` that takes an integer as input and returns `Odd` if the 
number is odd and `"Even"` if the number is even. */

function isOddOrEven(input){
    if(input % 2 === 0)
        return "The given number is even";
    else
        return "The given number is odd";
}

console.log(isOddOrEven(10));
console.log(isOddOrEven(11.0));

/** Create a JavaScript function that determines if a number is positive, negative, or zero and returns a 
corresponding string indicating the type.  */

function findGivenNumberisPositiveorNegative(input){
    if(input > 0)
        return "The given number is positive";
    else if (input < 0)
        return "The given number is negative";
    else
        return "The given number is zero"
}

console.log(findGivenNumberisPositiveorNegative(5));
console.log(findGivenNumberisPositiveorNegative(-5));
console.log(findGivenNumberisPositiveorNegative(0));

/** Create and call two JavaScript functions: `launchBrowser` with `if-else` for browser launch messages, and 
`runTests` with `switch` for test type messages */

function launchBrowser(browserName){
    if(browserName === "Chrome")
        console.log("Chrome browser launched successfully");
    else
        console.log("No browser found");
}

function runTests(testType){

    switch(testType){
        case "smoke" :
            console.log("Ran smoke testcases successfully");
            break;
        
        case "sanity" :
            console.log("Ran sanity testcases successfully");
            break;

        case "regression" :
            console.log("Ran regression testcases successfully");
            break;

        default:
            console.log("Ran smoke testcases successfully");
            break;
    }

}

launchBrowser("Chrome");
runTests("sanity");

/** Write a JavaScript function that evaluates a student's score and returns their grade using a switch statement 
to assess score ranges.  */

function findStudentGrade(mark){

    var grade;
    switch(true){
        case mark >= 90 && mark <= 100:
            grade = "A+";
            break;
        case mark >= 70:
            grade = "A";
            break;
        case mark >= 50:
            grade = "B";
            break;
        case mark < 50 && mark >= 0:
            grade = "Failed";
            break;
        default:
            grade = "Given mark is invalid";   
    }
    return grade;
}

console.log(findStudentGrade(-1));