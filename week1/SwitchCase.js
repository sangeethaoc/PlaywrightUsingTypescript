let browserName = "Chrome"

switch (browserName) {
    case "Chrome":
        console.log("The browser is Chrome.")
        break

    case "Edge":
        console.log("The browser is Edge.")
        break

    case "Firefox":
        console.log("The browser is Firefox.")
        break   

    default:
        console.log("No browser found.")
        break
}

let dayNumber = 2;
let dayName;

switch(dayNumber){
    case 1:
        dayName = "Sunday";
        break;
    case 2:
        dayName = "Monday";
        break;
    case 3:
        dayName = "Tuesday";
        break;
    case 4:
        dayName = "Wednesday";
        break;
    case 5:
        dayName = "Thursday";
        break;
    case 6:
        dayName = "Friday";
        break;
    case 7:
        dayName = "Saturday";
        break;
    default :
        dayName = "";
}

console.log("Day name for the give day number is : "+dayName);