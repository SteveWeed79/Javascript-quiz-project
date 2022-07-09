
var startQuiz = document.querySelector("#start");
var btnContainerEl = document.querySelector(".parent")
var answerButton = [];
var selectedQuestion = [];
let qCounter = 0
var timeLeft = 30;
var timeInterval;
var timerEl = document.getElementById("start")

function startGame() {
    var startQuiz = document.querySelector("#start");
    countdown()
    pickQuestion()
    startQuiz.removeEventListener("click", startGame, false);
    btnContainerEl.addEventListener("click", nextQuestion)
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
        if (event.target.matches("button")){
            var selectedQuestion = questions[qCounter];
            var selectedAnswer = selectedQuestion.answer;
        if (event.target.textContent === selectedAnswer) {
            document.getElementById("rightWrong").innerHTML = "Correct!";
            pickQuestion()
        } else {
            document.getElementById("rightWrong").innerHTML = "Wrong!";
            timeLeft -= 10
        }
        qCounter++
        if (qCounter === questions.length - 1) {
            endGame()
        } else {
        pickQuestion();
        }
    }
    }
    function endGame() {
        timerEl.textContent = '';
  
        clearInterval(timeInterval);

        displayMessage();
    }




startQuiz.addEventListener("click", startGame);

//document.getElementById("questionPlacement").innerHTML = printQuestion;