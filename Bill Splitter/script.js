const dishes=[100,120,200,350,75];
const numOfPeople=5;
function billSplitter(dishes,numOfPeople){
    let totalBill=0;
    for(let value of dishes){
        totalBill+=value;
    }
    const billPerPerson=totalBill/numOfPeople;
    return {
        totalCost:totalBill,
        costPerPerson:billPerPerson
    };
}
const bill=billSplitter(dishes,numOfPeople);
console.log(bill);