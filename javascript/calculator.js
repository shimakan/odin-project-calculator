const container = document.querySelector(".container");
const display = document.getElementById('calculator-display');
let currentInput = '';
let previousInput = '';
let operator = null;

function updateDisplay(value){
    const maximumDisplayLength = 10;
    const displayDiv = display;
    if(value.length > maximumDisplayLength){
        displayDiv.style.fontSize = '1.5rem'; // shrink font size
    } else{
        display.style.fontSize = '2rem'; // default
    }
    display.textContent = value || '0';
}

document.querySelectorAll('.button').forEach(button => {
    button.addEventListener('click', () => {
        const value = button.dataset.value;
        if(value === 'clear'){
            // reset all values
            currentInput = '';
            previousInput = '';
            operator = null;
            updateDisplay('0');
        }
        else if(!isNaN(value) || value === '.'){
            if(currentInput.length < 10){
             // to prevent clipping
             currentInput += value;
             updateDisplay(currentInput);
            }else{
                alert('number cannot exceed ten digits');
            }
        }
        else if(['+', '-', '*', '/'].includes(value)){
            if(currentInput){
                previousInput = currentInput;
                currentInput = '';
            }
            operator = value;
        } else if (value === '='){
            if(previousInput && currentInput && operator){
                const result = operate(operator, parseFloat(previousInput), parseFloat(currentInput));
                updateDisplay(result);
                previousInput = result.toString();
                currentInput = '';
                operator = null;
            }
        }
    })
});

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
            return 0;
    }
}