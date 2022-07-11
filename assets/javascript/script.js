
var startQuiz = document.querySelector("#start");
var btnContainerEl = document.querySelector(".parent")
var answerButton = [];
var selectedQuestion = [];
var qCounter = 0
var timeLeft = (questions.length * 10);
var timeInterval;
var timerEl = document.getElementById("start")
var startBtn = document.getElementById("rightWrong")
var questionEl = document.getElementById("questionContainer")
var scoreEl = 0;
var scoreMath = (100 / questions.length);
var final = [];
var playerName = [];
var finalScore = [];

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

    questionEl.textContent = 'Enter Initials'

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

        var FN = document.createElement("input");
        FN.setAttribute("type", "text");
        FN.setAttribute("name", "Initials");
        FN.setAttribute("id", "initialsFrm")
        FN.setAttribute("placeholder", "Enter initials");

        var s = document.createElement("input");
        s.setAttribute("type", "submit");
        s.setAttribute("value", "Submit");
        s.setAttribute("id", "initialsBtn");

        form.appendChild(FN);
        form.appendChild(s);
        document.getElementById("questionContainer").appendChild(form);
    }
    initialsBtn.addEventListener("click", function (event) {
        event.preventDefault();

        var formPull = document.querySelector("#initialsFrm").value.trim();


        if (formPull === "") {
            startBtn.textContent = ("error", "Initials cannot be blank");
        } else {


            playerFetch = [formPull]
            scoreFetch = [scoreEl + "%"]
            playerName.push(playerFetch)
            finalScore.push(scoreFetch)

            //final.push(playerName, finalScore);

            localStorage.setItem("playerName", JSON.stringify(playerName));
            localStorage.setItem("finalScore", JSON.stringify(finalScore));

            restartGame()

            function restartGame() {

                document.getElementById("questionContainer").textContent = "Press Start below when you are ready to begin.";
                document.getElementById("buttonOne").textContent = "Let's";
                document.getElementById("buttonTwo").textContent = "Do";
                document.getElementById("buttonThree").textContent = "This";
                document.getElementById("buttonFour").textContent = "Again!";
                document.getElementById("rightWrong").textContent = "";
                timerEl.textContent = 'Start';
                qCounter = 0;
                scoreEl = 0;
                timeLeft = (questions.length * 10);
                startQuiz.addEventListener("click", startGame);


            }



        }

    })
}


startQuiz.addEventListener("click", startGame);

