const display = document.querySelector('input');
const numBtn = document.querySelector('.num');
const oprBtn = document.querySelector('.opr');
const clearBtn = document.querySelector('.clear-btn');

let calculation = localStorage.getItem('calculation') || '';

/*
This feature has some bugs

document.body.addEventListener('keydown', (event) => {
    if (event.key == '0' || event.key == '1' || event.key == '2' || event.key == '3' || event.key == '4' || event.key == '5' || event.key == '6' || event.key == '7' || event.key == '8' || event.key == '9' || event.key == '+' || event.key == '-' || event.key == '*' || event.key == '/'){
        calculation += event.key;
        display.value = calculation;
    }
    if(event.key === "Backspace") {
        calculation = calculation.slice(0,-1);
        display.value = calculation;
    }
})
*/

const typeBtn = (str) => {
    calculation += str;
    display.value = `${calculation}`;
}

clearBtn.addEventListener('click', () => {
    calculation = '';
    display.value = '';
})

const solution = () => {
    calculation = eval(calculation);
    if(!Number.isInteger(calculation)){
        calculation = calculation.toFixed(3);
    }
    display.value = `${calculation}`;
    localStorage.setItem('calculation',calculation);
}

const storeAnswer = () => {
    localStorage.setItem('calculation', calculation);
}

