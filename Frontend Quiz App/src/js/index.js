import { btnDarkMode, toggleDarkMode, getPrefenceDarkMode } from './toggleDarkMode.js';

import { availableQuizzesContainer, quizQuestionsContainer } from './toggleContainerQuiz.js';

import { fetchQuestions } from './getDataFromQuestions.js';

import {
    quizzesContainer, titlesToIndex,
    renderQuestion, showNextQuestion,
    btnNextQuestion
} from './showQuestion.js';

import { verifySelectedAnswer, btnSubmitAnswer } from './checkAnswerQuestion.js';

import { showIcon } from './showTechnologyIcon.js';



quizzesContainer.forEach(item => {
    item.addEventListener('click', async (event) => {
        const targetEl = event.target;
        const parentEl = targetEl.closest('.container-name-tech');
        const parentElTitle = parentEl.querySelector('.name-tech').textContent;

        const index = titlesToIndex[parentElTitle];

        if (index !== undefined) {
            const questionsData = await fetchQuestions();
            const chosenQuiz = questionsData.quizzes[index];
            const chosenQuizQuestions = chosenQuiz.questions;

            showIcon(index);
           
            renderQuestion(chosenQuizQuestions[0].question, chosenQuizQuestions[0].options);

            btnSubmitAnswer.addEventListener('click', verifySelectedAnswer(chosenQuizQuestions, 0))

            btnNextQuestion.addEventListener('click', showNextQuestion(chosenQuizQuestions, 0))
        }

    });
});