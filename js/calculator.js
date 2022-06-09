var numberInProcess;
var operatorInProcess;
var operation = [];


function addSymbol(symbol){
    if(numberInProcess === undefined && operatorInProcess === undefined){
        numberInProcess = symbol;
        document.getElementById("display").innerHTML = numberInProcess;
    }
    else if(numberInProcess === undefined && operatorInProcess !== undefined){
        operatorInProcess = symbol;
        document.getElementById("display").innerHTML = operatorInProcess;
    }
    else{
        operation.push(numberInProcess);
        numberInProcess = undefined;
        operatorInProcess = symbol;
        document.getElementById("display").innerHTML = operatorInProcess;
        console.log(operation);
    }
}

function addDigit(digit){
    if(numberInProcess === undefined){
        if(operatorInProcess !== undefined){
            operation.push(operatorInProcess);
            operatorInProcess = undefined;
        }
        numberInProcess = digit;
    }
    else{
        numberInProcess += `${digit}`;
    }
    document.getElementById("display").innerHTML = numberInProcess;
}

function equal(){
    if(numberInProcess !== undefined){
        operation.push(numberInProcess);
        numberInProcess = undefined;
    }
    if(operatorInProcess !== undefined){
        operatorInProcess = undefined;
    }
    let response = 0;
    response += +operation[0];
    let operator;
    let number;

    for(let i = 1; i < operation.length; i++){
        if(i%2 === 0){
            number = +operation[i];
            if(operator === "+"){
                response += number;
            }
            else if(operator === "-"){
                response -= number;
            }
            else if(operator === "*"){
                response *= number;
            }
            else if(operator === "/"){
                response /= number;
            }
        }
        else{
            operator = operation[i];
        }
    }
    if(!Number.isInteger(response)){
        document.getElementById("display").innerHTML = response.toFixed(2);
    }
    else{
        document.getElementById("display").innerHTML = response;
    }
    operation = [];
    numberInProcess = response;
}

function clearAll(){
    numberInProcess = undefined;
    operatorInProcess = undefined;
    operation = [];
    document.getElementById("display").innerHTML = "0";
}

function back(){
    if(numberInProcess !== undefined){
        numberInProcess = numberInProcess.substring(0, numberInProcess.length - 1);
        document.getElementById("display").innerHTML = numberInProcess;
    }
    if(operatorInProcess !== undefined){
        document.getElementById("display").innerHTML = '';
    }
}