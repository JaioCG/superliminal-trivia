const currQuestionType = document.getElementById('currQuestionType');
const currQuestionText = document.getElementById('currQuestionText');
const currQuestionImg = document.getElementById('currQuestionImg');
const currQuestionAns = document.getElementById('currQuestionAns');
const nextQuestionType = document.getElementById('nextQuestionType');

const currQuestionTypeRep = nodecg.Replicant('currQuestionType');
const currQuestionRep = nodecg.Replicant('currQuestion');
const currImageRep = nodecg.Replicant('currImage');

var currentQuestionNum = 0;

function loadQuestion()
{
    fetch('../graphics/assets/questions.json') // no second ../ for some reason
    .then(response => response.json())
    .then((json) => {
        const QUESTIONS = json;

        let questionType = QUESTIONS.questions[currentQuestionNum].type;
        currQuestionType.innerHTML = `Question ${currentQuestionNum}: ${questionType}`;
        currQuestionTypeRep.value = questionType;
        let question = QUESTIONS.questions[currentQuestionNum].question;
        currQuestionText.innerHTML = question;
        currQuestionRep.value = question;
        let image = QUESTIONS.questions[currentQuestionNum].img;
        currQuestionImg.src = image;
        currImageRep.value = image;
        currQuestionAns.innerHTML = `Answer: ${QUESTIONS.questions[currentQuestionNum].answer}`;
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