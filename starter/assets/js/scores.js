var playerSavedInfo = JSON.parse(localStorage.getItem("playerInfo"));

var scoreList = document.getElementById("highscores");

var list = document.createElement("li");

var scoreNumber = playerSavedInfo[0];
var initials = playerSavedInfo[1];

list.textContent = initials + " - " + scoreNumber;

scoreList.appendChild(list);

// AB - 22
