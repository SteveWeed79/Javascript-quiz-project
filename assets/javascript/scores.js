var scoreIn = document.querySelector("#listEl");
var grabIni = localStorage.getItem("final")

function renderLastRegistered() {
    var hold = JSON.parse(grabIni);
    //var grabScore = localStorage.getItem("score");
    //var combined = grabIni + "  " + grabScore;


    console.log(hold)



    function renderTodos() {


        for (var i = 0; i < hold.length; i++) {

            var scores = grabiIni[i];

            var li = document.createElement("li");
            li.textContent = "combined";

            console.log(combined)
            scoreIn.appendChild(li);
        }
    }
    renderTodos()

}


renderLastRegistered()