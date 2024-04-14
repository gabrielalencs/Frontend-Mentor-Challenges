let password = document.getElementById('password');
const btnCopyPassword = document.getElementById('copy-password');
let numberCharacters = document.getElementById('character-length');
const inputRangeElement = document.getElementById('length-range');
const buttonsCheckbox = document.querySelectorAll('.input-checkbox');
const btnUppercaseLetters = document.getElementById('checkbox-uppercase-letters');
const btnLowercaseLetters = document.getElementById('checkbox-lowercase-letters');
const btnNumbers = document.getElementById('checkbox-numbers');
const btnSymbols = document.getElementById('checkbox-symbols');
const passwordStrenghtText = document.getElementById('password-strenght');
const elementsPasswordLevel = document.querySelectorAll('.password-level-item');
const btnPasswordGenerator = document.getElementById('btn-generator');

const buttonsCheckArr = [...buttonsCheckbox];
const elementStrenghtArr = [...elementsPasswordLevel];



// functions

const calculatePercentageBar = () => {

    const screenWidth = window.innerWidth;

    const percentage = (inputRangeElement.value - inputRangeElement.min) / (inputRangeElement.max - inputRangeElement.min);

    screenWidth > 480
        ? inputRangeElement.style.setProperty('--boxAfterWidth', `${percentage * 95}%`)
        : inputRangeElement.style.setProperty('--boxAfterWidth', `${percentage * 92.5}%`);

};


const showBarValue = () => {

    updatePasswordButtonState();

    let barValue = inputRangeElement.value;

    numberCharacters.textContent = barValue;

};


(function markButtonsChecked() {

    buttonsCheckbox.forEach(btn => {

        btn.addEventListener('click', () => {

            btn.classList.toggle('checked');

        });

    });

}());


const generateUpperCasePassword = (passwordLength) => {

    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    let generatedPassword = '';

    for (let index = 0; index < passwordLength; index++) {

        let randomIndex = Math.floor(Math.random() * alphabet.length);

        generatedPassword += alphabet[randomIndex];

    }

    return generatedPassword;

};


const generateLowerCasePassword = (passwordLength) => {

    const alphabet = 'abcdefghijklmnopqrstuvwxyz';

    let generatedPassword = '';

    for (let index = 0; index < passwordLength; index++) {

        let randomIndex = Math.floor(Math.random() * alphabet.length);

        generatedPassword += alphabet[randomIndex];

    }

    return generatedPassword;

};


const generatePasswordNumbers = (passwordLength) => {

    const numbers = '0123456789';

    let generatedPassword = '';

    for (let index = 0; index < passwordLength; index++) {

        let randomIndex = Math.floor(Math.random() * numbers.length);

        generatedPassword += numbers[randomIndex];

    }

    return generatedPassword;

}


const generatePasswordSymbols = (passwordLength) => {

    const symbols = '!@#$%¨&*()_-+=`{[^~<>:;/?';

    let generatedPassword = '';

    for (let index = 0; index < passwordLength; index++) {

        let randomIndex = Math.floor(Math.random() * symbols.length);

        generatedPassword += symbols[randomIndex];

    }

    return generatedPassword;

}


const updatePasswordButtonState = () => {

    const algumBotaoMarcado = Array.from(buttonsCheckbox).some(btn => btn.classList.contains('checked'));

    btnPasswordGenerator.disabled = !algumBotaoMarcado;

    buttonsCheckbox.forEach(btn => {

        btn.addEventListener('click', () => {

            if (inputRangeElement.value > 0) {

                updatePasswordButtonState();

            }

        });

    });

}
updatePasswordButtonState();


