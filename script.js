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
            return;
        }
        currentDisplay.textContent = secondNum;
        return;
    }
    firstNum += '0';
    if (firstNum.startsWith('0')) {
        firstNum = '';
        return;
    }
    currentDisplay.textContent = firstNum;
})

btn1.addEventListener('click', function () {
    if (equalSignPressed) {
        clear();
        firstNum += '1';
        currentDisplay.textContent = firstNum;
        return;
    }
    if (firstMath) {
        secondNum = '';
        firstMath = false;
    }
    if (firstOpPresent) {
        secondNum += '1';
        currentDisplay.textContent = secondNum;
        return;
    }
    firstNum += '1';
    currentDisplay.textContent = firstNum;
})

btn2.addEventListener('click', function () {
    if (equalSignPressed) {
        clear();
        firstNum += '2';
        currentDisplay.textContent = firstNum;
        return;
    }
    if (firstMath) {
        secondNum = '';
        firstMath = false;
    }
    if (firstOpPresent) {
        secondNum += '2';
        currentDisplay.textContent = secondNum;
        return;
    }
    firstNum += '2';
    currentDisplay.textContent = firstNum;
})

btn3.addEventListener('click', function () {
    if (equalSignPressed) {
        clear();
        firstNum += '4';
        currentDisplay.textContent = firstNum;
        return;
    }
    if (firstMath) {
        secondNum = '';
        firstMath = false;
    }
    if (firstOpPresent) {
        secondNum += '3';
        currentDisplay.textContent = secondNum;
        return;
    }
    firstNum += '3';
    currentDisplay.textContent = firstNum;
})

btn4.addEventListener('click', function () {
    if (equalSignPressed) {
        clear();
        firstNum += '4';
        currentDisplay.textContent = firstNum;
        return;
    }
    if (firstMath) {
        secondNum = '';
        firstMath = false;
    }
    if (firstOpPresent) {
        secondNum += '4';
        currentDisplay.textContent = secondNum;
        return;
    }
    firstNum += '4';
    currentDisplay.textContent = firstNum;
})

btn5.addEventListener('click', function () {
    if (equalSignPressed) {
        clear();
        firstNum += '5';
        currentDisplay.textContent = firstNum;
        return;
    }
    if (firstMath) {
        secondNum = '';
        firstMath = false;
    }
    if (firstOpPresent) {
        secondNum += '5';
        currentDisplay.textContent = secondNum;
        return;
    }
    firstNum += '5';
    currentDisplay.textContent = firstNum;
})

btn6.addEventListener('click', function () {
    if (equalSignPressed) {
        clear();
        firstNum += '6';
        currentDisplay.textContent = firstNum;
        return;
    }
    if (firstMath) {
        secondNum = '';
        firstMath = false;
    }
    if (firstOpPresent) {
        secondNum += '6';
        currentDisplay.textContent = secondNum;
        return;
    }
    firstNum += '6';
    currentDisplay.textContent = firstNum;
})

btn7.addEventListener('click', function () {
    if (equalSignPressed) {
        clear();
        firstNum += '7';
        currentDisplay.textContent = firstNum;
        return;
    }
    if (firstMath) {
        secondNum = '';
        firstMath = false;
    }
    if (firstOpPresent) {
        secondNum += '7';
        currentDisplay.textContent = secondNum;
        return;
    }
    firstNum += '7';
    currentDisplay.textContent = firstNum;
})

btn8.addEventListener('click', function () {
    if (equalSignPressed) {
        clear();
        firstNum += '8';
        currentDisplay.textContent = firstNum;
        return;
    }
    if (firstMath) {
        secondNum = '';
        firstMath = false;
    }
    if (firstOpPresent) {
        secondNum += '8';
        currentDisplay.textContent = secondNum;
        return;
    }
    firstNum += '8';
    currentDisplay.textContent = firstNum;
})

btn9.addEventListener('click', function () {
    if (equalSignPressed) {
        clear();
        firstNum += '9';
        currentDisplay.textContent = firstNum;
        return;
    }
    if (firstMath) {
        secondNum = '';
        firstMath = false;
    }
    if (firstOpPresent) {
        secondNum += '9';
        currentDisplay.textContent = secondNum;
        return;
    }
    firstNum += '9';
    currentDisplay.textContent = firstNum;
})

btnDivide.addEventListener('click', function () {
    if (firstMath) {
        secondNum = '';
    }
    if (firstOpPresent && secondNum !== '') {
        let answer = operate(parseInt(firstNum), parseInt(secondNum), firstOp);
        currentDisplay.textContent = answer;
        firstNum = answer;
        firstMath = true;
    }
    firstOp = '/';
    prevDisplay.textContent = firstNum + ' ' + firstOp;
    firstOpPresent = true;
    equalSignPressed = false;
})

btnTimes.addEventListener('click', function () {
    if (firstMath) {
        secondNum = '';
    }
    if (firstOpPresent && secondNum !== '') {
        let answer = operate(parseInt(firstNum), parseInt(secondNum), firstOp);
        currentDisplay.textContent = answer;
        firstNum = answer;
        firstMath = true;
    }
    firstOp = '*';
    prevDisplay.textContent = firstNum + ' ' + firstOp;
    firstOpPresent = true;
    equalSignPressed = false;
})

btnMinus.addEventListener('click', function () {
    if (firstMath) {
        secondNum = '';
    }
    if (firstOpPresent && secondNum !== '') {
        let answer = operate(parseInt(firstNum), parseInt(secondNum), firstOp);
        currentDisplay.textContent = answer;
        firstNum = answer;
        firstMath = true;
    }
    firstOp = '-';
    prevDisplay.textContent = firstNum + ' ' + firstOp;
    firstOpPresent = true;
    equalSignPressed = false;
})

btnPlus.addEventListener('click', function () {
    if (firstMath) {
        secondNum = '';
    }
    if (firstOpPresent && secondNum !== '') {
        let answer = operate(parseInt(firstNum), parseInt(secondNum), firstOp);
        currentDisplay.textContent = answer;
        firstNum = answer;
        firstMath = true;
    }
    firstOp = '+';
    prevDisplay.textContent = firstNum + ' ' + firstOp;
    firstOpPresent = true;
    equalSignPressed = false;
})

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