const displayResult = document.querySelector('.currentResults span');
const calculatorElements = document.querySelectorAll('.element');

const buttonEqual = document.querySelector('.equal');
const buttonDel = document.querySelector('.del');
const buttonReset = document.querySelector('.reset');

const allInputsRadio = document.querySelectorAll('.containerInputs input');
const radioOne = document.getElementById('switch1');


// functions

function clearsErrorMessage() {
    if (displayResult.textContent === 'Error') displayResult.textContent = '';
}

function calculateResult() {
    try {
        const result = eval(displayResult.textContent);
        displayResult.textContent = isNaN(result) ? 'Error' : result;
    } catch (error) {
        displayResult.textContent = 'Error';
    }
}

function deleteLastDigit() {
    clearsErrorMessage();
    
    displayResult.textContent = displayResult.textContent.slice(0, -1);
}

function clearDisplay() {
    displayResult.textContent = '';
}

function checkSpecialCharacter(caractere) {
    const lastChar = displayResult.textContent[displayResult.textContent.length - 1];
    const operators = ['+', '-', '*', '/'];

    if (operators.includes(caractere) && operators.includes(lastChar)) {
        return;
    }

    displayResult.textContent += caractere;
}

// adds classes signaling the current theme

(function () {
    const themes = {
        switch1: 'themeOne',
        switch2: 'themeTwo',
        switch3: 'themeThree'
    };

    if (radioOne.checked) {
        document.querySelector('body').classList.add('themeOne');
    }

    allInputsRadio.forEach(input => {
        input.addEventListener('click', () => {
            const selectedTheme = themes[input.id];
            document.body.className = '';
            document.body.classList.add(selectedTheme);
        });
    });
}());


// events

calculatorElements.forEach(element => {
    element.addEventListener('click', () => {
        clearsErrorMessage();

        checkSpecialCharacter(element.textContent);
    });
});

buttonEqual.addEventListener('click', () => {
    calculateResult();
});

buttonDel.addEventListener('click', () => {
    deleteLastDigit();
});

buttonReset.addEventListener('click', () => {
    clearDisplay();
});

window.addEventListener('keydown', (event) => {
    event.preventDefault();
    let key = event.key;

    clearsErrorMessage();

    if (key === 'Enter') {
        calculateResult();
    }

    if (key === 'Backspace') {
        deleteLastDigit();
    }

    const validCharacters = '0123456789+-*/';

    if (validCharacters.includes(key)) {
        checkSpecialCharacter(key)
    }
});