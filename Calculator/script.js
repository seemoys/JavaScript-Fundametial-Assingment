let num1=Number(prompt("Enter the first number :"));
let task=prompt("Select among this 4 operator: +,-,*,/");
let num2=Number(prompt("Enter the second number :"));
let result;
switch(task){
    case "+":{
        result=num1+num2;
        console.log(`${num1} + ${num2} = ${result}`);
        break;
    }
    case "-":{
        result=num1-num2;
        console.log(`${num1} - ${num2} = ${result}`);
        break;
    }
    case "*":{
        result=num1*num2;
        console.log(`${num1} * ${num2} = ${result}`);
        break;
    }
    case "/":{
        result=num1/num2;
        console.log(`${num1} / ${num2} = ${result}`);
        break;
    }
    default:{
        console.log("Enter Valid Input")
    }
}