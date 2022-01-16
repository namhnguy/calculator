let firstNum = '';
let secondNum = '';
let firstOp = '';
let firstOpPresent = false;
let firstMath = false;
let equalSignPressed = false;

function operate(num1, num2, operator) {
    if (operator === "+") {
        return num1 + num2;
    }
    if (operator === "-") {
        return num1 - num2;
    }
    if (operator === "*") {
        return num1 * num2;
    }
    if (operator === "/") {
        if (num2 === 0) {
            return "Cannot divide by zero";
        }
        return num1 / num2;
    }
    return "Something went wrong";
}

function clear() {
    firstNum = '';
    secondNum = '';
    firstOp = '';
    firstOpPresent = false;
    firstMath = false;
    currentDisplay.textContent = '0';
    prevDisplay.textContent = '';
    equalSignPressed = false;
}

function numberButton(string) {
    if (equalSignPressed) {
        clear();
        firstNum += string;
        currentDisplay.textContent = firstNum;
        return;
    }
    if (firstMath) {
        secondNum = '';
        firstMath = false;
    }
    if (firstOpPresent) {
        if (secondNum === '0') {
            secondNum = string;
            currentDisplay.textContent = secondNum;
            return;
        }
        secondNum += string;
        currentDisplay.textContent = secondNum;
        return;
    }
    if (firstNum === '0') {
        firstNum = string;
        currentDisplay.textContent = firstNum;
        return;
    }
    firstNum += string;
    currentDisplay.textContent = firstNum;
}

function operatorButton(operator) {
    if (firstMath) {
        secondNum = '';
    }
    if (firstOpPresent && secondNum !== '') {
        let answer = operate(parseInt(firstNum), parseInt(secondNum), firstOp);
        currentDisplay.textContent = answer;
        if (answer === "Cannot divide by zero") {
            firstNum = '';
            secondNum = '';
            firstOp = '';
            firstOpPresent = false;
            firstMath = false;
            prevDisplay.textContent = '';
            return;
        }
        firstNum = answer;
        firstMath = true;
    }
    firstOp = operator;
    prevDisplay.textContent = firstNum + ' ' + firstOp;
    firstOpPresent = true;
    equalSignPressed = false;
}

const btn0 = document.querySelector('#calc-0');
const btn1 = document.querySelector('#calc-1');
const btn2 = document.querySelector('#calc-2');
const btn3 = document.querySelector('#calc-3');
const btn4 = document.querySelector('#calc-4');
const btn5 = document.querySelector('#calc-5');
const btn6 = document.querySelector('#calc-6');
const btn7 = document.querySelector('#calc-7');
const btn8 = document.querySelector('#calc-8');
const btn9 = document.querySelector('#calc-9');
const btnDivide = document.querySelector('#calc-divide');
const btnTimes = document.querySelector('#calc-times');
const btnMinus = document.querySelector('#calc-minus');
const btnPlus = document.querySelector('#calc-plus');
const btnEqual = document.querySelector('#calc-equal');
const btnDecimal = document.querySelector('#calc-decimal');
const btnClear = document.querySelector('#calc-clear');
const btnDelete = document.querySelector('#calc-delete');
const prevDisplay = document.querySelector('.previous-calc');
const currentDisplay = document.querySelector('.current-calc');

btn0.addEventListener('click', function () {
    if (equalSignPressed) {
        clear();
        firstNum += '0';
        currentDisplay.textContent = firstNum;
        return;
    }
    if (firstMath) {
        secondNum = '';
        firstMath = false;
    }
    if (firstOpPresent) {
        secondNum += '0';
        if (secondNum.startsWith('0')) {
            secondNum = '0';
        }
        currentDisplay.textContent = secondNum;
        return;
    }
    firstNum += '0';
    if (firstNum.startsWith('0')) {
        firstNum = '0';
    }
    currentDisplay.textContent = firstNum;
})

btn1.addEventListener('click', () => numberButton('1'));

btn2.addEventListener('click', () => numberButton('2'))

btn3.addEventListener('click', () => numberButton('3'))

btn4.addEventListener('click', () => numberButton('4'))

btn5.addEventListener('click', () => numberButton('5'))

btn6.addEventListener('click', () => numberButton('6'))

btn7.addEventListener('click', () => numberButton('7'))

btn8.addEventListener('click', () => numberButton('8'))

btn9.addEventListener('click', () => numberButton('9'))

btnDivide.addEventListener('click', () => operatorButton('/'))

btnTimes.addEventListener('click', () => operatorButton('*'))

btnMinus.addEventListener('click', () => operatorButton('-'))

btnPlus.addEventListener('click', () => operatorButton('+'))

btnEqual.addEventListener('click', function () {
    if (firstNum !== '' && secondNum !== '' && firstOp !== '') {
        let answer = operate(parseInt(firstNum), parseInt(secondNum), firstOp);
        prevDisplay.textContent = firstNum + ' ' + firstOp + ' ' + secondNum + ' =';
        currentDisplay.textContent = answer;
        if (answer === "Cannot divide by zero") {
            firstNum = '';
            secondNum = '';
            firstOp = '';
            firstOpPresent = false;
            firstMath = false;
            prevDisplay.textContent = '';
            return;
        }
        firstNum = answer;
        firstMath = true;
        equalSignPressed = true;
    }
})

btnClear.addEventListener('click', clear);

btnDelete.addEventListener('click', function () {
    if (firstOpPresent) {
        secondNum = secondNum.slice(0, -1);
        if (secondNum === '') {
            currentDisplay.textContent = '0';
            return;
        }
        currentDisplay.textContent = secondNum;
    }
    else {
        firstNum = firstNum.slice(0, -1);
        if (firstNum === '') {
            currentDisplay.textContent = '0';
            return;
        }
        currentDisplay.textContent = firstNum;
    }
})