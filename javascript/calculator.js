function add(a, b){
    return a + b;
}
function subtract(a, b){
    return a - b;
}
function multiply(a, b){
    return a * b;
}
function divide(a, b){
    if(b == 0) {
        return "undefined";
    }
    return a / b;
}

// num op num
// 0. if necessary, check for edge cases
// 1. take the first number, store it
// 2. take the operator, store it
// 3. take the third number, store it
// 4. call the correct function depending on the operator, if not a correct operator, throw error

function operate(operator, a, b){
    switch(operator){
        case '+':
            return add(a, b);
        break;
        case '-':
            return subtract(a, b);
        break;
        case '*':
            return multiply(a, b);
        break;
        case '/':
            return divide(a, b);
        break;
        default:
    }
}

const numberOne = 0;
const operator ='/';
const numberTwo = 1;

let result = operate(operator, numberOne, numberTwo);
console.log(result);
