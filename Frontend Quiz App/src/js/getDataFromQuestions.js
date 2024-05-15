// * get the data from the quiz questions
export const fetchQuestions = async () => {
    const response = await fetch('./src/data/questions.json');

    return await response.json();
};