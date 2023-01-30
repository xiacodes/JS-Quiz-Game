// Start Screen variables
var startBtn = document.getElementById("start");
var startScreen = document.getElementById("start-screen");

// Questions Screen variables
var questionsScreen = document.getElementById("questions");
var choicesList = document.getElementById("choices-list");

// The start button
startBtn.addEventListener("click", function () {
	startScreen.classList.add("hide");
	questionsScreen.classList.remove("hide");
});
