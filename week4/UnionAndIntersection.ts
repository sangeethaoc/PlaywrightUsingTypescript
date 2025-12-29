let statusCode: number | string;

statusCode = 123;

console.log("type of : "  + typeof statusCode);

statusCode = "123";

console.log("type of : "  + typeof statusCode);

type empDetails = {
    empName: string,
    empID: number
}

type adminDetails = {
    adminName: string,
    adminID?: number
}

type c= empDetails & adminDetails;

let details: c = {
    empName: "Sangeetha",
    empID: 123456,
    adminName: "Varsid",
    // adminID: 56789
}

console.log("Details : " + details);

function displayDetails(empName: string, empID: number, adminName: string, adminID?: number)
{
    console.log(`empName : ${empName}`);
}