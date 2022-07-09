
var startQuiz = document.querySelector("#start");
var btnContainerEl = document.querySelector(".parent")
var answerButton = [];
var selectedQuestion = [];
let qCounter = 0
var timeLeft = (questions.length * 15);
var timeInterval;
var timerEl = document.getElementById("start")
var startBtn = document.getElementById("rightWrong")
var questionEl = document.getElementById("questionContainer")
var scoreEl = 0;
var scoreMath = (100 / questions.length);

function startGame() {
    var startQuiz = document.querySelector("#start");
    countdown()
    pickQuestion()
    startQuiz.removeEventListener("click", startGame, false);
    btnContainerEl.addEventListener("click", nextQuestion);
}

function countdown() {

    timeInterval = setInterval(function () {
        if (timeLeft > 1) {
            timerEl.innerHTML = timeLeft + ' seconds remaining';
            timeLeft--;
        } else if (timeLeft === 1) {
            timerEl.innerHTML = timeLeft + ' second remaining';
            timeLeft--;
        } else {
            endGame()
        }
    }, 1000);
}

function pickQuestion() {

    var selectedQuestion = questions[qCounter];
    document.getElementById("questionContainer").textContent = selectedQuestion.questionText;
    document.getElementById("buttonOne").textContent = selectedQuestion.choices[0];
    document.getElementById("buttonTwo").textContent = selectedQuestion.choices[1];
    document.getElementById("buttonThree").textContent = selectedQuestion.choices[2];
    document.getElementById("buttonFour").textContent = selectedQuestion.choices[3];


}

function nextQuestion(event) {
    if (event.target.matches("button")) {
        var selectedQuestion = questions[qCounter];
        var selectedAnswer = selectedQuestion.answer;
        if (event.target.textContent === selectedAnswer) {
            document.getElementById("rightWrong").innerHTML = "Correct!";
            pickQuestion()
            scoreEl += scoreMath;
        } else {
            document.getElementById("rightWrong").innerHTML = "Wrong!";
            timeLeft -= 10
        }
        qCounter++
        if (qCounter === questions.length) {
            endGame()
        } else {
            pickQuestion();
        }
    }
}
function endGame() {
    var scoreFinal = ((100 * scoreEl) / questions.length);

    questionEl.textContent = 'Enter Initals'

    timerEl.textContent = '';

    startBtn.textContent = 'You Scored ' + scoreEl + "%";

    document.getElementById("buttonOne").textContent = "";
    document.getElementById("buttonTwo").textContent = "";
    document.getElementById("buttonThree").textContent = "";
    document.getElementById("buttonFour").textContent = "";



    clearInterval(timeInterval);

    btnContainerEl.removeEventListener("click", nextQuestion);

    createForm()

    function createForm() {

        var form = document.createElement("form");
        //form.setAttribute("type", "submit");
        //form.setAttribute("action", "submit.php");

        var FN = document.createElement("input");
        FN.setAttribute("type", "text");
        FN.setAttribute("name", "Initals");
        FN.setAttribute("placeholder", "Enter initals");

        var s = document.createElement("input");
        s.setAttribute("type", "submit");
        s.setAttribute("value", "Submit");

        form.appendChild(FN);
        form.appendChild(s);
        document.getElementById("questionContainer").appendChild(form);

    }
}


startQuiz.addEventListener("click", startGame);

//document.getElementById("questionPlacement").innerHTML = printQuestion;