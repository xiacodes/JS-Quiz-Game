// Start Screen variables
var startBtn = document.getElementById("start");
var startScreen = document.getElementById("start-screen");

// Questions Screen variables
var questionsScreen = document.getElementById("questions");
var choicesList = document.getElementById("choices-list");
var questionTitle = document.getElementById("question-title");

// The start button
startBtn.addEventListener("click", function () {
	startScreen.classList.add("hide");
	questionsScreen.classList.remove("hide");
});

// Feedback Screen
var feedbackContainer = document.getElementById("feedback");
var h3 = document.createElement("h3");
