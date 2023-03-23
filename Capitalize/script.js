let Name=String(prompt("Enter Your Name"));
let serName=String(prompt("Enter Your Name"));
let updatedeName=Name.charAt(0).toLowerCase()===Name.charAt(0)?Name.charAt(0).toUpperCase()+Name.slice(1):Name;
let updatedeserName=serName.charAt(0).toLowerCase()===serName.charAt(0)?serName.charAt(0).toUpperCase()+serName.slice(1):serName;
console.log(`${updatedeName} ${updatedeserName}`);