const generateFinalPassword = () => {

    let passwordAllCharacters = '';

    let finalPasswordGenerated = '';


    if (btnUppercaseLetters.classList.contains('checked')) {
        let functionReturn = generateUpperCasePassword(inputRangeElement.value);

        passwordAllCharacters += functionReturn;
    }

    if (btnLowercaseLetters.classList.contains('checked')) {
        let functionReturn = generateLowerCasePassword(inputRangeElement.value);

        passwordAllCharacters += functionReturn;
    }

    if (btnNumbers.classList.contains('checked')) {
        let functionReturn = generatePasswordNumbers(inputRangeElement.value);

        passwordAllCharacters += functionReturn;
    }


    if (btnSymbols.classList.contains('checked')) {
        let functionReturn = generatePasswordSymbols(inputRangeElement.value);

        passwordAllCharacters += functionReturn;
    }


    for (let index = 0; index < inputRangeElement.value; index++) {
        let randomIndex = Math.floor(Math.random() * passwordAllCharacters.length);

        finalPasswordGenerated += passwordAllCharacters[randomIndex];
    }



    password.classList.add('password-generated');

    password.textContent = finalPasswordGenerated;

};

function checksPasswordLevelBasedRange() {

    passwordStrenghtText.classList.remove('hide');

    if (inputRangeElement.value <= 5) {

        elementStrenghtArr[0].style.backgroundColor = '#f64a4a';
        elementStrenghtArr[0].style.borderColor = '#f64a4a';

        elementStrenghtArr[1].style.backgroundColor = 'transparent';
        elementStrenghtArr[1].style.borderColor = '#E6E5EA';

        elementStrenghtArr[2].style.backgroundColor = 'transparent';
        elementStrenghtArr[2].style.borderColor = '#E6E5EA';

        elementStrenghtArr[3].style.backgroundColor = 'transparent';
        elementStrenghtArr[3].style.borderColor = '#E6E5EA';


        passwordStrenghtText.textContent = 'TOO WEAK';


    } else if (inputRangeElement.value <= 10) {

        elementStrenghtArr[0].style.backgroundColor = '#fb7c58';
        elementStrenghtArr[0].style.borderColor = '#fb7c58';

        elementStrenghtArr[1].style.backgroundColor = '#fb7c58';
        elementStrenghtArr[1].style.borderColor = '#fb7c58';

        elementStrenghtArr[2].style.backgroundColor = 'transparent';
        elementStrenghtArr[2].style.borderColor = '#E6E5EA';

        elementStrenghtArr[3].style.backgroundColor = 'transparent';
        elementStrenghtArr[3].style.borderColor = '#E6E5EA';


        passwordStrenghtText.textContent = 'WEAK';


    } else if (inputRangeElement.value <= 15) {

        elementStrenghtArr[0].style.backgroundColor = '#f8cd65';
        elementStrenghtArr[0].style.borderColor = '#f8cd65';

        elementStrenghtArr[1].style.backgroundColor = '#f8cd65';
        elementStrenghtArr[1].style.borderColor = '#f8cd65';

        elementStrenghtArr[2].style.backgroundColor = '#f8cd65';
        elementStrenghtArr[2].style.borderColor = '#f8cd65';

        elementStrenghtArr[3].style.backgroundColor = 'transparent';
        elementStrenghtArr[3].style.borderColor = '#E6E5EA';


        passwordStrenghtText.textContent = 'MEDIUM';


    } else if (inputRangeElement.value > 15) {

        elementStrenghtArr.forEach(element => {
            element.style.backgroundColor = '#a4ffaf';
            element.style.borderColor = '#a4ffaf';
        });

        passwordStrenghtText.textContent = 'STRONG';

    }

}


const checkPasswordLevel = () => {

    for (const iterator of buttonsCheckArr) {


        if (iterator.classList.contains('checked')) {

            checksPasswordLevelBasedRange();
        }

    }

};



// events

inputRangeElement.addEventListener("input", calculatePercentageBar);

inputRangeElement.addEventListener("input", showBarValue);

btnPasswordGenerator.addEventListener('click', generateFinalPassword);

btnPasswordGenerator.addEventListener('click', checkPasswordLevel);

btnCopyPassword.addEventListener('click', () => {

    if (password.textContent !== 'P4$5W0rD!') {

        const textToCopy = password.textContent;

        const tempInput = document.createElement('input');

        tempInput.value = textToCopy;

        document.body.appendChild(tempInput);

        tempInput.select();

        document.execCommand('copy');

        document.body.removeChild(tempInput);

    }

});