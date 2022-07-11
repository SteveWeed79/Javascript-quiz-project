var playerName = JSON.parse(localStorage.getItem("playerName"));
var finalScore = JSON.parse(localStorage.getItem("finalScore"));
var list = document.getElementById("listEl");
function renderLastRegistered() {

    for (var i = 0; i < playerName.length; i++) {

        var scores = finalScore[i] + " ";
        var player = playerName[i];
        var read = player.concat(scores)
        var listItem = read.join(' - ');
        console.log(listItem)
        var li = document.createElement("li");
        li.classList.add("div2")
        li.textContent = listItem;

        document.getElementsByTagName('ul')[0].append(li)

    }

}

renderLastRegistered()