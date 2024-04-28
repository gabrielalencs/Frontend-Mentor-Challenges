let boardNumber = document.querySelector('.advice-number span');
let adviceText = document.querySelector('.advice-text');
const btnGenerateAdvice = document.querySelector('.button-container');

const getAdvice = async () => {
    const apiUrl = 'https://api.adviceslip.com/advice';
    const response = await fetch(apiUrl);
    const responseJson = await response.json();

    console.log(responseJson);

    boardNumber.textContent = responseJson.slip.id;
    adviceText.textContent = responseJson.slip.advice;
};

const handleButtonClick = async () => {
    btnGenerateAdvice.classList.add('waiting');
    btnGenerateAdvice.style.cursor = 'not-allowed';
    btnGenerateAdvice.setAttribute('disabled', true);

    await getAdvice();

    setTimeout(() => {
        btnGenerateAdvice.classList.remove('waiting');
        btnGenerateAdvice.style.cursor = 'pointer';
        btnGenerateAdvice.removeAttribute('disabled');
    }, 2000);
};

btnGenerateAdvice.addEventListener('click', handleButtonClick);