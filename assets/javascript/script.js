
var startQuiz = document.querySelector("#start");
var oneClick = document.querySelector("#buttonOne")

var selectedQuestion = [];


function pickQuestion() {
    let i = 0
    var selectedQuestion = questions[i];
    document.getElementById("questionContainer").innerHTML = selectedQuestion.questionText;
    document.getElementById("buttonOne").innerHTML = selectedQuestion.choices[0];
    document.getElementById("buttonTwo").innerHTML = selectedQuestion.choices[1];
    document.getElementById("buttonThree").innerHTML = selectedQuestion.choices[2];
    document.getElementById("buttonFour").innerHTML = selectedQuestion.choices[3];
    console.log(selectedQuestion)
    i++
    oneClick.addEventListener("click", nextQuestion);
    function nextQuestion() {
        if (i >= 5) {
            var selectedQuestion = questions[i];
            document.getElementById("questionContainer").innerHTML = selectedQuestion.questionText;
            document.getElementById("buttonOne").innerHTML = selectedQuestion.choices[0];
            document.getElementById("buttonTwo").innerHTML = selectedQuestion.choices[1];
            document.getElementById("buttonThree").innerHTML = selectedQuestion.choices[2];
            document.getElementById("buttonFour").innerHTML = selectedQuestion.choices[3];
            console.log(selectedQuestion)
             i++
             nextQuestion()
        } else {
            return
        }
    }

}



startQuiz.addEventListener("click", pickQuestion);
//document.getElementById("questionPlacement").innerHTML = printQuestion;