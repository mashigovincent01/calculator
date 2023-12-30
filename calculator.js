
function add(a, b){
    return a + b;
}

function substract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function power(a, b){
    return Math.pow(a, b);
}

function divide(a, b){
    return a / b;
}

function root(a){
    return Math.pow(a, 0.5);
}


const calculator = {
    add,
    substract,
    divide,
    multiply,
    root,
    power
}

export default calculator;