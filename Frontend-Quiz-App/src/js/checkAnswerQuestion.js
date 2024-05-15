import { showsResultContainer } from './toggleContainerQuiz.js';
import { containerHeaderIcon } from './showTechnologyIcon.js';

export const alternativeContainer = document.querySelectorAll('.container-options');
export const containerIconCorrectOrWrong = document.querySelectorAll('.icon-container-option');

export const btnSubmitAnswer = document.getElementById('submit-answer-btn');
export const btnNextQuestion = document.getElementById('next-question-btn');

export const btnPlayAgain = document.getElementById('play-again-btn');

let questionNumberElement = document.getElementById('question-number');



// * mark the clicked alternative

alternativeContainer.forEach(alternative => {

    alternative.addEventListener('click', () => {

        alternativeContainer.forEach(botao => botao.classList.remove('checked'))

        if (!(alternative.classList.contains('error')) && !(alternative.classList.contains('correct'))) {
            alternative.classList.add('checked')
        };

    });

});


// * Gets the text of the clicked alternative

let alternativeText = '';

alternativeContainer.forEach(alternative => {

    alternative.addEventListener('click', () => alternativeText = alternative.querySelector('p').textContent);

});



// * removes correct and incorrect question styles

export const resetAlternativeStyles = () => {

    alternativeContainer.forEach(alternative => {

        alternative.classList.remove('checked');

        alternative.classList.remove('error');

        alternative.classList.remove('correct');

    });

    containerIconCorrectOrWrong.forEach(containerIcon => containerIcon.classList.add('hidden'));

};


// * counts the correct questions and increases the progress bar with each correct question

let correctQuestionsElements = document.getElementById('correct-questions');
let correctQuestions = 0;

const progressBar = document.getElementById('bar-progesss');
let progressBarCounter = 0;

const countCorrectQuestions = (correctAlternativeOne, correctAlternativeTwo) => {
    
    if (alternativeText == correctAlternativeOne || alternativeText == correctAlternativeTwo) {
        
        if (correctQuestions < 10) {
            correctQuestions++;
            correctQuestionsElements.textContent = correctQuestions;


            progressBarCounter += 10;
            
            progressBar.classList.add(`w-${progressBarCounter}`)
            progressBar.classList.remove(`w-${progressBarCounter - 10}`)
        }

    }

};


// * mark the incorrect alternatives and the correct alternative

const markRightWrongAlternatives = (correctAlternativeOne, correctAlternativeTwo) => {

    alternativeContainer.forEach(alternative => {

        const textAlternative = alternative.querySelector('p').textContent;
        let iconeImg = alternative.querySelector('img');

        if (textAlternative == correctAlternativeOne || textAlternative == correctAlternativeTwo) {

            alternative.classList.add('correct');

            containerIconCorrectOrWrong.forEach(containerIcon => {
                containerIcon.classList.remove('hidden');

                iconeImg.src = '../../src/images/icon-correct.svg';
            });
           
        } else {
            alternative.classList.add('error');

            iconeImg.src = '../../src/images/icon-error.svg';
        }
    });

};



export const verifySelectedAnswer = (chosenQuizQuestions, index) => {
    // * current question answer index
    let currentIndex = index;
    
    let questionNumber = 1;

    return () => {

        // * prevents something from being executed if there is no alternative selected
        const markedOption = document.querySelector('.container-options.checked');

        if (!markedOption) return;


        markRightWrongAlternatives(chosenQuizQuestions?.[currentIndex]?.answer, chosenQuizQuestions?.[currentIndex]?.answerPT);

        countCorrectQuestions(chosenQuizQuestions?.[currentIndex]?.answer, chosenQuizQuestions?.[currentIndex]?.answerPT);


        // * increment the current index so we can access the next answer
        if (currentIndex < 10) currentIndex++;
        

        // * shows the current issue
        if (questionNumber < 10) questionNumber++;
        questionNumberElement.textContent = questionNumber;


        // * shows check answer button and hides next button
        btnNextQuestion.classList.remove('hidden');
        btnSubmitAnswer.classList.add('hidden');
    };

};


// * reset the elements so we can start the quiz again without information from previous quizzes

btnPlayAgain.addEventListener('click', () => {
    // * hide header icon container
    containerHeaderIcon.classList.add('hidden')


    // * resets the correct questions
    correctQuestions = 0
    correctQuestionsElements.textContent = correctQuestions;


    // * resets the current question we are in so that it starts with the first question
    let questionNumber = 1;
    questionNumberElement.textContent = questionNumber


    // * resets the progress bar for correct questions
    progressBar.classList.remove(`w-${progressBarCounter}`)
    progressBarCounter = 0
    progressBar.classList.add('w-0')


    // * shows again the initial container of available questionnaires
    showsResultContainer();
});