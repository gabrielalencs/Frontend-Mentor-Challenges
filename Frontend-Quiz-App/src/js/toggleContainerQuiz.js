const quizzesContainer = document.querySelectorAll('.container-name-tech');
const availableQuizzesContainer = document.getElementById('available-quizzes-container');
const quizQuestionsContainer = document.getElementById('quiz-questions-container');
const punctuationsQuizContainer = document.getElementById('punctuations-container');


// * shows container of available questionnaires
export const showsResultContainer = () => {
    availableQuizzesContainer.classList.remove('opacity-0');
    availableQuizzesContainer.classList.add('opacity-100');
    availableQuizzesContainer.classList.add('z-30');


    punctuationsQuizContainer.classList.remove('opacity-100');
    punctuationsQuizContainer.classList.add('opacity-0');
    punctuationsQuizContainer.classList.remove('z-30');


    quizQuestionsContainer.classList.remove('opacity-100');
    quizQuestionsContainer.classList.add('opacity-0');
    quizQuestionsContainer.classList.remove('z-30');
}


// * shows the question container and hides the available questionnaire container
const toggleContainerQuiz = () => {
    quizQuestionsContainer.classList.add('opacity-100');
    quizQuestionsContainer.classList.remove('opacity-0');
    quizQuestionsContainer.classList.add('z-30');

    availableQuizzesContainer.classList.add('opacity-0');
    availableQuizzesContainer.classList.remove('opacity-100');
    availableQuizzesContainer.classList.remove('z-30');
};


// * shows the quiz results container and hides the questions container
const toggleContainerPunctuation = () => {
    punctuationsQuizContainer.classList.add('opacity-100');
    punctuationsQuizContainer.classList.remove('opacity-0');
    punctuationsQuizContainer.classList.add('z-30');

    quizQuestionsContainer.classList.remove('opacity-100');
    quizQuestionsContainer.classList.add('opacity-0');
    quizQuestionsContainer.classList.remove('z-30');
}


quizzesContainer.forEach(item => item.addEventListener('click', toggleContainerQuiz));


export { availableQuizzesContainer, quizQuestionsContainer, toggleContainerPunctuation };