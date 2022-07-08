
var startQuiz = document.querySelector("#start");
var oneClick = document.querySelector(".button");
var answerButton = [];

var selectedQuestion = [];


function pickQuestion() {
    let i = 0
    var selectedQuestion = questions[i];
    document.getElementById("questionContainer").innerHTML = selectedQuestion.questionText;
    document.getElementById("buttonOne").innerHTML = selectedQuestion.choices[0];
    document.getElementById("buttonTwo").innerHTML = selectedQuestion.choices[1];
    document.getElementById("buttonThree").innerHTML = selectedQuestion.choices[2];
    document.getElementById("buttonFour").innerHTML = selectedQuestion.choices[3];
    var selectedAnswer = selectedQuestion.answer;
    i++

    oneClick.addEventListener("click", nextQuestion);


    function nextQuestion() {

        if (selectedQuestion.choices = selectedAnswer) {
            document.getElementById("rightWrong").innerHTML = "Correct!";
            pickQuestion()
        } else {
            document.getElementById("rightWrong").innerHTML = "Wrong!";
        }

    }
}




startQuiz.addEventListener("click", pickQuestion);
//document.getElementById("questionPlacement").innerHTML = printQuestion;