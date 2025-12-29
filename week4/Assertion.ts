let empName:string = "Sangeetha";

const empFirstName = empName as string;
const empLastName = <string>empName;

console.log("empFirstName : "+empFirstName);