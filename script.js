import calculator from "./calculator.js";
var num1 = 0, num2 = 0, operator = "";

function operate(op, n1, n2){
    if(op === '+'){
        return calculator.add(n1, n2);
    }
    else if(op === '-'){
        return calculator.substract(n1, n2);
    }
    else if(op === '*'){
        return calculator.multiply(n1, n2);
    }
    else if(op === '/'){
        return calculator.divide(n1, n2);
    }
}