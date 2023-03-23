let calculateRent=(days,type)=>{
    switch(type){
        case "economy":console.log(`Rent is: ${days*4000}`);
        break;
        case "midsize":console.log(`Rent is: ${days*10000}`);
        break;
        case "luxury":console.log(`Rent is: ${days*20000}`);
        break;
        default:console.log("Invalid Car Type");
    }  
}
let days=10;
let type="luxury";
calculateRent(days,type);