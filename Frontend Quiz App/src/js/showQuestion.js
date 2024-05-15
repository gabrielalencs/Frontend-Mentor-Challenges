import { toggleContainerPunctuation } from './toggleContainerQuiz.js';
import { resetAlternativeStyles } from './checkAnswerQuestion.js';

let questionTitle = document.getElementById('main-question');
let firstAlternative = document.getElementById('first-alternative');
let secondAlternative = document.getElementById('second-alternative');
let thirdAlternative = document.getElementById('third-alternative');
let fourthAlternative = document.getElementById('fourth-alternative');


export const quizzesContainer = document.querySelectorAll('.container-name-tech');
export const btnSubmitAnswer = document.getElementById('submit-answer-btn');
export const btnNextQuestion = document.getElementById('next-question-btn');


export const titlesToIndex = {
    'HTML': 0,
    'CSS': 1,
    'JavaScript': 2,
    'Accessibility': 3
};


// * renders the alternatives and the question according to the current index

export const renderQuestion = async (question, alternatives) => {
    questionTitle.textContent = question;

    firstAlternative.textContent = alternatives[0];
    secondAlternative.textContent = alternatives[1];
    thirdAlternative.textContent = alternatives[2];
    fourthAlternative.textContent = alternatives[3];
};



export const showNextQuestion = (chosenQuizQuestions, index) => {
    // * current question index
    let currentIndex = index;

    return () => {
        
        currentIndex++;
        if (currentIndex < 10) {

            renderQuestion(
                chosenQuizQuestions[currentIndex].question,
                chosenQuizQuestions[currentIndex].options
            );

        }

        // * If I have already gone through all the questions, I will show you the results of the quiz
        if (currentIndex > 9) {
            currentIndex = 0

            toggleContainerPunctuation();
        }

        resetAlternativeStyles();


        // * shows button for next question and hides button for checking answer
        btnNextQuestion.classList.add('hidden');
        btnSubmitAnswer.classList.remove('hidden');
    };

};