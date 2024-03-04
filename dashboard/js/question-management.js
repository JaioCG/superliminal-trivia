const currQuestionType = document.getElementById('currQuestionType');
const currQuestionText = document.getElementById('currQuestionText');
const currQuestionImg = document.getElementById('currQuestionImg');
const nextQuestionType = document.getElementById('nextQuestionType');

var currentQuestionNum = 0;

function loadQuestion()
{
    fetch('../graphics/assets/questions.json') // no second ../ for some reason
    .then(response => response.json())
    .then((json) => {
        const QUESTIONS = json;

        currQuestionType.innerHTML = `Question ${currentQuestionNum + 1}: ${QUESTIONS.questions[currentQuestionNum].type}`;
        currQuestionText.innerHTML = QUESTIONS.questions[currentQuestionNum].question;
        currQuestionImg.src = QUESTIONS.questions[currentQuestionNum].img;
        nextQuestionType.innerHTML = `Next question type: ${QUESTIONS.questions[currentQuestionNum + 1].type}`;
    });
}

function changeQuestion(arg)
{
    if (currentQuestionNum + arg >= 0)
    {
        currentQuestionNum += arg;
    }
    loadQuestion();
}

function resetQuestion()
{
    if (confirm('Are you sure you want to reset to Question 1?'))
    {
        currentQuestionNum = 0;
        loadQuestion();
    }
}

loadQuestion(); // load the first question